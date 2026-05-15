import { createFileRoute } from "@tanstack/react-router";
import SEOPage from "../pages/SEOPage";

export const Route = createFileRoute("/")({
  component: SEOPage,
  head: () => ({
    meta: [
      { title: "VA World Cup 2026 — Mustache Crew Records | Submit Your Electronic Music Track" },
      {
        name: "description",
        content:
          "Join the VA World Cup 2026 by Mustache Crew Records. A coordinated electronic music chart campaign launching during the 2026 World Cup. 30 curated spots (max). Submit your demo now.",
      },
      { property: "og:title", content: "VA World Cup 2026 — Mustache Crew Records" },
      {
        property: "og:description",
        content:
          "A coordinated Beatport chart campaign during the 2026 World Cup. 30 curated spots (max), full 360° promo, daily crew direction. Submissions close August 15, 2026.",
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
