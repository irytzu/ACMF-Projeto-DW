function mostrarSecao(id) {
  document.querySelectorAll('.secao').forEach(secao => {
    secao.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

async function carregarJogadores() {
  const resposta = await fetch('/jogadores');
  const dados = await resposta.json();

  const container = document.getElementById('lista-jogadores');
  container.innerHTML = dados.map(j => `
    <div class="card">
      <h3>${j.nome}</h3>
      <p>Posição: ${j.posicao}</p>
      <p>Idade: ${j.idade}</p>
    </div>
  `).join('');
}

async function carregarJogos() {
  const resposta = await fetch('/jogos');
  const dados = await resposta.json();

  const container = document.getElementById('lista-jogos');
  container.innerHTML = dados.map(j => `
    <div class="card">
      <pre>${JSON.stringify(j, null, 2)}</pre>
    </div>
  `).join('');
}

async function carregarEstatisticas() {
  const resposta = await fetch('/estatisticas');
  const dados = await resposta.json();

  const container = document.getElementById('lista-estatisticas');
  container.innerHTML = dados.map(e => `
    <div class="card">
      <pre>${JSON.stringify(e, null, 2)}</pre>
    </div>
  `).join('');
}

carregarJogadores();
carregarJogos();
carregarEstatisticas();