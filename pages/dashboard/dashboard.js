
let btn = document.getElementById('btn-sub');

btn.addEventListener('click', () => {

    let descricao = document.getElementById('descricao');
    let detalhamento = document.getElementById('detalhamento');


    let data = JSON.parse(localStorage.getItem('data') || '[]');

    data.push({
        id: Date.now(),
        descricao: descricao.value,
        detalhamento: detalhamento.value
    })

    localStorage.setItem('data', JSON.stringify(data));

    let show = document.getElementById('mostrarLinha');
    show.innerHTML = '';

    let getData = JSON.parse(localStorage.getItem('data'));
    // console.log(getData);

    getData.forEach((item, index, array) => {
        show.innerHTML += `
        <tr>
            <td data-label="#" id="count">${index + 1}</td>
            <td data-label="Descricao" id="description">${item.descricao}</td>
            <td data-label="Detalhamento" id="detalhes" >${item.detalhamento}</td>
            <td data-label="Acao" >
            <button type="submit" id="btn-apagar" onclick=removeItem(${item.id})>Apagar</button>
            <button type="submit" id="btn-edit" onclick=editarItem(${item.id}) >Editar</button>
            </td>
        </tr> 
        `;
    });

    localStorage.setItem('data', JSON.stringify(data));

    document.getElementById('descricao').value = '';
    document.getElementById('detalhamento').value = '';

})