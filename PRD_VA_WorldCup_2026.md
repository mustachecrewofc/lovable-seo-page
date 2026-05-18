# PRD — VA World Cup 2026
### Landing Page de Vendas · Mustache Crew Records
**Versão:** 2.0 · **Data:** Maio 2026
**Referência de copy:** carnivalva.base44.app (estrutura e tom adaptados)

---

## INSTRUÇÃO PRINCIPAL PARA O LOVABLE

> **Não altere a estrutura, arquitetura, wireframe ou layout do projeto.**
> A estrutura de seções, componentes, animações e responsividade já estão prontas.
> Seu trabalho é **substituir toda a copy, cores, tokens visuais e assets** pelo conteúdo deste PRD.
> Mantenha todos os componentes interativos (marquee, sticky cards, chat animado, accordion FAQ, etc.) funcionando exatamente como estão.
>
> **Exceção:** caso algum conteúdo deste PRD exija uma seção que ainda não existe no projeto, você pode criá-la. Novas seções devem seguir o mesmo padrão visual, tokens de cor e estilo de componentes já existentes no projeto.

---

## Design Tokens — Substituir no Projeto

> Substitua os tokens de cor do projeto atual pelos valores abaixo.

| Token | Valor Atual | Novo Valor |
|---|---|---|
| Background principal | `#FCFBF8` | `#F5F0E8` (cream quente) |
| Background hero | `#1B1B1B` | `#111111` |
| Texto principal | `#1B1B1B` | `#111111` |
| Texto mutado | `#73726F` | `#6B6B6B` |
| Accent principal | `#4E93FF` | `#F5C842` (gold) |
| Accent secundário | `#c084fc` | `#22C55E` (green — como o Carnival) |
| Accent terciário | `#fb923c` | `#E63B2E` (vermelho) |
| Card background | `#F0EDE6` | `#FFFFFF` |
| Botão CTA principal | — | bg `#F5C842`, text `#111111`, rounded-full |
| Botão CTA secundário | — | outline, border `#111111` |

---

## Estrutura de Funil da Página

A estrutura segue exatamente o funil comprovado da página Carnival VA:

```
1. Hero (gancho + proposta + CTA)
2. Qualificação (para quem é / para quem não é)
3. Por que isso importa (lógica do momentum)
4. Prova social (resultados reais, prints do Beatport)
5. O que está incluído (360° promo breakdown)
6. Squad Mindset (comunidade + missão coletiva)
7. Como funciona (processo de submissão)
8. FAQ (quebra de objeções)
9. CTA final
```

---

## Seções — Copy Completa

---

### SEÇÃO 1 — Navbar

**Logo:** Mustache Crew Records

**Links:**
- The Strategy
- 360° Promo
- Proof
- FAQ

**Botões:**
- `Submit Your Track` (primary — bg `#F5C842`, texto `#111111`, rounded-full)

---

### SEÇÃO 2 — Hero Section

**Badge/pill acima do título:**
```
⚽  VA World Cup 2026  •  15 Spots  •  Beatport Chart Mission
```

**Headline principal (H1):**
```
VA World Cup 2026
Beatport Chart Mission
```
*(Segunda linha em cor accent — gold `#F5C842` — igual ao "Beatport Top 1 Mission" do Carnival em verde)*

**Subtítulo/corpo:**
```
A coordinated, global chart push built around one thing: execution.
Mustache Crew leads the full direction — curation, rollout, promo
architecture, and daily guidance — so the squad can perform like
one unit and push for Beatport's highest chart positions.

Top 10 is the baseline. The top is what we're building toward.
```

**Checklist inline:**
```
✓ 15 curated spots  •  ✓ 360° promo coordination  •  ✓ World Cup 2026 release window
```

**CTA principal:**
```
[ Submit Your Track ]
```

**Linha abaixo do CTA:**
```
📅  Submissions open now  •  Lineup locks August 15, 2026
```

**Links de navegação rápida (abaixo do CTA):**
```
[ See The Strategy ]   [ 360° Promo ]   [ Submit Your Track ]
```

**Visual direito (imagem/card do VA):**
- Card com a arte do VA World Cup 2026
- Badge flutuante: `World Cup`

---

### SEÇÃO 3 — HeroBg (Transição de Scroll)

> Mantém a mecânica de scroll reveal com duas camadas.

**Texto na camada escura (dark layer):**
```
The world
is watching.
```

**Texto na camada de fundo (revelado com scroll):**
```
Let your
sound play.
```

---

### SEÇÃO 4 — Qualificação: Para Quem É / Para Quem Não É

> Criar como seção nova se não existir, ou adaptar o IntroVideoSection.
> Layout: badge centralizado no topo, depois dois cards lado a lado.

**Badge centralizado:**
```
15 CURATED SPOTS
```
*(pill/badge em destaque — bg `#F5C842`, texto bold `#111111`)*

**Card esquerdo — "This is for you if:"**
*(ícone de check verde `#22C55E` em cada item)*

```
✓  You produce electronic music (House, Techno, Tech House, Afro House, Breaks, etc.)

✓  You have at least one professional release on streaming platforms

✓  You're serious about career growth and reaching competitive chart positions

✓  You're willing to participate in coordinated promo
   (posts, email list, pre-save push)

✓  You understand the power of community-driven momentum over solo efforts
```

**Card direito — "This is not for you if:"**
*(ícone X em cada item)*

```
✗  You expect passive involvement ("just upload my track and I'm done")

✗  You're not willing to actively promote during the critical launch window

✗  You don't see the value of investing €299 in a curated, coordinated campaign

✗  You want a guaranteed chart position
   (we engineer for maximum chance, not guarantees)
```

**Parágrafo de fechamento da seção (centralizado):**
```
If you're ready to work as part of a coordinated squad and you're serious
about reaching Beatport's highest positions during the world's biggest
sporting event — this is your mission. Let's push together.
```

---

### SEÇÃO 5 — BuiltToBeFoundSection (Sticky Cards)
*(renomear internamente para "Why That Matters")*

**Heading esquerdo (sticky):**
```
Why this
VA hits
different.
```

**Subtítulo:**
```
Chart positions aren't luck.
They're the result of coordinated
momentum. Here's the logic.
```

**4 Cards:**

```
Card 1:
Título: "Velocity = Visibility"
Descrição: "Higher chart velocity means higher visibility across all Beatport surfaces — New Releases, Genre Charts, Editorial picks. The more tracks in a VA push simultaneously, the harder the algorithm notices. Collective velocity beats solo effort every time."

Card 2:
Título: "Stacking Plays Into Rankings"
Descrição: "Visibility stacks into more plays, more profile visits, and more DJ attention. Each repost, playlist add, and email blast adds to the pile. Momentum creates a loop: attention → action → ranking → more attention. That loop is what we're engineering."

Card 3:
Título: "The World Cup Timing Window"
Descrição: "The 2026 FIFA World Cup is the biggest cultural event on the planet. Releasing during this window means your music is positioned inside a global conversation. Electronic music tied to a world moment gets discovered by people who weren't already looking for it."

Card 4:
Título: "Curated Lineup, No Random Slots"
Descrição: "Every track is selected. Not every demo gets in. The curation process is what makes the campaign credible — a tight, quality lineup that DJs actually want to play and Beatport's algorithm treats as serious. You're not just buying a slot. You're being selected."
```

**Tags/pills abaixo dos cards:**
```
Built for a Beatport chart run  |  Curated lineup (no random slots)  |  Execution > luck  |  Community-driven momentum  |  360° promo plan  |  Mustache Crew direction daily
```

**Linha de transição:**
```
See what we already achieved with our past missions ↓
```

---

### SEÇÃO 6 — Prova Social — "Proof From Our Missions"

> Criar seção nova ou usar SEOReviewSection adaptada.
> Layout: heading centralizado, botão de Instagram, gallery de cards com prints do Beatport/Songstats.

**Ícone:** 🏆 (troféu)

**Heading:**
```
Proof From
Our Missions
```
*(segunda parte em color accent verde ou gold)*

**Subtítulo:**
```
Mustache Gang Xmas 2025 — the blueprint that started it all.
```

**Botão:**
```
[ 📷  Watch the highlights on Instagram  ↗ ]
```
*(outline pill, abre Instagram da Mustache Crew em nova aba)*

**Subheading da galeria:**
```
Proof Gallery
```

**Legenda:**
```
Real chart positions from our first coordinated mission
```

**Cards da galeria (3 cards com prints do Beatport/Songstats):**

```
Card grande centralizado:
"Mustache Gang Xmas Edition"
Beatport logo
"Charted #38
Overall Top 100 Releases"

Card menor esquerdo:
"Mustache Gang Xmas Edition"
"Charted #2
Dubstep Releases"

Card menor direito:
"Mustache Gang Xmas Edition"
"Charted #4
[Genre] Releases"
```

**Linha abaixo da galeria:**
```
Brazilian Carnival VA — Charted #1 Electronica/Downtempo Releases
```

---

### SEÇÃO 7 — 360° Promotional Campaign

> Adaptar LetLovableFixSection ou WhatsPossibleSection.
> Layout: heading grande, depois cards de breakdown.

**Heading da seção:**
```
360° Promotional
Campaign
```

**Subtítulo:**
```
A coordinated multi-platform campaign designed to push the entire
squad toward Beatport's highest chart positions.
```

**Card de destaque — "Smart Distribution Strategy":**

```
Título: Smart Distribution Strategy

Corpo: The VA World Cup 2026 will be distributed to 50+ platforms as a classic VA
(Beatport + download stores + all platforms where VA is beneficial).

On Spotify, each track will also be released as a single — not only inside the VA.

[Destaque interno / callout box]
Why?
On Spotify, VA tracks often don't show properly on each artist's profile.
That's why each track in this project will also be released as a single
under your artist profile — so you don't lose visibility on your own page.
```

**3 Cards de asset (grid 3 colunas):**

```
Card 1 — "Full Media Kit for Each Track"
• Official cover art
• SoundCloud cover
• Facebook cover
• Individual YouTube video for the track
• Individual Instagram Story launch video (16:9 motion design)
• Individual pre-save video (16:9 motion design)

Card 2 — "Set with All Tracks"
• Full DJ set including all VA tracks posted on YouTube
• Full DJ set including all VA tracks posted on SoundCloud

Card 3 — "SoundCloud Reach"
• Repost in a network reaching around 2M followers
```

**Subheading:**
```
Platform Reach
```

**6 cards de plataforma (grid 2×3):**
```
• Spotify Playlist Support       [Spotify icon]
• Beatport Chart Mission         [Beatport icon]
• YouTube DJ Set Exposure        [YouTube icon]
• SoundCloud Repost Reach        [SoundCloud icon]
• Instagram Content Campaign     [Instagram icon]
• Blog & Press Coverage          [Press icon]
```

**Parágrafo de fechamento:**
```
This is a big, serious 360° campaign — not just "distribution + one post".
Every element is coordinated to maximize impact for the album and every track.
```

**Linha de destaque:**
```
Aim: Beatport Top Charts
```
*(em cor accent)*

---

### SEÇÃO 8 — Squad Mindset

> Adaptar ChatSemrushSection ou criar nova seção.
> Layout: heading grande centralizado, depois dois cards lado a lado.

**Heading:**
```
Squad Mindset = Chart Potential
```
*(em cor accent — gold ou verde)*

**Subtítulo:**
```
15 artists working as one coordinated squad, aiming for Beatport chart positions.
This is how independent music competes at the highest level.
```

**Dois cards lado a lado:**

```
Card esquerdo — "The Mission"
We're all pushing toward one shared goal: reach Beatport's chart rankings
during the World Cup window. Every post, every repost, every pre-save —
coordinated. You're not releasing alone. You're part of a unit that
moves together on the same schedule toward the same target.

Card direito — "The Communication"
Once the lineup locks, you'll join our private Telegram group with all
confirmed artists. Daily updates, shared content calendar, coordinated
posting schedule — Mustache Crew manages the direction so the squad
stays aligned from release prep through the full promo window.
```

---

### SEÇÃO 9 — Como Funciona (Process Section)

> Criar seção nova simples com 4 steps numerados.

**Heading:**
```
How It Works
```

**4 steps:**

```
Step 1 — Submit Your Demo
Send us your best, most finished track via the submission form.
Private SoundCloud link, WeTransfer, or Dropbox. Include your
artist name, email, and Spotify profile. Submission is free.

Step 2 — We Review Within 7 Days
We listen to every submission. You'll receive feedback either way —
accepted or not. Selection is based on track quality, energy,
fit with the World Cup theme, and genre balance across the compilation.

Step 3 — Confirm & Join the Squad
Accepted artists receive the artist agreement, artwork brief, and
campaign timeline. You confirm your spot (€299 investment) and
join the private Telegram group with the full lineup.

Step 4 — Push Together
From pre-save launch to release day, every artist moves together.
Coordinated posts, shared assets, daily guidance from Mustache Crew —
one unit, one push, one campaign built around the world's biggest moment.
```

---

### SEÇÃO 10 — FAQSection

**Heading:**
```
Questions? We've Got Answers.
```

**8 Perguntas + Respostas:**

```
P1: "Do you guarantee a Beatport chart position?"
R1: "We don't guarantee positions — no label can honestly do that. What we guarantee is the full execution of our proven promotional strategy. Our past VAs hit #38 Overall Top 100, #2 Dubstep, and #1 Electronica/Downtempo on Beatport. We engineer for maximum chart potential, not guaranteed outcomes."

P2: "How many artists will be selected?"
R2: "Maximum 15 tracks. The lineup is curated — not everyone who submits gets in. Selection is based on track quality, energy, genre fit, and overall compilation balance. Smaller lineup = more focused push = better chart potential per track."

P3: "When do submissions close?"
R3: "Submissions close on August 15, 2026. The lineup will be locked and confirmed by August 22. Early submissions have a higher chance of selection as spots fill on a rolling basis — don't wait until the deadline."

P4: "When is the release?"
R4: "The VA World Cup 2026 is scheduled for the World Cup 2026 window. The exact release date will be confirmed to accepted artists at lineup lock. Pre-save campaign begins 4 weeks before release."

P5: "What genres are accepted?"
R5: "We're open to all electronic music genres that carry World Cup energy: Tech House, House, Afro House, Techno, Breaks, Melodic Techno, Bass House, and similar styles. The main criteria is energy, originality, and a strong hook. If it makes a crowd move, submit it."

P6: "What is the investment?"
R6: "The investment is €299 per track upon acceptance. This covers production of all campaign assets, distribution costs, the full 360° promotional budget (playlists, email, SoundCloud, social, press), and full campaign coordination. Submission is always free — the investment only applies if your track is selected and you choose to join."

P7: "Do I need to promote my own track?"
R7: "Yes — and that's exactly what makes this model powerful. We coordinate a collective promotion calendar. Every artist posts on the same days with the same campaign assets. The combined reach of 15 artists promoting simultaneously is what drives the chart push. We provide all assets and the full schedule."

P8: "What happens after I submit?"
R8: "We review within 7 business days. You'll receive feedback regardless of outcome. If accepted: artist agreement, artwork brief, campaign timeline, and access to the squad Telegram group. If not selected: we'll tell you why and may keep you in consideration for future VA campaigns."
```

---

### SEÇÃO 11 — CTA Final (Dark Section)

**Heading:**
```
Ready to represent
your sound on the
world stage?
```

**Subtítulo:**
```
The World Cup happens once every four years.
This campaign happens once — period.
15 spots. Submissions close August 15, 2026.
```

**CTA:**
```
[ Submit Your Track Now → ]
```

**Nota abaixo:**
```
Submission is free  ·  Review within 7 days  ·  All genres welcome
```

**Social proof:**
```
Join the label that charted #1 and #2 on Beatport with 29+ artists
```

---

### SEÇÃO 12 — Footer

**Logo:** Mustache Crew Records

**Tagline:**
```
Strategic VA Campaigns for Electronic Music Artists
```

**Colunas:**
```
Company: About · Past VAs · Contact
Current VA: VA World Cup 2026 · Submit · FAQ
Past Campaigns: Brazilian Carnival VA · Xmas 2025 · Euro Tour VA 2026
Follow: SoundCloud · Instagram · Spotify · YouTube
```

**Rodapé:**
```
© 2026 Mustache Crew Records · All rights reserved
```

---

## Checklist de Implementação

### Copy
- [ ] Hero — badge, headline, body, checklist, CTA, data
- [ ] HeroBg — textos das duas camadas
- [ ] Qualificação — "For you if" / "Not for you if" (nova seção ou adaptação)
- [ ] Why That Matters — heading + 4 sticky cards + tags
- [ ] Prova Social — heading + galeria de Songstats (nova seção)
- [ ] 360° Campaign — heading + distribution card + 3 asset cards + platform grid
- [ ] Squad Mindset — heading + 2 cards
- [ ] How It Works — 4 steps (nova seção)
- [ ] FAQ — 8 pares
- [ ] CTA final — heading, subtítulo, botão
- [ ] Footer

### Design
- [ ] Substituir tokens de cor (cream bg, gold accent, green secondary)
- [ ] Botão CTA: bg `#F5C842`, texto `#111111`
- [ ] Pill/badge "15 CURATED SPOTS": bg `#F5C842`, texto bold preto
- [ ] Glow de seção adaptado para paleta World Cup

### Funcional
- [ ] CTA "Submit Your Track" linkado ao formulário de submissão
- [ ] Botão Instagram abre link real da Mustache Crew
- [ ] Meta tags SEO no `index.html`

---

## SEO

**Title:**
```
VA World Cup 2026 — Mustache Crew Records | Submit Your Electronic Music Track
```

**Meta description:**
```
Join the VA World Cup 2026 by Mustache Crew Records. A coordinated electronic music chart campaign launching during the 2026 World Cup. 15 curated spots. Submit your demo now.
```

---

*PRD v2.0 — copy baseada na estrutura e tom exatos da página carnivalva.base44.app, adaptada para o tema VA World Cup 2026. Pronto para uso direto no Lovable.*
