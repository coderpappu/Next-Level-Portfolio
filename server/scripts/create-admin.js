require("dotenv").config();
const bcrypt = require("bcryptjs");
const db = require("../src/db");

async function main() {
  const [, , email, password] = process.argv;
  if (!email || !password) {
    console.error("Usage: node scripts/create-admin.js <email> <password>");
    process.exitCode = 1;
    return;
  }
  if (password.length < 8) {
    console.error("Password must be at least 8 characters.");
    process.exitCode = 1;
    return;
  }

  const password_hash = await bcrypt.hash(password, 12);
  const existing = await db("admin_users").where({ email }).first();

  if (existing) {
    await db("admin_users")
      .where({ email })
      .update({ password_hash, updated_at: db.fn.now() });
    console.log(`Updated password for existing admin: ${email}`);
  } else {
    await db("admin_users").insert({ email, password_hash });
    console.log(`Created admin: ${email}`);
  }
}

main()
  .catch((err) => {
    console.error(err);
    process.exitCode = 1;
  })
  .finally(() => db.destroy());
