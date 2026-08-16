import { useEffect, useState } from "react";
import { api } from "../../api.js";

// Shared save-one-section-independently behavior for every tab on the
// Settings page. `remoteValue` is this key's slice of the single
// GET /api/admin/settings response; `save()` PUTs just this key.
export function useSettingSection(sectionKey, remoteValue) {
  const [value, setValue] = useState(remoteValue);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setValue(remoteValue);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remoteValue]);

  async function save() {
    setSaving(true);
    setError(null);
    setSuccess(false);
    try {
      await api.put(`/api/admin/settings/${sectionKey}`, { value });
      setSuccess(true);
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return { value, setValue, save, saving, error, success };
}
