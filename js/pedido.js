let produto = document.querySelector('#input-produto');
let quantidade = document.querySelector('#input-quantidade');

let produtosPedido = JSON.parse(localStorage.getItem('produtosPedido')) || [];

let tabelaProdutos = document.getElementById('produtos-carrinho');
produtosPedido.forEach(produto => {
        const corpoTabelaProdutos = `
        <tbody>
        <tr class="produto-carrinho">
            <td class="produto">
                ${produto.produto}
            </td>
        
            <td class="produto-quantidade">
                <input min="0" value="${produto.quantidade}"  type="number" name="" placeholder="Qtd" disabled>
            </td>
        </tr>
    </tbody>
    `;
    tabelaProdutos.innerHTML += corpoTabelaProdutos;
});

const adicionaProduto = (event) => {
    console.log(produto.value);
    console.log(quantidade.value);
    
    
    const corpoTabelaProdutos = `
            <tbody>
            <tr class="produto-carrinho">
                <td class="produto">
                    ${produto.value}
                </td>
               
                 <td class="produto-quantidade">
                    <input min="0" value="${quantidade.value}"  type="number" name="" placeholder="Qtd" disabled>
                </td>
            </tr>
        </tbody>
    `;
    
    tabelaProdutos.innerHTML += corpoTabelaProdutos;
    produtosPedido.push({
        produto: produto.value,
        quantidade: quantidade.value,
    })
    localStorage.setItem('produtosPedido', JSON.stringify(produtosPedido));
}
