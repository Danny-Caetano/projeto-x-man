/*
O que precisamos fazer: - quando passar o 
mouse em cima do personagem na lista, temos
que adicionar a borda azul de seleção na 
imagem pequena do personagem e mostrar a 
imagem, o nome e o texto grande de descrição
do personagem que está selecionado.

    Objetivo 1 - quando passar o mouse em
    cima do personagem na listagem, devemos selecioná-lo.

        passo 1 - pagar os personagens no JS
        pra poder verifidar quando o usuário
        passar o mause em cima de um deles.
        passo2 - adicionar a classe
        selecionado no personagem em que
        o usuário passar o cursor do mouse.
        passo 3 - verificar se já exista um
        personagem selecionado. Se sim,
        devemos remover a seleção dele.

    Objetivo 2  - quando passar o mouse em
    cima do personagem na listagem, trocar a 
    imagem, o nome e a descriçao do 
    personagem grande.
        passo 1 - pegar o elemento do
        personagem grande para adicionar as
        informações nele.
        passo 2 - alterar a imagem do
        personagem grande.
        passo 3 - alterar o nome do 
        personagem grande.
        passo 4 - alterar a descrição do 
        personagem grande.

*/

// Objetivo 1 - quando passar o mouse em
// cima do personagem na listagem, devemos selecioná-lo.
//passo 1 - pagar os personagens no JS pra poder verificar quando o usuário
//passar o mause em cima de um deles.
const personagens = document.querySelectorAll('.personagem');

// passo2 - adicionar a classe selecionado no personagem em que
// o usuário passar o cursor do mouse.
personagens.forEach((personagem) => {
personagem.addEventListener('mouseenter', () => {
if(window.innerWidth < 450) {
    window.scrollTo({top: 0, behavior:'smooth'});
}
// passo 3 - verificar se já existe um personagem selecionado. Se sim,devemos remover a seleção dele.
    removerSelecaoPersonagem(personagem);

// Objetivo 2  - quando passar o mouse em cima do personagem na listagem, trocar a imagem, o nome e a descriçao do personagem grande.
// passo 1 - pegar o elemento do personagem grande para adicionar asinformações nele.
    alterarImagemPersonagemSelecionado(personagem);

// passo 3 - alterar o nome do personagem grande.
    alterarNomePersonagemGrande(personagem);

// passo 4 - alterar a descrição do personagem grande.
    alterarDescricaoPersonagemGrande(personagem);

    })  
})


function alterarNomePersonagemGrande(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagemGrande(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function removerSelecaoPersonagem(personagem) {
    removerSelecaodoPersonagem();

    personagem.classList.add('selecionado');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    // passo 2 - alterar a imagem do personagem grande.
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaodoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

