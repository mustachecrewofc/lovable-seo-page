## Plano — Atualização Copy + Pricing + Novas Seções

Mantemos 100% da paleta atual (dark + gold + ice-white). Ignoramos a seção "Design Tokens" do PRD.

### 1. Refinar copy nas seções existentes
Sem mudar layout/animações:

- **Navbar** — Links: `The Strategy`, `360° Promo`, `Proof`, `FAQ` + CTA `Submit Your Track`.
- **HeroSection** — Badge `⚽ VA World Cup 2026 • 15 Spots • Beatport Chart Mission`. H1 mantém. Subtítulo do PRD ("A coordinated, global chart push…"). Checklist inline (`✓ 15 curated spots • ✓ 360° promo coordination • ✓ World Cup 2026 release window`). Linha sob o CTA: `📅 Submissions open now • Lineup locks August 15, 2026`.
- **HeroBg** — Camada dark: `The world is watching.` Camada ice-white: `Let your sound play.`
- **BuiltToBeFoundSection** — Heading `Why this VA hits different.` Subtítulo + 4 cards reescritos (Velocity = Visibility / Stacking Plays Into Rankings / The World Cup Timing Window / Curated Lineup, No Random Slots). Tags atualizadas.
- **ChatSemrushSection** (Squad Mindset) — Mantém o chat animado. Reescrevo as mensagens usando o tom do PRD ("The Mission" + "The Communication" virando 6 mensagens curtas).
- **WhatsPossibleSection / LetLovableFixSection** (360° Campaign) — Atualizo copy: card destaque "Smart Distribution Strategy" + 3 cards de asset (Full Media Kit / Set with All Tracks / SoundCloud Reach) + grid 2×3 de plataformas (Spotify, Beatport, YouTube, SoundCloud, Instagram, Press). Mantenho a estrutura de cards atual, só re-mapeio o conteúdo.
- **FAQSection** — Substituo pelos 8 Q&A do PRD.
- **CTASection** — Heading `Ready to represent your sound on the world stage?`, subtítulo + nota + social proof do PRD.
- **Footer** — Tagline + 4 colunas conforme PRD.

### 2. Novas seções (no padrão visual atual)

**A) Proof From Our Missions** — após `BuiltToBeFoundSection`, antes do `ChatSemrushSection`.
- Heading `Proof From Our Missions` (gold accent na 2ª linha).
- Subtítulo `Mustache Gang Xmas 2025 — the blueprint that started it all.`
- Botão outline `📷 Watch the highlights on Instagram ↗` (placeholder href `#`).
- Galeria com 3 cards (1 grande centro + 2 menores): #38 Overall Top 100 / #2 Dubstep / #4 [Genre]. **Uso placeholders visuais** (cards estilizados estilo Beatport, sem prints reais) — pedir ao usuário os prints depois.
- Linha final: `Brazilian Carnival VA — Charted #1 Electronica/Downtempo Releases`.

**B) How It Works** — antes do FAQ.
- Heading `How It Works`.
- 4 steps numerados em grid (cards minimalistas dark com número gold grande).
- Conteúdo dos steps direto do PRD.

**C) Pricing / Investment** — antes do CTA final, depois do FAQ.
- Card grande centralizado, fundo `#13131F`, borda gold sutil.
- Eyebrow `INVESTMENT`.
- Preço grande: **€299** + `per accepted track`.
- Lista de bullets do que está incluído (resumo do 360°): distribuição 50+ plataformas, media kit completo, vídeos individuais, DJ set no YouTube/SoundCloud, repost em rede de ~2M, suporte em playlist, chart mission Beatport, coordenação diária pela Mustache Crew.
- Linha de garantia: `Submission is always free. €299 only if your track is selected and you choose to join.`
- Botão `Submit Your Track →` (gold).

### 3. SEO (`src/routes/index.tsx`)
- Title: `VA World Cup 2026 — Mustache Crew Records | Submit Your Electronic Music Track`
- Meta description do PRD.
- Atualizar OG tags consistentes.

### Fora de escopo
- Form real de submissão (CTA aponta para `#submit`).
- Prints reais do Beatport/Songstats (placeholders visuais até você enviar).
- Mudança de paleta.
- Substituir o chat animado por cards estáticos.

### Arquivos a editar/criar
- Editar: `Navbar.tsx`, `HeroSection.tsx`, `HeroBg.tsx`, `BuiltToBeFoundSection.tsx`, `ChatSemrushSection.tsx`, `WhatsPossibleSection.tsx`, `LetLovableFixSection.tsx`, `SEOReviewSection.tsx` (vira a Proof Gallery), `FAQSection.tsx`, `CTASection.tsx`, `Footer.tsx`, `routes/index.tsx`, `pages/SEOPage.tsx` (ordem das seções).
- Criar: `HowItWorksSection.tsx`, `PricingSection.tsx`, `ProofGallerySection.tsx` (se a `SEOReviewSection` não couber bem como reskin).
