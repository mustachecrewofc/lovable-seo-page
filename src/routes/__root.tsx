import { createRootRoute, HeadContent, Link, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "Mustache Gang World Cup 2026" },
      {
        name: "description",
        content:
          "Apps da Lovable já saem prontos para busca, encontráveis no Google e em ferramentas de IA como ChatGPT, Claude e Perplexity. Sem precisar saber SEO.",
      },
      { property: "og:title", content: "Mustache Gang World Cup 2026" },
      { name: "twitter:title", content: "Mustache Gang World Cup 2026" },
      { name: "description", content: "Build and iterate on single-page websites by connecting GitHub repositories and applying content updates." },
      { property: "og:description", content: "Build and iterate on single-page websites by connecting GitHub repositories and applying content updates." },
      { name: "twitter:description", content: "Build and iterate on single-page websites by connecting GitHub repositories and applying content updates." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64a4d6cf-97a9-436a-8da4-a9a47c1cac42/id-preview-04531350--248185b9-ef74-49a0-b694-2fdb3bfbf0f3.lovable.app-1778861282383.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/64a4d6cf-97a9-436a-8da4-a9a47c1cac42/id-preview-04531350--248185b9-ef74-49a0-b694-2fdb3bfbf0f3.lovable.app-1778861282383.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
  }),
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F0EDE6", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif" }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        {children}
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <Shell>
      <h1 style={{ fontSize: "clamp(28px,4vw,44px)", margin: "0 0 12px", color: "#F5C842", fontWeight: 900 }}>Algo deu errado</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.8, margin: "0 0 28px" }}>
        {error?.message || "Tivemos um problema ao carregar esta página."}
      </p>
      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          style={{ background: "#F5C842", color: "#0A0A0F", border: 0, padding: "12px 22px", borderRadius: 999, fontWeight: 700, cursor: "pointer" }}
        >
          Tentar novamente
        </button>
        <Link to="/" style={{ background: "transparent", color: "#F0EDE6", border: "1px solid rgba(240,237,230,.25)", padding: "12px 22px", borderRadius: 999, fontWeight: 700, textDecoration: "none" }}>
          Voltar ao início
        </Link>
      </div>
    </Shell>
  );
}

function NotFoundComponent() {
  return (
    <Shell>
      <h1 style={{ fontSize: "clamp(28px,4vw,44px)", margin: "0 0 12px", color: "#F5C842", fontWeight: 900 }}>404</h1>
      <p style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.8, margin: "0 0 28px" }}>Página não encontrada.</p>
      <Link to="/" style={{ background: "#F5C842", color: "#0A0A0F", padding: "12px 22px", borderRadius: 999, fontWeight: 700, textDecoration: "none" }}>
        Voltar ao início
      </Link>
    </Shell>
  );
}

export type RootChildren = { children: ReactNode };