
const express = require('express');
const app = express() // Cria uma instância para a aplicação utilizando o express
const userRoutes = require('./routes/users')
//Importa as rotas de usuários que serão definidas em outro módulo da aplicação.

// Middleware para processar JSON
app.use(express.json())

// Configuração para usar as rotas de usuários passando o prefixo como parâmetro.
app.use('/api/users', userRoutes)

//Adiciona um middleware para tratamento de erro no servidor, captura erros não tratados
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Algo deu errado!')
});


// Inicia o servidor na porta definida e exibe uma mensagem quando rodando.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});

//Observações quato a: use, err, req, res, next e stack

/*
const express = require('express');
const app = express();
app.use(express.json(), require('./routes/users'));

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));

// É possível combinar o app.use(express.json()) com o app.use da rota, de modo que ambos sejam chamados em uma única linha.
// É possível utilizar  o número da porta diretamente na chamada de listen, reduzindo uma variável extra (PORT).
*/
