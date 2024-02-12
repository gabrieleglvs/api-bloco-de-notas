const tituloNotaInput = document.querySelector('#titulo');
const conteudoNotaInput = document.querySelector('#conteudo');
const formAddNota = document.querySelector('.form-add-nova-nota');
const muralCardNotas = document.querySelector('.notas-card');

//GET
const buscarNotas = async () => {
    const resposta = await fetch('http://localhost:5000/nota')
    const notas = await resposta.json();
    return notas;
}

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
        cardSalvarBotao.addEventListener('click', () => {
            atualizarNota(_id, cardInputTitulo.value, cardInputConteudo.value);
        })

        //AÇÃO - Botão CANCELAR
        cardCancelarBotao.addEventListener('click', () => {
            carregarNotas();
        })  
    })

    //AÇÃO - Botão DELETE
    cardDeletarBotao.addEventListener('click', () => {
        deletarNota(_id);
    })

    //-----------------
    //Montando o card de fato
    card.appendChild(cardDivNotaConteudo);
    card.appendChild(cardDivNotaBotoes);

    return card;
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
carregarNotas();


//POST
const adicionarNota = async (event) => {
    event.preventDefault();

    const nota = {
        titulo: tituloNotaInput.value,
        conteudo: conteudoNotaInput.value
    }

    await fetch('http://localhost:5000/nota', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota),
    })

    carregarNotas();
    tituloNotaInput.value = '';
    conteudoNotaInput.value = '';
}

formAddNota.addEventListener('submit', (event) => {
    adicionarNota(event);
})

//DELETE
const deletarNota = async (id) => {
    await fetch(`http://localhost:5000/nota/${id}`, {
        method: 'delete',
    });

    carregarNotas();
}

//PUT
const atualizarNota = async (_id, titulo, conteudo) => {

    const nota = {
        _id,
        titulo,
        conteudo
    }
    
    await fetch(`http://localhost:5000/nota/${_id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota)
    });

    carregarNotas();
}
