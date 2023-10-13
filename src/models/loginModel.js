const connection = require('../mysql/connection')

const teste = connection.connect((err) => {
    if (err) {
      console.error('Erro na conexão com o banco de dados:', err);
      return;
    }
    console.log('Conectado ao banco de dados MySQL!');
  });

  module.exports = teste;