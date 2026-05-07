const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>ZM Vendas</title>
        <style>
          body {
            background: #0f172a;
            color: white;
            font-family: Arial;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            flex-direction: column;
          }

          h1 {
            color: #3b82f6;
            font-size: 42px;
          }

          p {
            font-size: 20px;
          }
        </style>
      </head>

      <body>
        <h1>ZM Vendas</h1>
        <p>Sistema online funcionando com sucesso 🚀</p>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
