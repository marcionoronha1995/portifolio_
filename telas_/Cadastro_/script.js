document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Pegar os valores dos campos
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    
    // Aqui você pode fazer o que quiser com os valores, como enviar para um servidor ou armazenar localmente.
    console.log("Nome: " + nome);
    console.log("Telefone: " + telefone);
    console.log("E-mail: " + email);
});

//*ler o arquivo do computador no computador
//*manipular o arquivo txt no computador

const fs = require('fs');

const data = "Nome: João, Telefone: 123456789, Email: joao@example.com";

fs.writeFile('dados.txt', data, (err) => {
  if (err) throw err;
  console.log('Os dados foram gravados no arquivo!');
});

fs.readFile('dados.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });

  //*ler e gravar os dados em um banco MYSQL

  const mysql = require('mysql');

// Configurações de conexão com o banco de dados
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_banco_de_dados'
});

// Conectar ao banco de dados
connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conexão bem-sucedida ao banco de dados!');
});

// Exemplo de leitura de dados
connection.query('SELECT * FROM tabela', (err, rows) => {
  if (err) throw err;
  console.log('Dados recuperados do banco de dados:');
  console.log(rows);
});

// Exemplo de gravação de dados
const novoDado = { nome: 'João', telefone: '123456789', email: 'joao@example.com' };
connection.query('INSERT INTO tabela SET ?', novoDado, (err, result) => {
  if (err) throw err;
  console.log('Novo dado inserido no banco de dados:', result);
});

// Encerrar conexão ao terminar
connection.end();

