const express = require("express");
const db = require("../db");

const router = express.Router();

function settingsMap(rows) {
  const map = {};
  for (const row of rows) map[row.key] = row.value;
  return map;
}

// Reshapes the normalized DB rows back into the exact top-level shape/field
// names of today's src/white/data.js exports, so a future frontend swap from
// the static file to this endpoint is a minimal import change, not a
// reshaping exercise. The DB is allowed better names (slug/image_url) than
// the legacy shape (id/image) — this mapper is what papers over that.
router.get("/", async (req, res, next) => {
  try {
    const [
      settingsRows,
      knownForRows,
      professionalProfilesRows,
      socialsRows,
      experienceRows,
      educationRows,
      projectsRows,
      servicesRows,
      processRows,
      awardsRows,
      testimonialsRows,
      techStackRows,
    ] = await Promise.all([
      db("site_settings").select("key", "value"),
      db("known_for")
        .leftJoin("projects", "known_for.project_id", "projects.id")
        .orderBy("known_for.sort_order", "asc")
        .select(
          "known_for.label",
          "known_for.suffix",
          "known_for.href",
          "projects.slug as project_slug",
        ),
      db("professional_profiles").orderBy("sort_order", "asc"),
      db("socials").orderBy("sort_order", "asc"),
      db("experience").orderBy("sort_order", "asc"),
      db("education").orderBy("sort_order", "asc"),
      db("projects").orderBy("sort_order", "asc"),
      db("services").orderBy("sort_order", "asc"),
      db("process_steps").orderBy("sort_order", "asc"),
      db("awards").orderBy("sort_order", "asc"),
      db("testimonials").orderBy("sort_order", "asc"),
      db("tech_stack_groups").orderBy("sort_order", "asc"),
    ]);

    const settings = settingsMap(settingsRows);

    res.set("Cache-Control", "public, max-age=300");
    res.json({
      profile: settings.profile || {},
      availability: settings.availability || {},
      practice: settings.practice || [],
      now: settings.now || {},
      knownFor: knownForRows.map((r) => ({
        label: r.label,
        suffix: r.suffix,
        href: r.href,
        projectId: r.project_slug || undefined,
      })),
      professionalProfiles: professionalProfilesRows.map((r) => ({
        label: r.label,
        href: r.href,
      })),
      socials: socialsRows.map((r) => ({
        group: r.group,
        icon: r.icon,
        title: r.title,
        href: r.href,
        download: r.is_download,
      })),
      skills: settings.skills || [],
      aboutParagraphs: settings.about_paragraphs || [],
      experience: experienceRows.map((r) => ({
        role: r.role,
        org: r.org,
        type: r.type,
        location: r.location,
        period: r.period,
        summary: r.summary,
        description: r.description,
        highlights: r.highlights,
        stack: r.stack,
        url: r.url || undefined,
      })),
      education: educationRows.map((r) => ({
        institution: r.institution,
        degree: r.degree,
        period: r.period,
        note: r.note,
      })),
      projects: projectsRows.map((r) => ({
        id: r.slug,
        name: r.name,
        category: r.category,
        role: r.role,
        year: r.year,
        description: r.description,
        stack: r.stack,
        live: r.live_url,
        repo: r.repo_url,
        image: r.image_url,
        constraint: r.constraint_text,
        seoTitle: r.seo_title || undefined,
        seoDescription: r.seo_description || undefined,
      })),
      services: servicesRows.map((r) => ({
        title: r.title,
        description: r.description,
        slug: r.slug || undefined,
        contentMd: r.content_md || undefined,
        image: r.cover_image_url || undefined,
        seoTitle: r.seo_title || undefined,
        seoDescription: r.seo_description || undefined,
      })),
      process: processRows.map((r) => ({
        title: r.title,
        description: r.description,
      })),
      awards: awardsRows.map((r) => ({
        title: r.title,
        subtitle: r.subtitle,
        year: r.year,
        role: r.role,
        description: r.description,
        image: r.image_url,
        links: r.links,
        seoTitle: r.seo_title || undefined,
        seoDescription: r.seo_description || undefined,
      })),
      testimonials: testimonialsRows.map((r) => ({
        quote: r.quote,
        name: r.name,
        title: r.title,
        avatar: r.avatar_url || undefined,
      })),
      stats: settings.stats || [],
      techStack: techStackRows.map((r) => ({
        label: r.label,
        items: r.items,
      })),
      fastFacts: settings.fast_facts || [],
      expertise: settings.expertise || [],
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
