// @ts-nocheck

const frisby = require('frisby');

describe('Verifica conexão', () => {
  
  it('Deve retornar STATUS de sucesso ao "chamar" a API', function () {

    let statusSucesso = 200;

    return frisby.get('https://api.github.com').expect('status', statusSucesso)
  });

});

describe('Verifica retorno de dados de usuários', () => {

  it('Deve retornar o LOGIN correto para user: ViniCL', function () {
    return frisby.get('https://api.github.com/users/ViniCL')
      .then(function (res) {
        expect(res.json.login).toBe("ViniCL");
      });
  });


  it('NÃO deve retornar "indefinido" aos procurar os repositórios do user: ViniCL', function () {
    return frisby.get('https://api.github.com/users/ViniCL/repos')
      .then(function (res) {

        expect(res.json).not.toBeUndefined();
      });
  });

})

describe('Verifica retorno de dados de repositórios', () => {

  it('Deve retornar DADOS corretos do repositório "contatempo3000" do user: ViniCL', function () {
    
    var dadosEsperados = {name: "contatempo3000", qtdForts: 0, temWiki: true }
    
    return frisby.get(`https://api.github.com/repos/ViniCL/contatempo3000`)
  
      .then(function (res) {
        expect(res.json.name).toBe(dadosEsperados.name);
        expect(res.json.forks_count).toBe(dadosEsperados.qtdForts);
        expect(res.json.has_wiki).toBe(dadosEsperados.temWiki);
        expect(res.json.language).toBeNull();
      });
  });

  it('Deve retornar DADOS corretos do repositório "Projeto-Web-de-Concursos-Culturais-UTFPR" do user: JoaoZish', function () {
    
    var dadosEsperados = {name: "Projeto-Web-de-Concursos-Culturais-UTFPR", qtdForts: 1, temWiki: true, linguagem: "Handlebars"}
    
    return frisby.get(`https://api.github.com/repos/JoaoZisch/Projeto-Web-de-Concursos-Culturais-UTFPR`)
  
      .then(function (res) {
        expect(res.json.name).toBe(dadosEsperados.name);
        expect(res.json.forks_count).toBe(dadosEsperados.qtdForts);
        expect(res.json.has_wiki).toBe(dadosEsperados.temWiki);
        expect(res.json.language).toBe(dadosEsperados.linguagem);
      });
  });

})
