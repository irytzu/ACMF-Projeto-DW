Brasil na Copa do Mundo 2022

Esse projeto foi desenvolvido para a disciplina de Desenvolvimento Web, como trabalho do 2º bimestre. A ideia central é trazer um pouco da campanha do Brasil na Copa do Mundo de 2022, no Catar, mostrando os jogadores convocados, os jogos disputados (incluindo amistosos e eliminatórias que antecederam a competição) e os principais acontecimentos de cada partida, como gols, assistências e a disputa de pênaltis contra a Croácia.

A aplicação consiste em um site simples que consome dados de uma API própria, construída em Node.js, que por sua vez busca essas informações em um banco de dados PostgreSQL.

Sobre o funcionamento

O projeto é dividido em duas grandes partes que conversam entre si: o front-end (o que o usuário vê e interage no navegador) e o back-end (o servidor que processa as requisições e busca os dados no banco).

Quando alguém abre a página inicial, o JavaScript do navegador faz chamadas para a API usando a função fetch, pedindo os dados de jogadores, jogos e eventos. O servidor Node.js recebe essas requisições, monta as consultas SQL correspondentes, busca os dados no PostgreSQL e devolve tudo em formato JSON. O front-end então recebe esse JSON e monta os elementos visuais na tela (os cards de jogadores, os cards de jogos, etc.), sem precisar recarregar a página inteira a cada clique.

A página é dividida em três seções principais. Convocados mostra os 26 jogadores que foram chamados para representar o Brasil na Copa de 2022, com nome, posição e clube de cada um. Jogos lista as partidas que o Brasil disputou, desde as Eliminatórias e amistosos preparatórios até os jogos oficiais da Copa, com placar e estádio. Gols, Assistências e Pênaltis detalha quem fez gol, quem deu assistência e como foi a disputa de pênaltis contra a Croácia nas quartas de final, separando os acontecimentos do Brasil dos acontecimentos do time adversário.

O banco de dados foi modelado com três tabelas relacionadas entre si: jogadores, jogos e eventos. A tabela de eventos funciona como uma ligação entre as outras duas, guardando referências (chaves estrangeiras) tanto para o jogador quanto para o jogo em que aquele gol, assistência ou pênalti aconteceu. Isso permite montar consultas que cruzam as informações, como "todos os gols que o jogador X marcou" ou "todos os eventos que aconteceram no jogo Y".

Tecnologias utilizadas

O back-end foi construído com Node.js e Express, responsáveis por criar e gerenciar as rotas da API. A conexão com o banco de dados é feita através da biblioteca pg, que permite ao Node.js se comunicar com o PostgreSQL, banco relacional escolhido para armazenar todas as informações do projeto. No front-end, foi utilizado HTML5 com tags semânticas (como header, nav, main, section, aside e footer), CSS para a estilização visual, e JavaScript puro, sem frameworks, para buscar os dados da API e montar o conteúdo dinâmico na tela. Durante o desenvolvimento, também foi usado o Nodemon, uma ferramenta que reinicia o servidor automaticamente sempre que um arquivo é salvo, facilitando os testes.

Estrutura do projeto

Dentro da pasta public estão os arquivos do front-end, ou seja, tudo que o navegador carrega: a pasta img com as imagens usadas no site, o index.html com a estrutura da página, o style.css com a estilização e o script.js com a lógica de busca e exibição dos dados. Dentro da pasta src estão os arquivos do back-end: o server.js, que configura o Express e define as rotas da API, e o db.js, que configura a conexão com o PostgreSQL. Na raiz do projeto também está o ddl.sql, script com a criação das tabelas e os dados que populam o banco, o package.json com as dependências e scripts do projeto, e o .gitignore, que lista os arquivos e pastas que não sobem para o Git, como a pasta node_modules.

Como rodar o projeto na sua máquina

Antes de começar, é preciso ter instalado o Node.js (versão 18 ou superior) e o PostgreSQL, de preferência junto com o pgAdmin para gerenciar o banco visualmente.

O primeiro passo é clonar o repositório e entrar na pasta do projeto:

git clone https://github.com/irytzu/EduardoBarzottoIritsu_2bim_BrasilNaCopa2022.git
cd EduardoBarzottoIritsu_2bim_BrasilNaCopa2022

Depois, instale as dependências do projeto:

npm install

Esse comando instala automaticamente o Express, o pg e o Nodemon, que já estão listados no package.json.

O próximo passo é criar o banco de dados. Abra o pgAdmin (ou outra ferramenta de sua preferência), crie um novo banco chamado wc_convocacoes, abra o Query Tool desse banco e execute o conteúdo do arquivo ddl.sql, que está na raiz do projeto. Esse script cria as três tabelas (jogadores, jogos e eventos) e já insere todos os dados necessários para o funcionamento do site.

Depois de criar o banco, abra o arquivo src/db.js e confirme se os dados de conexão batem com o seu ambiente local, como usuário, senha, porta e nome do banco.

Com tudo configurado, é só rodar o servidor:

node src/server.js

Se tudo estiver certo, deve aparecer no terminal a mensagem "Servidor rodando em http://localhost:3000". Basta abrir essa mesma URL no navegador para visualizar o site funcionando, com os jogadores, os jogos e os eventos da campanha do Brasil na Copa de 2022.

Rotas da API

O servidor expõe três rotas principais, todas retornando dados em formato JSON. A rota GET /jogadores retorna a lista de jogadores convocados pelo Brasil. A rota GET /jogos retorna a lista de jogos disputados pelo Brasil. E a rota GET /eventos retorna os gols, assistências e pênaltis de cada jogo, já com o nome do jogador e as informações da partida correspondente.

Todas as rotas realizam apenas operações de consulta (SELECT) ao banco de dados, sem nenhuma inserção, atualização ou remoção de dados, conforme o escopo definido para esta etapa do trabalho.

Autor

Desenvolvido por Eduardo Barzotto Iritsu, 2º Bimestre, Desenvolvimento Web.
