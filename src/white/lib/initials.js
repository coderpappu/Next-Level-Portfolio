// First two words of a name, initials only — the fallback avatar for a
// testimonial that has no photo on file yet.
export const initialsOf = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
