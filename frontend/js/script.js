import { buscarNotas } from "../servicos/notasService.js";
import { adicionarNota } from "../servicos/notasService.js";
import { deletarNota } from "../servicos/notasService.js";
import { atualizarNota } from "../servicos/notasService.js";

const tituloNotaInput = document.querySelector('#titulo');
const conteudoNotaInput = document.querySelector('#conteudo');
const formAddNota = document.querySelector('.form-add-nova-nota');
const muralCardNotas = document.querySelector('.notas-card');

const criarElemento = (tag, innerText = '', innerHTML = '', value = '') => {
    const elemento = document.createElement(tag);

    if(tag === 'input') {
        elemento.type = 'text';
        elemento.value = value;
    }
  
    if (innerText) {
      elemento.innerText = innerText;
    }
  
    if (innerHTML) {
      elemento.innerHTML = innerHTML;
    }
  
    return elemento;
  }

const criarCardNota = ({_id, titulo, conteudo}) => {

    //CARD
    const card = criarElemento('div');
    card.classList.add('nota-card');

    //elementos pricipais do card
    const cardDivNotaConteudo = criarElemento('div');
    const cardTitulo = criarElemento('h4', titulo);
    const cardConteudo = criarElemento('p', conteudo);
    //estilo dos elementos pricipais do card
    cardDivNotaConteudo.classList.add('nota-conteudo');
    //montando os elementos pricipais do card
    cardDivNotaConteudo.appendChild(cardTitulo);
    cardDivNotaConteudo.appendChild(cardConteudo);
    //------------------

    //elementos de edição do card
    const cardTituloEditar = criarElemento('h4', 'Editar');
    const cardInputTitulo = criarElemento('input', '', '', titulo);
    const cardInputConteudo = criarElemento('textarea', '', conteudo);
    //estilo dos elementos de edição do card
    cardTituloEditar.classList.add('nota-conteudo');
    cardInputTitulo.classList.add('nota-conteudo-titulo');
    cardInputConteudo.classList.add('nota-conteudo-p');
    //-------------------

    const cardDivNotaBotoes = criarElemento('div');

    //botões do card
    const cardEditarBotao = criarElemento('button', '', '<i class="bi bi-pencil-square"></i>');
    const cardDeletarBotao = criarElemento('button', '', '<i class="bi bi-trash3-fill"></i>');
    const cardSalvarBotao = criarElemento('button', '', '<i class="bi bi-bookmark-check-fill"></i>Salvar');
    const cardCancelarBotao = criarElemento('button', '', '<i class="bi bi-x-square-fill"></i>Cancelar');
    //estilo dos botões do card
    cardDivNotaBotoes.classList.add('nota-botoes');
    //montando botões EDITAR e DELETAR do card
    cardDivNotaBotoes.appendChild(cardEditarBotao);
    cardDivNotaBotoes.appendChild(cardDeletarBotao);

    //AÇÃO - Botão EDITAR
    cardEditarBotao.addEventListener('click', () => {
        
        //removendo elementos principais do card e botões
        cardTitulo.remove();
        cardConteudo.remove();
        cardEditarBotao.remove();
        cardDeletarBotao.remove();

        //adicionando elementos de edição do card
        cardDivNotaConteudo.appendChild(cardTituloEditar);
        cardDivNotaConteudo.appendChild(cardInputTitulo);
        cardDivNotaConteudo.appendChild(cardInputConteudo);
        cardDivNotaBotoes.appendChild(cardSalvarBotao);
        cardDivNotaBotoes.appendChild(cardCancelarBotao);

        //AÇÃO - Botão SALVAR
        cardSalvarBotao.addEventListener('click', async () => {
            const nota = {
                _id,
                titulo: cardInputTitulo.value,
                conteudo: cardInputConteudo.value
            }

            await atualizarNota(nota);
            carregarNotas();
        })

        //AÇÃO - Botão CANCELAR
        cardCancelarBotao.addEventListener('click', () => {
            carregarNotas();
        })  
    })

    //AÇÃO - Botão DELETE
    cardDeletarBotao.addEventListener('click', async () => {
        await deletarNota(_id);
        carregarNotas();
    })

    //-----------------
    //Montando o card de fato
    card.appendChild(cardDivNotaConteudo);
    card.appendChild(cardDivNotaBotoes);

    return card;
}

const limparFormulario = () => {
    tituloNotaInput.value = '';
    conteudoNotaInput.value = '';
}

const carregarNotas = async () => {

    const notas = await buscarNotas();
    //console.log(notas)

    muralCardNotas.innerHTML = '';

    notas.forEach(nota => {
        const cardNota = criarCardNota(nota)
        muralCardNotas.appendChild(cardNota)
    });    
}

formAddNota.addEventListener('submit', async (event) => {

    const nota = {
        titulo: tituloNotaInput.value,
        conteudo: conteudoNotaInput.value
    }

    await adicionarNota(event, nota);
    carregarNotas();
    limparFormulario();
})

carregarNotas();


