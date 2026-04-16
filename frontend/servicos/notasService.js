//GET
export const buscarNotas = async () => {
    const resposta = await fetch('http://localhost:5000/nota')
    const notas = await resposta.json();
    return notas;
}

//POST
export const adicionarNota = async (event, nota) => {
    event.preventDefault();

    await fetch('http://localhost:5000/nota', {
        method: 'post',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota),
    })
}

//DELETE
export const deletarNota = async (id) => {
    await fetch(`http://localhost:5000/nota/${id}`, {
        method: 'delete',
    });
}

//PUT
export const atualizarNota = async (nota) => {
    
    await fetch(`http://localhost:5000/nota/${nota._id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify(nota)
    });
}