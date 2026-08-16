const fs = require("fs");
const path = require("path");
const data = require("../seedData");
const { slugify } = require("../../src/lib/slugify");

const UPLOADS_ROOT = path.join(__dirname, "..", "..", "uploads");

function copyAsset(sourceRelPath, category) {
  const sourcePath = path.join(__dirname, sourceRelPath);
  if (!fs.existsSync(sourcePath)) {
    console.warn(`  ! asset not found, skipping: ${sourcePath}`);
    return null;
  }
  const ext = path.extname(sourcePath);
  const base = path.basename(sourcePath, ext);
  const filename = `${slugify(base)}${ext.toLowerCase()}`;

  const destDir = path.join(UPLOADS_ROOT, category);
  fs.mkdirSync(destDir, { recursive: true });
  fs.copyFileSync(sourcePath, path.join(destDir, filename));

  return `/uploads/${category}/${filename}`;
}

exports.seed = async function seed(knex) {
  console.log("Seeding from src/white/data.js snapshot...");

  // Clear in FK-safe order so this seed can be re-run during development.
  await knex("known_for").del();
  await knex("projects").del();
  await knex("awards").del();
  await knex("testimonials").del();
  await knex("experience").del();
  await knex("education").del();
  await knex("services").del();
  await knex("process_steps").del();
  await knex("tech_stack_groups").del();
  await knex("socials").del();
  await knex("professional_profiles").del();
  await knex("pages").del();
  await knex("site_settings").del();

  // -- assets -----------------------------------------------------------
  const avatarUrl = copyAsset(data.profileImages.avatar, "profile");
  const workstationUrl = copyAsset(data.profileImages.workstation, "profile");
  const cvUrl = copyAsset(data.profileImages.cv, "profile");

  // -- projects (first: known_for and site-content both reference them) --
  const projectIdBySlug = {};
  for (const [index, project] of data.projects.entries()) {
    const imageUrl = copyAsset(project.imagePath, "projects");
    const [row] = await knex("projects")
      .insert({
        slug: project.slug,
        name: project.name,
        category: project.category,
        role: project.role,
        year: project.year,
        description: project.description,
        stack: JSON.stringify(project.stack),
        live_url: project.live_url,
        repo_url: project.repo_url,
        image_url: imageUrl,
        constraint_text: project.constraint_text,
        sort_order: index,
      })
      .returning(["id", "slug"]);
    projectIdBySlug[row.slug] = row.id;
  }

  // -- known for ----------------------------------------------------------
  await knex("known_for").insert(
    data.knownFor.map((item, index) => ({
      label: item.label,
      suffix: item.suffix,
      href: item.href,
      project_id: item.projectSlug ? projectIdBySlug[item.projectSlug] : null,
      sort_order: index,
    })),
  );

  // -- awards ---------------------------------------------------------------
  for (const [index, award] of data.awards.entries()) {
    const imageUrl = copyAsset(award.imagePath, "awards");
    const links = award.links.map((link) => ({
      label: link.label,
      href: link.href === "__SELF_IMAGE__" ? imageUrl : link.href,
    }));
    await knex("awards").insert({
      title: award.title,
      subtitle: award.subtitle,
      year: award.year,
      role: award.role,
      description: award.description,
      image_url: imageUrl,
      links: JSON.stringify(links),
      sort_order: index,
    });
  }

  // -- simple collections -----------------------------------------------
  await knex("testimonials").insert(
    data.testimonials.map((t, index) => ({ ...t, sort_order: index })),
  );

  await knex("experience").insert(
    data.experience.map((e, index) => ({
      role: e.role,
      org: e.org,
      type: e.type,
      location: e.location,
      period: e.period,
      summary: e.summary,
      description: e.description,
      highlights: JSON.stringify(e.highlights),
      stack: e.stack,
      url: e.url,
      sort_order: index,
    })),
  );

  await knex("education").insert(
    data.education.map((e, index) => ({ ...e, sort_order: index })),
  );

  await knex("services").insert(
    data.services.map((s, index) => ({ ...s, sort_order: index })),
  );

  await knex("process_steps").insert(
    data.process.map((s, index) => ({ ...s, sort_order: index })),
  );

  await knex("tech_stack_groups").insert(
    data.techStack.map((group, index) => ({
      label: group.label,
      items: JSON.stringify(group.items),
      sort_order: index,
    })),
  );

  await knex("professional_profiles").insert(
    data.professionalProfiles.map((p, index) => ({ ...p, sort_order: index })),
  );

  await knex("socials").insert(
    data.socials.map((s, index) => ({
      group: s.group,
      icon: s.icon,
      title: s.title,
      href: s.icon === "file" ? cvUrl : s.href,
      is_download: !!s.is_download,
      sort_order: index,
    })),
  );

  await knex("pages").insert(
    data.pages.map((p) => ({
      route: p.route,
      label: p.label,
      meta_title: p.meta_title,
      meta_description: p.meta_description,
      og_image_url: null,
      canonical_path: p.route,
      no_index: false,
    })),
  );

  // -- settings (singleton config, key/value JSON) -----------------------
  const profile = { ...data.profile, avatar_url: avatarUrl, workstation_image_url: workstationUrl, cv_url: cvUrl };
  const seo = { ...data.seo, defaultOgImage: avatarUrl };

  await knex("site_settings").insert([
    { key: "profile", value: JSON.stringify(profile) },
    { key: "availability", value: JSON.stringify(data.availability) },
    { key: "practice", value: JSON.stringify(data.practice) },
    { key: "now", value: JSON.stringify(data.now) },
    { key: "about_paragraphs", value: JSON.stringify(data.aboutParagraphs) },
    { key: "stats", value: JSON.stringify(data.stats) },
    { key: "fast_facts", value: JSON.stringify(data.fastFacts) },
    { key: "expertise", value: JSON.stringify(data.expertise) },
    { key: "skills", value: JSON.stringify(data.skills) },
    { key: "seo", value: JSON.stringify(seo) },
  ]);

  console.log("Seed complete.");
};
