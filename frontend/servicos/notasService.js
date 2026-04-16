//GET
export const buscarNotas = async () => {
    const resposta = await fetch('https://bloco-de-notas-backend.onrender.com/nota')
    const notas = await resposta.json();
    return notas;
}

//POST
export const adicionarNota = async (event, nota) => {
    event.preventDefault();

    await fetch('https://bloco-de-notas-backend.onrender.com/nota', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota),
    })
}

//DELETE
export const deletarNota = async (id) => {
    await fetch(`https://bloco-de-notas-backend.onrender.com/nota/${id}`, {
        method: 'delete',
    });
}

//PUT
export const atualizarNota = async (nota) => {
    
    await fetch(`https://bloco-de-notas-backend.onrender.com/nota/${nota._id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota)
    });
}