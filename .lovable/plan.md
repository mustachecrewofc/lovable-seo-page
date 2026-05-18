## Problema

O site publicado (`https://cozy-single-spark.lovable.app`) está retornando **HTTP 502 — Internal server error** em todas as requisições. O preview às vezes mostra apenas "Hello?" pelo mesmo motivo: um erro de SSR está sendo engolido pelo runtime, então nem o navegador nem os logs do servidor mostram a causa real, e o publish falha silenciosamente.

Esse é o padrão clássico de "catastrophic SSR error" do TanStack Start no Cloudflare Worker: erros no momento da inicialização do módulo (ou engolidos pelo h3) viram um 500/502 vazio, sem stack trace, sem chance do `errorComponent` da rota atuar.

## Solução

Aplicar a correção de 4 camadas para SSR do TanStack Start, mais um `errorComponent` na rota raiz. Isso garante que:

1. Qualquer erro de SSR seja capturado e logado de verdade (apareceria nos Server Logs).
2. O usuário veja uma página de fallback "algo deu errado" em vez de 502/Hello.
3. O publish pare de quebrar por causa de um erro de render silencioso.

### Arquivos a criar/editar

1. **`vite.config.ts`** — apontar o entry do servidor para `src/server.ts`:
   ```ts
   import { defineConfig } from "@lovable.dev/vite-tanstack-config";
   export default defineConfig({
     tanstackStart: { server: { entry: "server" } },
   });
   ```

2. **`src/server.ts`** (novo) — wrapper com import preguiçoso, try/catch e normalização da resposta 500 que o h3 engole. Importa `./lib/error-capture` no topo para armar os listeners globais.

3. **`src/lib/error-capture.ts`** (novo) — listeners de `error`/`unhandledrejection` no `globalThis` que guardam o último erro por 5s, para que o normalizador consiga recuperar o stack original.

4. **`src/lib/error-page.ts`** (novo) — função `renderErrorPage()` que devolve uma string HTML auto-contida (sem importar nada do app) com botões "Recarregar" e "Voltar ao início" no visual do site (fundo `#0A0A0F`, amarelo `#F5C842`).

5. **`src/routes/__root.tsx`** — adicionar `errorComponent` e `notFoundComponent` para pegar erros que aconteçam dentro da árvore React (em render/loader), com fallback no mesmo estilo visual.

### O que esperar depois

- O `Hello?` intermitente no preview deve sumir (ou virar a tela de erro com mensagem real, que você pode me mostrar para eu corrigir).
- O publish volta a funcionar — se algum erro de SSR persistir, ele agora aparecerá nos Server Logs com stack completo em vez de cair em 502 silencioso.
- Você precisa **clicar em "Publish" / "Update" de novo** depois que eu aplicar a correção para republicar a versão saudável.

### Fora do escopo

- Não vou mexer no `SquadMindsetReveal` nem em nenhuma seção visual nessa rodada (já está como você aprovou).
- Não vou tocar em Lovable Cloud / Supabase (o projeto não usa).
