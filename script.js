function atualizarPreview(id) {
  const html = document.getElementById(`html${id}`).value;
  const css = document.getElementById(`css${id}`).value;
  const js = document.getElementById(`js${id}`).value;

  const codigoCompleto = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <style>${css}</style>
    </head>
    <body>
      ${html}
      <script>${js}<\/script>
    </body>
    </html>
  `;

  const iframe = document.getElementById(`output${id}`);
  iframe.srcdoc = codigoCompleto;
}

// Opcional: Para carregar o preview inicial de todas as questões ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  for (let i = 1; i <= 20; i++) {
    atualizarPreview(i);
  }
});
