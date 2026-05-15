import { createFileRoute } from "@tanstack/react-router";
import SEOPage from "../pages/SEOPage";

export const Route = createFileRoute("/")({
  component: SEOPage,
  head: () => ({
    meta: [
      { title: "VA World Cup 2026 — Mustache Crew Records" },
      {
        name: "description",
        content:
          "The biggest international electronic music compilation of 2026. Submit your unreleased Techno, House, Tech House or Melodic track. Free worldwide release on Beatport, Spotify & more. Deadline March 31, 2026.",
      },
      { property: "og:title", content: "VA World Cup 2026 — Mustache Crew Records" },
      {
        property: "og:description",
        content:
          "Producers from every continent, one global compilation. Free submission, worldwide release, full promo. Deadline March 31, 2026.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "theme-color", content: "#0A0A0F" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MusicEvent",
          name: "VA World Cup 2026",
          description:
            "International electronic music compilation by Mustache Crew Records. Open call for producers worldwide.",
          startDate: "2026-04-30",
          eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
          eventStatus: "https://schema.org/EventScheduled",
          organizer: {
            "@type": "Organization",
            name: "Mustache Crew Records",
            url: "/",
          },
        }),
      },
    ],
  }),
});
