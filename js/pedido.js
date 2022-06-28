const form = document.querySelector("#form-pedido");
const inputCgc = document.querySelector("#input-cgc");



var produtosArray = [];
let quantidade = document.querySelector('#input-quantidade');

let produtosPedido = JSON.parse(localStorage.getItem('produtosPedido')) || [];

let tabelaProdutos = document.getElementById('produtos-carrinho');

console.log(produtosPedido);
produtosPedido.forEach(produto => {
    const corpoTabelaProdutos = `
        <tbody>
        <tr class="produto-carrinho">
            <td class="produto">
                ${produto.produto}
            </td>
        
            <td class="produto-quantidade">
                <input min="0" value="${produto.quantidade}"  type="number" name="" placeholder="Qtd" disabled>
                <img src="./img/times-solid.svg" class="remove-item" alt="Remover produto" onclick="removeItem('${produto.codigo}')">
            </td>
        </tr>
    </tbody>
    `;
    tabelaProdutos.innerHTML += corpoTabelaProdutos;
});

const adicionaProduto = (event) => {
    let produto = document.querySelector('#input-produto');
    console.log(produto)
    console.log(produto.value);
    console.log(quantidade.value);
    let code = produto.getAttribute('data-code');

    const corpoTabelaProdutos =
        `<tbody>
            <tr class="produto-carrinho" data-code="${code}">
                <td class="produto">
                    ${produto.value}
                </td>
               
                 <td class="produto-quantidade">
                    <input min="0" value="${quantidade.value}"  type="number" name="" placeholder="Qtd" disabled>
                    <img src="./img/times-solid.svg" class="remove-item" alt="Remover produto" onclick="removeItem('${code}')">
                </td>
            </tr>
        </tbody>`;

    tabelaProdutos.innerHTML += corpoTabelaProdutos;
    produtosPedido.push({
        codigo: code,
        produto: produto.value,
        quantidade: quantidade.value,
    })
    localStorage.setItem('produtosPedido', JSON.stringify(produtosPedido));
    form.reset();
    produto.focus();
}

function removeItem(codigoProduto) {

    
    let quantidadeProduto = produtosPedido.find(item=> item.codigo === codigoProduto);
    let indiceProduto = produtosPedido.indexOf(quantidadeProduto);
    produtosPedido.splice(indiceProduto, 1);
    localStorage.setItem("produtos", JSON.stringify(produtosPedido));

    document.getElementById(`${codigoProduto}`).remove();
    atualizaTotais();
}

//document.addEventListener("DOMContentLoaded", event => {

const onContentLoaded = (event) => {
    console.log("DOM completamente carregado e analisado");

   
    navigator.serviceWorker.controller.postMessage({
        type: 'CHECK_TOKEN'
    })

    let search = {
        area: "PRODUT",
        fields: [ "CODIGO", "DESCRICAO"],
        search: [
            {
                field: "STATUS",
                operation: "EQUAL_TO",
                value: "A"
            }
        ]
    }
    
    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId
        }),
        body: JSON.stringify(search)
    };

    fetch('https://api.mithra.com.br/mithra/v1/search', options).then(async response => {
        if (response.ok) {
            json = await response.json()
            let produtosArray = json.data
            console.log(produtosArray)

            autocomplete(document.querySelector("#input-produto"), produtosArray);
        } else {
            if (response.status == 401) {
                sessionStorage.clear();
                window.location.href = '/';
            }
        }
    })
};

inputCgc.addEventListener('focusout', (event) => {
    console.log(inputCgc.value)
    
    let data = {
        area: "CLIENT",
        fields: [ "CODIGO", "NOME", "ENDERECO", "NUMERO", "BAIRRO", "CEP", "MUNICIPIO", "TELEFO" ],
        search: [
            {
                field: "CGC",
                operation: "EQUAL_TO",
                value: inputCgc.value
            }
        ]
    }

    ShowOverlay();
    search(data).then(async response => {
        
        if (response.ok) {
            let json = await response.json()
            let client = json.data;

            if (client.length > 0) {
                client = client[0];
                document.querySelector("#input-codigo-cliente").value = client.CODIGO;
                document.querySelector("#input-nome").value = client.NOME;
                document.querySelector("#input-endereco").value = client.ENDERECO;
                document.querySelector("#input-numero").value = client.NUMERO;
                document.querySelector("#input-bairro").value = client.BAIRRO;
                document.querySelector("#input-cep").value = client.CEP;
                document.querySelector("#input-cidade").value = client.MUNICIPIO;
                document.querySelector("#input-telefone").value = client.TELEFO;
            }
        } else {
            if (response.status == 401) {
            }
        }
        HideOverlay();
    })
}); 

document.querySelector("#finaliza-pedido-botao").addEventListener('click', (event) => {
    ShowOverlay();

    let data = [{
        area: "CABPDV",
        data: [{
            CLIENTE: document.querySelector("#input-codigo-cliente").value,
            VENDEDOR: "",
            CONDICAO: "001",
            FORMPG: "001",
            EMISSAO: "20200101",
            DATAINC: "20200101",
            TIPO: "P",
            FILIAL: "0101",
            TABELA: "1",
        }]
    }];
console.log(JSON.stringify(data))
    insert(data).then(async response => {
        
        if (response.ok) {
            console.log(await response.text());
        }
        HideOverlay();
    });;
});

function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        /*close any already open lists of autocompleted values*/
        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;
        /*create a DIV element that will contain the items (values):*/
        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");
        /*append the DIV element as a child of the autocomplete container:*/
        this.parentNode.appendChild(a);
        /*for each item in the array...*/
        for (i = 0; i < arr.length; i++) {
            /*check if the item starts with the same letters as the text field value:*/
            if (arr[i].DESCRICAO.toUpperCase().includes(val.toUpperCase())) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                b.setAttribute('data-code', arr[i].CODIGO);
                /*make the matching letters bold:*/
                //b.innerHTML = "<strong>" + arr[i].DESCRICAO.substr(0, val.length) + "</strong>";
                b.innerHTML = arr[i].DESCRICAO.toUpperCase().replace(val.toUpperCase(), `<strong>${val.toUpperCase()}</strong>`);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i].DESCRICAO + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    inp.setAttribute('data-code', this.getAttribute('data-code'));
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });
    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            /*If the arrow DOWN key is pressed,
            increase the currentFocus variable:*/
            currentFocus++;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 38) { //up
            /*If the arrow UP key is pressed,
            decrease the currentFocus variable:*/
            currentFocus--;
            /*and and make the current item more visible:*/
            addActive(x);
        } else if (e.keyCode == 13) {
            /*If the ENTER key is pressed, prevent the form from being submitted,*/
            e.preventDefault();
            if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        /*a function to classify an item as "active":*/
        if (!x) return false;
        /*start by removing the "active" class on all items:*/
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        /*add class "autocomplete-active":*/
        x[currentFocus].classList.add("autocomplete-active");
        inp.value = x[currentFocus].lastElementChild.value;
    }
    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {
        /*close all autocomplete lists in the document,
        except the one passed as an argument:*/
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

document.addEventListener("DOMContentLoaded", onContentLoaded);