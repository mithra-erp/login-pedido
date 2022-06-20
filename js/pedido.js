const xClientId = 'MDMyODA3NzQ1MzU=';
var produtosArray = [];
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

document.addEventListener("DOMContentLoaded", event => {
    console.log("DOM completamente carregado e analisado");

    let access_token = sessionStorage.getItem('jwt');
    let search = {
        area: "PRODUT",
        search: [
            {
                field: "GRUPO",
                operation: "LIKE",
                value: "50%"
            }
        ]
    }

    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId,
            'Authorization': 'Bearer ' + access_token
        }),
        body: JSON.stringify(search)
    };

    fetch('https://api.mithra.com.br/mithra/v1/search', options).then(async response => {
        if (response.ok) {
            json = await response.json()
            let produtos = json.data
            console.log(produtos);
            for (const produto of produtos) {
                produtosArray.push(produto.DESCRICAO);
            }
            console.log(produtosArray)
            autocomplete(document.querySelector("input.produto"), produtosArray);
        }
    })
});

function autocomplete(inp, arr) {
    console.log(inp);
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
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*make the matching letters bold:*/
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                b.addEventListener("click", function (e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
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