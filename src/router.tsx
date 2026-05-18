import { Link, createRouter, useRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

function DefaultErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div style={{ minHeight: "100vh", background: "#0A0A0F", color: "#F0EDE6", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, fontFamily: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif" }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(28px,4vw,44px)", margin: "0 0 12px", color: "#F5C842", fontWeight: 900 }}>Algo deu errado</h1>
        <p style={{ fontSize: 16, lineHeight: 1.55, opacity: 0.8, margin: "0 0 28px" }}>
          {error?.message || "Tivemos um problema ao carregar esta página."}
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            style={{ background: "#F5C842", color: "#0A0A0F", border: 0, padding: "12px 22px", borderRadius: 999, fontWeight: 700, cursor: "pointer" }}
          >
            Tentar novamente
          </button>
          <Link to="/" style={{ background: "transparent", color: "#F0EDE6", border: "1px solid rgba(240,237,230,.25)", padding: "12px 22px", borderRadius: 999, fontWeight: 700, textDecoration: "none" }}>
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const getRouter = () => createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultErrorComponent: DefaultErrorComponent,
});