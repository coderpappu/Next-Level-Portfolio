// Loaded unconditionally (not just outside production) so a plain uploaded
// .env file works for a file-manager-style deploy, not only cPanel's
// per-field env-var UI. Harmless either way: dotenv no-ops if the file is
// absent, and never overrides a variable the host already injected into
// process.env, so cPanel's own env-var UI still wins if you use that instead.
require("dotenv").config();

const app = require("./app");

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
