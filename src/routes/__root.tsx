import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import type { ReactNode } from "react";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "UTF-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { title: "SEO e busca por IA para apps criados com IA | Lovable" },
      {
        name: "description",
        content:
          "Apps da Lovable já saem prontos para busca, encontráveis no Google e em ferramentas de IA como ChatGPT, Claude e Perplexity. Sem precisar saber SEO.",
      },
    ],
  }),
  component: RootComponent,
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

export type RootChildren = { children: ReactNode };