import { Helmet } from "react-helmet-async";
import { clinic } from "../data/site";

export default function SEO({
  title,
  description,
  path = "/",
  schema = null,
}) {
  const fullTitle = title
    ? `${title} | ${clinic.name}`
    : `${clinic.name} | Viman Nagar, Pune`;
  const url = `https://www.coreflexphysio.in${path}`;

  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: clinic.name,
    image: "https://www.coreflexphysio.in/assets/dr-vaishnavi.webp",
    telephone: clinic.phoneDisplay,
    email: clinic.email,
    url: "https://www.coreflexphysio.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. G17, Ashoka Plaza, Sakore Nagar, Beside Hyatt Residency",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411014",
      addressCountry: "IN",
    },
    medicalSpecialty: "Physiotherapy",
    priceRange: "\u20B9\u20B9",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <script type="application/ld+json">
        {JSON.stringify(schema || defaultSchema)}
      </script>
    </Helmet>
  );
}
