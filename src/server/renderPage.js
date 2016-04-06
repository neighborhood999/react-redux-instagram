export default function renderPage(html, initialState) {
  return `
    <!doctype html>
    <html>
      <meta charset="UTF-8">
      <head>
        <title>React x Redux - Instagram</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
        </script>
        <script src="/static/bundle.js"></script>
      </body>
    </html>
    `;
}
