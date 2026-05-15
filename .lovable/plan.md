## VA World Cup 2026 — Copy & Paleta

Aplicar nova identidade visual e copy do PRD em toda a landing, mantendo 100% da estrutura, wireframe, componentes e animações.

### 1. Paleta (src/styles.css)
Substituir tokens base:
- `--bg-primary`: `#0A0A0F` (era cream)
- `--dark`: `#0A0A0F`
- `--cream`: `#F0EDE6`
- Novos: `--gold #F5C842`, `--gold-foreground #060612`, `--card #13131F`, `--border #2A2A3E`, `--muted-foreground #8A8A9A`, `--accent-red #E63B2E`, `--accent-blue #2563EB`
- `html/body` background → `#0A0A0F`, texto → `#F0EDE6`

### 2. Copy por seção (1:1 com PRD)
- **Navbar** — logo "Mustache Crew Records", 5 links, CTA "Submit Your Track"
- **HeroSection** — badge "⚽ Submissions Open", H1 "VA / WORLD CUP / 2026", subtítulo + deadline, CTA dourado
- **HeroBg** — texto/cores adaptadas ao dark + gold
- **IntroVideoSection** — 4 marquees do PRD, gradiente gold/dark
- **BuiltToBeFoundSection** — "Built for the world stage" + 4 sticky cards
- **ChatSemrushSection** — 6 mensagens de chat do PRD
- **SEOReviewSection** — 8 conquistas Beatport/SoundCloud
- **LetLovableFixSection** — Promo Package + Community
- **WhatsPossibleSection** — 6 cards (artwork, distribuição, etc.)
- **FAQSection** — 8 Q&A
- **CTASection** — "Ready to represent your sound" + 29+ artistas
- **Footer** — 4 colunas

### 3. SEO (src/routes/index.tsx)
Atualizar `head()`: title, description, og:*, JSON-LD Organization (Mustache Crew Records / VA World Cup 2026).

### 4. Substituição de cores hardcoded
Os componentes usam cores inline (`#1B1B1B`, `#F8F4EC`, `#FCFBF8`, `#D1D5DB` etc.). Vou substituir por search-replace nas cores correspondentes da nova paleta — não introduzir novos tokens semânticos no Tailwind v4 nesta passada (manter velocidade e zero risco de regressão visual).

### Mapeamento de cores
- `#FCFBF8` / `#F8F4EC` (cream bg) → `#0A0A0F` (dark) ou `#13131F` (card) conforme contexto
- `#1B1B1B` (dark bg) → `#0A0A0F` ou `#13131F`
- texto cream `#F8F4EC` → `#F0EDE6`
- texto escuro sobre cream → texto cream sobre dark
- CTA cream `#F9F4EB` → gold `#F5C842` com texto `#060612`
- Bordas/grid sutis → `#2A2A3E`

### Fora de escopo
- Estrutura de rotas, novos componentes, hooks, animações
- Form de submission real (CTA aponta para `#submit` placeholder)
- Imagens reais de Beatport/artwork (mantém placeholders atuais)

### Entregável
Página completa com copy do VA World Cup 2026 em paleta dark + gold, mesmo layout, mesmas animações.