/*
    OBJETIVO 1 - quando clicarmos na seta de avançar temos que mostrar o próximo cartão da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta avançar
        - passo 3 - fazer aparecer o próximo cartão da lista
        - passo 4 - buscar o cartão que esta selecionado e esconder

    OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o cartão anterior da lista
        - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
        - passo 2 - dar um jeito de identificar o clique do usuário na seta voltar
        - passo 3 - fazer aparecer o cartão anterior da lista
        - passo 4 - buscar o cartão que esta selecionado e esconder
*/

// OBJETIVO 1 - Lógica original de seleção de personagem ao clicar na lista
const personagens = document.querySelectorAll(".personagem");

personagens.forEach((personagem) => {
  personagem.addEventListener("click", () => {
    // Remove a classe 'selecionado' do personagem que já estava selecionado
    const personagemSelecionado = document.querySelector(".selecionado");
    personagemSelecionado.classList.remove("selecionado");

    // Adiciona a classe 'selecionado' no novo personagem clicado
    personagem.classList.add("selecionado");

    // Atualiza a imagem grande do personagem
    const imagemPersonagemGrande = document.querySelector(".personagem-grande");
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

    // Atualiza o nome do personagem
    const nomePersonagem = document.getElementById("nome-personagem");
    nomePersonagem.innerText = personagem.getAttribute("data-name");

    // Atualiza a descrição do personagem
    const descricaoPersonagem = document.getElementById("descricao-personagem");
    descricaoPersonagem.innerText = personagem.getAttribute("data-description");
  });
});

// OBJETIVO 2 - Lógica para os botões de avançar e retornar
const btnAnterior = document.querySelector(".btn-anterior");
const btnProximo = document.querySelector(".btn-proximo");

let indicePersonagemAtual = 0;

function atualizarIndiceAtual() {
  const personagemSelecionado = document.querySelector(".selecionado");
  // Converte a NodeList para um Array para usar o método indexOf
  indicePersonagemAtual = Array.from(personagens).indexOf(
    personagemSelecionado
  );
}

btnProximo.addEventListener("click", () => {
  atualizarIndiceAtual();
  const proximoIndice = (indicePersonagemAtual + 1) % personagens.length;
  // Simula um clique no próximo personagem para reutilizar a lógica existente
  personagens[proximoIndice].click();
});

btnAnterior.addEventListener("click", () => {
  atualizarIndiceAtual();
  const indiceAnterior =
    (indicePersonagemAtual - 1 + personagens.length) % personagens.length;
  // Simula um clique no personagem anterior para reutilizar a lógica existente
  personagens[indiceAnterior].click();
});

// Garante que o índice inicial seja definido quando a página carregar
atualizarIndiceAtual();
