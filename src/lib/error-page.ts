export function renderErrorPage(): string {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Algo deu errado</title>
<style>
  html,body{margin:0;padding:0;background:#0A0A0F;color:#F0EDE6;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;min-height:100vh;}
  .wrap{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:24px;}
  .card{max-width:520px;width:100%;text-align:center;}
  h1{font-size:clamp(28px,4vw,44px);margin:0 0 12px;color:#F5C842;font-weight:900;letter-spacing:-0.01em;}
  p{font-size:16px;line-height:1.55;opacity:.8;margin:0 0 28px;}
  .row{display:flex;gap:12px;justify-content:center;flex-wrap:wrap;}
  button,a.btn{appearance:none;border:0;cursor:pointer;font:inherit;font-weight:700;padding:12px 22px;border-radius:999px;text-decoration:none;display:inline-block;}
  .primary{background:#F5C842;color:#0A0A0F;}
  .ghost{background:transparent;color:#F0EDE6;border:1px solid rgba(240,237,230,.25);}
</style>
</head>
<body>
<div class="wrap"><div class="card">
  <h1>Algo deu errado</h1>
  <p>Tivemos um problema ao carregar esta página. Tente novamente em alguns instantes.</p>
  <div class="row">
    <button class="primary" onclick="location.reload()">Recarregar</button>
    <a class="btn ghost" href="/">Voltar ao início</a>
  </div>
</div></div>
</body></html>`;
}