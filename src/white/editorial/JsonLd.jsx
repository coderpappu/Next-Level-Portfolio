/* Structured data (schema.org JSON-LD) as a server-rendered script tag.
   "<" is escaped so no string in the data can close the script early. */
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
