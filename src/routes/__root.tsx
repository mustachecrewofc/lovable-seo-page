import { createRootRoute, Link, Outlet, useRouter } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ErrorComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return <Outlet />;
}

function Shell({ children }: { children: ReactNode }) {
  return (
    <div style={{ minHeight: "100vh", background: "#060A06", color: "#F0EDE6", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif" }}>
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
          style={{ background: "#F5C842", color: "#060A06", border: 0, padding: "12px 22px", borderRadius: 999, fontWeight: 700, cursor: "pointer" }}
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
      <Link to="/" style={{ background: "#F5C842", color: "#060A06", padding: "12px 22px", borderRadius: 999, fontWeight: 700, textDecoration: "none" }}>
        Voltar ao início
      </Link>
    </Shell>
  );
}
