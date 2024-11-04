//Importa o módulo mysql2 para permitir a interação com o banco de dados mysql
const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api_db'
})

connection.connect((error) => {
//Se ocorrer um erro ao se conectar, lança uma exceção.
  if (error) throw error
//Testa se a conexão foi bem sucedida exibindo a mensagem no console.
  console.log("Conectado ao banco de dados MySQL.");
});
//Exporta a conexão para que possa ser exibida em outros módulos da aplicação
module.exports = connection

//Observações quanto: mysql, connection e error.

/*
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'api_db'
// Função connect sendo chamada diretamente após a criação da conexão.
}).connect(error => {
  if (error) throw error;
  console.log("Conectado ao banco de dados MySQL.");
});

module.exports = connection;
*/