// Config-driven definitions for the 12 resources that share an identical
// CRUD shape server-side (see server/src/lib/collectionRouter.js). Each
// entry here drives both <CollectionListPage> and <CollectionFormPage> —
// see src/pages/CollectionListPage.jsx / CollectionFormPage.jsx.
//
// `apiPath` is the URL segment used against /api/admin/{apiPath}.
// `uiPath` is the URL segment used for the admin app's own routes — kept
// separate so a human-friendly route (e.g. /tech-stack) never has to match
// the API's resource name (tech-stack-groups) by accident.

const AWARD_LINK_SUBFIELDS = [
  { name: "label", label: "Label", type: "text" },
  { name: "href", label: "URL", type: "url" },
];

export const resourceConfigs = [
  {
    apiPath: "projects",
    uiPath: "projects",
    label: "Projects",
    singular: "Project",
    reorderable: true,
    listColumns: [
      { key: "name", label: "Name" },
      { key: "slug", label: "Slug" },
      { key: "category", label: "Category" },
      { key: "year", label: "Year" },
    ],
    fields: [
      { name: "slug", label: "Slug", type: "text", required: true, hint: "Must be unique, used in the project URL." },
      { name: "name", label: "Name", type: "text", required: true },
      { name: "category", label: "Category", type: "text" },
      { name: "role", label: "Role", type: "text" },
      { name: "year", label: "Year", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "stack", label: "Stack", type: "array-of-strings" },
      { name: "live_url", label: "Live URL", type: "url" },
      { name: "repo_url", label: "Repo URL", type: "url" },
      { name: "image_url", label: "Image", type: "image", category: "projects" },
      { name: "constraint_text", label: "Known Limit", type: "textarea" },
      { name: "seo_title", label: "SEO Title", type: "text" },
      { name: "seo_description", label: "SEO Description", type: "textarea" },
    ],
  },
  {
    apiPath: "awards",
    uiPath: "awards",
    label: "Awards",
    singular: "Award",
    reorderable: true,
    listColumns: [
      { key: "title", label: "Title" },
      { key: "subtitle", label: "Subtitle" },
      { key: "year", label: "Year" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "subtitle", label: "Subtitle", type: "text" },
      { name: "year", label: "Year", type: "text" },
      { name: "role", label: "Role", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "image_url", label: "Image", type: "image", category: "awards" },
      { name: "links", label: "Links", type: "array-of-objects", subfields: AWARD_LINK_SUBFIELDS, itemLabel: "Link" },
      { name: "seo_title", label: "SEO Title", type: "text" },
      { name: "seo_description", label: "SEO Description", type: "textarea" },
    ],
  },
  {
    apiPath: "testimonials",
    uiPath: "testimonials",
    label: "Testimonials",
    singular: "Testimonial",
    reorderable: true,
    listColumns: [
      { key: "name", label: "Name" },
      { key: "title", label: "Title" },
    ],
    fields: [
      { name: "quote", label: "Quote", type: "textarea" },
      { name: "name", label: "Name", type: "text" },
      { name: "title", label: "Title", type: "text" },
      { name: "avatar_url", label: "Photo", type: "image", category: "testimonials" },
    ],
  },
  {
    apiPath: "experience",
    uiPath: "experience",
    label: "Experience",
    singular: "Experience",
    reorderable: true,
    listColumns: [
      { key: "role", label: "Role" },
      { key: "org", label: "Org" },
      { key: "period", label: "Period" },
    ],
    fields: [
      { name: "role", label: "Role", type: "text" },
      { name: "org", label: "Organization", type: "text" },
      { name: "type", label: "Type", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "period", label: "Period", type: "text" },
      { name: "summary", label: "Summary", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "highlights", label: "Highlights", type: "array-of-strings" },
      { name: "stack", label: "Stack", type: "text", hint: "Plain text, e.g. \"React, Node.js\" — not a tag list." },
      { name: "url", label: "URL", type: "url" },
    ],
  },
  {
    apiPath: "education",
    uiPath: "education",
    label: "Education",
    singular: "Education",
    reorderable: true,
    listColumns: [
      { key: "institution", label: "Institution" },
      { key: "degree", label: "Degree" },
      { key: "period", label: "Period" },
    ],
    fields: [
      { name: "institution", label: "Institution", type: "text" },
      { name: "degree", label: "Degree", type: "text" },
      { name: "period", label: "Period", type: "text" },
      { name: "note", label: "Note", type: "textarea" },
    ],
  },
  {
    apiPath: "services",
    uiPath: "services",
    label: "Services",
    singular: "Service",
    reorderable: true,
    listColumns: [
      { key: "title", label: "Title" },
      { key: "slug", label: "Slug" },
    ],
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Card Description", hint: "Short — shown on the services grid card.", type: "textarea" },
      { name: "slug", label: "Slug", type: "text", hint: "Used in the detail page URL: /services/<slug>. Leave blank to keep this service card-only, with no detail page." },
      { name: "cover_image_url", label: "Cover Image", type: "image", category: "services" },
      { name: "content_md", label: "Detail Page Content", hint: "Full write-up shown on the dedicated /services/<slug> page — headings, images, links all supported.", type: "richtext" },
      { name: "seo_title", label: "SEO Title", type: "text" },
      { name: "seo_description", label: "SEO Description", type: "textarea" },
    ],
  },
  {
    apiPath: "process-steps",
    uiPath: "process-steps",
    label: "Process Steps",
    singular: "Process Step",
    reorderable: true,
    listColumns: [{ key: "title", label: "Title" }],
    fields: [
      { name: "title", label: "Title", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
    ],
  },
  {
    apiPath: "tech-stack-groups",
    uiPath: "tech-stack",
    label: "Tech Stack",
    singular: "Tech Stack Group",
    reorderable: true,
    listColumns: [{ key: "label", label: "Label" }],
    fields: [
      { name: "label", label: "Label", type: "text" },
      { name: "items", label: "Items", type: "array-of-strings" },
    ],
  },
  {
    apiPath: "socials",
    uiPath: "socials",
    label: "Socials",
    singular: "Social Link",
    reorderable: true,
    listColumns: [
      { key: "title", label: "Title" },
      { key: "group", label: "Group" },
      { key: "icon", label: "Icon" },
    ],
    fields: [
      {
        name: "group",
        label: "Group",
        type: "select",
        options: [
          { value: "profiles", label: "Profiles" },
          { value: "contact", label: "Contact" },
        ],
      },
      {
        name: "icon",
        label: "Icon",
        type: "select",
        options: [
          { value: "globe", label: "Globe" },
          { value: "github", label: "GitHub" },
          { value: "linkedin", label: "LinkedIn" },
          { value: "facebook", label: "Facebook" },
          { value: "mail", label: "Mail" },
          { value: "message", label: "Message" },
          { value: "calendar", label: "Calendar" },
          { value: "file", label: "File" },
        ],
      },
      { name: "title", label: "Title", type: "text" },
      { name: "href", label: "Href", type: "text", hint: "URL, mailto:, tel:, or wa.me link." },
      { name: "is_download", label: "Is a download link", type: "checkbox" },
    ],
  },
  {
    apiPath: "known-for",
    uiPath: "known-for",
    label: "Known For",
    singular: "Known For Entry",
    reorderable: true,
    listColumns: [
      { key: "label", label: "Label" },
      { key: "suffix", label: "Suffix" },
    ],
    fields: [
      { name: "label", label: "Label", type: "text" },
      { name: "suffix", label: "Suffix", type: "text" },
      { name: "href", label: "Href", type: "url" },
      { name: "project_id", label: "Linked Project", type: "project-select" },
    ],
  },
  {
    apiPath: "professional-profiles",
    uiPath: "professional-profiles",
    label: "Professional Profiles",
    singular: "Professional Profile",
    reorderable: true,
    listColumns: [
      { key: "label", label: "Label" },
      { key: "href", label: "Href" },
    ],
    fields: [
      { name: "label", label: "Label", type: "text" },
      { name: "href", label: "Href", type: "url" },
    ],
  },
  {
    apiPath: "pages",
    uiPath: "pages",
    label: "Pages (SEO)",
    singular: "Page",
    reorderable: false,
    listColumns: [
      { key: "route", label: "Route" },
      { key: "label", label: "Label" },
      { key: "meta_title", label: "Meta Title" },
    ],
    fields: [
      { name: "route", label: "Route", type: "text", required: true, hint: "e.g. /about" },
      { name: "label", label: "Label", type: "text" },
      { name: "meta_title", label: "Meta Title", type: "text", required: true },
      { name: "meta_description", label: "Meta Description", type: "textarea", required: true },
      { name: "og_image_url", label: "OG Image", type: "image", category: "profile" },
      { name: "canonical_path", label: "Canonical Path", type: "text" },
      { name: "no_index", label: "Hide from search engines (noindex)", type: "checkbox" },
    ],
  },
];

export function getResourceConfig(uiPath) {
  return resourceConfigs.find((r) => r.uiPath === uiPath);
}
