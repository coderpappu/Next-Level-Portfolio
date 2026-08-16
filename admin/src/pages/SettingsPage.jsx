import React, { useEffect, useState } from "react";
import { api } from "../api.js";
import PageHeader from "../components/PageHeader.jsx";
import Banner from "../components/Banner.jsx";
import ProfileSection from "./settings/ProfileSection.jsx";
import AvailabilitySection from "./settings/AvailabilitySection.jsx";
import SeoSection from "./settings/SeoSection.jsx";
import NowSection from "./settings/NowSection.jsx";
import AboutParagraphsSection from "./settings/AboutParagraphsSection.jsx";
import ArrayOfObjectsSettingSection from "./settings/ArrayOfObjectsSettingSection.jsx";
import ArrayOfStringsSettingSection from "./settings/ArrayOfStringsSettingSection.jsx";

const STATS_SUBFIELDS = [
  { name: "value", label: "Value", type: "text" },
  { name: "label", label: "Label", type: "text" },
];
const FAST_FACTS_SUBFIELDS = [
  { name: "label", label: "Label", type: "text" },
  { name: "value", label: "Value", type: "text" },
];
const PRACTICE_SUBFIELDS = [
  { name: "title", label: "Title", type: "text" },
  { name: "description", label: "Description", type: "textarea" },
];

const TABS = [
  { key: "profile", label: "Profile" },
  { key: "availability", label: "Availability" },
  { key: "now", label: "Now" },
  { key: "about_paragraphs", label: "About" },
  { key: "practice", label: "Practice" },
  { key: "stats", label: "Stats" },
  { key: "fast_facts", label: "Fast Facts" },
  { key: "expertise", label: "Expertise" },
  { key: "skills", label: "Skills" },
  { key: "seo", label: "SEO" },
];

export default function SettingsPage() {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [tab, setTab] = useState(TABS[0].key);

  useEffect(() => {
    api
      .get("/api/admin/settings")
      .then(setSettings)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <PageHeader title="Settings" description="Sitewide content, saved section by section." />
      <Banner type="error">{error}</Banner>

      {loading || !settings ? (
        <p className="text-sm text-slate-500">Loading…</p>
      ) : (
        <div className="flex items-start gap-6">
          {/* sticky, not the page-level "fixed" trick used for the main
              Sidebar — this list lives inside <main>'s own scroll container
              (see Layout.jsx), so it only needs to stay put relative to
              that scroll, not the viewport. */}
          <div className="sticky top-8 w-48 shrink-0">
            <div className="space-y-0.5">
              {TABS.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={`block w-full rounded-md px-3 py-2 text-left text-sm font-medium ${
                    tab === t.key ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          <div className="min-w-0 flex-1 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
            {tab === "profile" && <ProfileSection value={settings.profile} />}
            {tab === "availability" && <AvailabilitySection value={settings.availability} />}
            {tab === "now" && <NowSection value={settings.now} />}
            {tab === "about_paragraphs" && <AboutParagraphsSection value={settings.about_paragraphs} />}
            {tab === "practice" && (
              <ArrayOfObjectsSettingSection
                sectionKey="practice"
                description="The 'how I work' practice list."
                subfields={PRACTICE_SUBFIELDS}
                itemLabel="Practice Item"
                value={settings.practice}
              />
            )}
            {tab === "stats" && (
              <ArrayOfObjectsSettingSection
                sectionKey="stats"
                description="Headline stats (e.g. years of experience)."
                subfields={STATS_SUBFIELDS}
                itemLabel="Stat"
                value={settings.stats}
              />
            )}
            {tab === "fast_facts" && (
              <ArrayOfObjectsSettingSection
                sectionKey="fast_facts"
                description="Quick facts list."
                subfields={FAST_FACTS_SUBFIELDS}
                itemLabel="Fact"
                value={settings.fast_facts}
              />
            )}
            {tab === "expertise" && (
              <ArrayOfStringsSettingSection sectionKey="expertise" description="Areas of expertise." value={settings.expertise} />
            )}
            {tab === "skills" && (
              <ArrayOfStringsSettingSection sectionKey="skills" description="Skills list." value={settings.skills} />
            )}
            {tab === "seo" && <SeoSection value={settings.seo} />}
          </div>
        </div>
      )}
    </div>
  );
}
