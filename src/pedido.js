var novoCliente = false;
var dadosEndereco = null;
var tabelaPreco = [];
var produtosArray = [];
var clienteAtual = null;
var ibgeRms = [ '2904608','2904707','2904756','2904905','2905200','2905309','2905408','2927408','2906000','2906109','2906208','2906307' ];

const form = document.querySelector("#form-pedido");
const inputCgc = document.querySelector("#input-cgc");
const quantidade = document.querySelector('#input-quantidade');
const condicaoPagamento = document.querySelector('#input-condicao-pagamento');
const formaPagamento = document.querySelector('#input-forma-pagamento');
const produto = document.querySelector('#input-produto');
const valorProduto = document.querySelector('#input-valor');
const totalPedido = document.querySelector('#total-pedido');
const dadosUsuario = JSON.parse(sessionStorage.getItem('user_data'));

let produtosPedido = JSON.parse(sessionStorage.getItem('produtosPedido')) || [];

let tabelaProdutos = document.querySelector('#produtos-carrinho tbody');

document.querySelector("#adiciona-produto-botao").addEventListener('click', (event) => {
    event.preventDefault();
    let code = produto.getAttribute('data-code');
    let precoProduto = parseFloat(valorProduto.value.replace(',', '.'));

    let index = Math.max(...produtosPedido.map(e => e.index));
    if (index == null || isNaN(index) || !isFinite(index)) index = 0;

    index++;

    const corpoTabelaProdutos =
        `<tbody>
            <tr class="produto-carrinho" data-code="${code}" data-id="${index}">
                <td class="produto nobr" >
                    ${produto.value}
                </td>
                <td class="produto-quantidade">
                    <input min="0" value="${quantidade.value}"  type="number" name="" placeholder="Qtd" disabled>
                </td>
                <td class="produto-preco">
                    <input min="0" value="${precoProduto.toLocalCurrency()}"  type="text" name="" placeholder="Qtd" disabled>
                </td>
                <td class="produto-total">
                    <input min="0" value="${parseFloat(quantidade.value * precoProduto).toLocalCurrency()}"  type="text" name="" placeholder="Qtd" disabled>
                </td>
                <td>
                    <button class="btn btn-danger" onclick="removeItemClick(event)">
                        <i class="fa fa-trash" aria-hidden="true" style="pointer-events: none;"></i>
                    </button>
                </td>
            </tr>
        </tbody>`;

    tabelaProdutos.innerHTML += corpoTabelaProdutos;

    produtosPedido.push({
        index: index,
        codigo: code,
        produto: produto.value,
        quantidade: parseFloat(quantidade.value),
        preco: precoProduto
    })
    sessionStorage.setItem('produtosPedido', JSON.stringify(produtosPedido));
    atualizaTotal();
    form.reset();
    produto.focus();
});

const removeItemClick = (event) => {
    event.preventDefault();
    var targetElement = event.target || event.srcElement;
    let _id = targetElement.parentElement.parentElement.getAttribute('data-id');
    removeItem(parseInt(_id), targetElement.parentElement.parentElement);
}

function removeItem(_id, parentElement) {
    produtosPedido = produtosPedido.filter(item => item.index !== _id);
    sessionStorage.setItem("produtosPedido", JSON.stringify(produtosPedido));

    parentElement.remove();
    atualizaTotal();
}

const atualizaTotal = () => {
    let total = produtosPedido.reduce((accumulator, object) => {
        return accumulator + (object.quantidade * object.preco);
    }, 0);
    totalPedido.innerHTML = total.toLocalCurrency();
}
//document.addEventListener("DOMContentLoaded", event => {

const onContentLoaded = (event) => {

    console.log(dadosUsuario)
    if (dadosUsuario.ALTVAL == 'S') {
        document.querySelector("#input-valor").disabled = false;
    }
    document.querySelector("#input-vendedor").value = dadosUsuario.NOMVEN;
    let data = {
        area: "PRODUT",
        fields: ["CODIGO", "DESCRICAO"],
        search: [
            {
                field: "STATUS",
                operation: "EQUAL_TO",
                value: "A"
            }
        ]
    }

    search(data).then(async response => {
        if (response.ok) {
            json = await response.json()
            let produtosArray = json.data

            autocomplete(produto, produtosArray);
        } else {
            if (response.status == 401) {
                sessionStorage.clear();
                window.location.href = 'index.html';
            }
        }
    })
    //atualizaTotal();
};

const buscaTabela = (tabela) => {
    let data = {
        area: "ITETAB",
        fields: ["PRODUTO", "PRECO"],
        search: [
            {
                field: "CHAVE",
                operation: "EQUAL_TO",
                value: tabela
            }
        ]
    }
    ShowOverlay();
    search(data).then(async response => {
        if (response.ok) {
            let json = await response.json()
            tabelaPreco = json.data;
        } else {
            if (response.status == 401) {
            }
        }
        HideOverlay();
    })
}


const buscaCondicoes = () => {
    let data = {
        area: "CONDPG",
        fields: ["CODIGO", "DESCRICAO"],
        search: [{
            field: "CODIGO",
            operation: "GREATER_THAN",
            value: ''
        }]
    }

    ShowOverlay();
    search(data).then(async response => {
        if (response.ok) {
            let json = await response.json()
            if (json.success) {
                for (const condicao of json.data) {
                    let opt = document.createElement('option');
                    opt.value = condicao.CODIGO;
                    opt.innerHTML = condicao.DESCRICAO;
                    condicaoPagamento.appendChild(opt);
                }
            }
        } else {
            if (response.status == 401) {
            }
        }
        HideOverlay();
    })
}

const buscaFormasPagamento = () => {
    let data = {
        area: "FORMPG",
        fields: ["CODIGO", "DESCRICAO"],
        search: [{
            field: "CODIGO",
            operation: "GREATER_THAN",
            value: ''
        }]
    }

    ShowOverlay();
    search(data).then(async response => {
        if (response.ok) {
            let json = await response.json()
            if (json.success) {
                for (const condicao of json.data) {
                    let opt = document.createElement('option');
                    opt.value = condicao.CODIGO;
                    opt.innerHTML = condicao.DESCRICAO;
                    formaPagamento.appendChild(opt);
                }
            }
        } else {
            if (response.status == 401) {
            }
        }
        HideOverlay();
    })
}

const atualizaPreco = () => {
    let precoProduto = 0;
    let code = produto.getAttribute('data-code');
    let preco = tabelaPreco.find(item => item.PRODUTO === code);

    if (preco != null && preco != 'undefined') {
        precoProduto = preco.PRECO;
    }

    valorProduto.value = precoProduto;
}

produto.addEventListener('focusout', (event) => {
    atualizaPreco();
});

inputCgc.addEventListener('focusout', (event) => {
    inputCgc.value = inputCgc.value.replace(/\D/g, "");
    
    if (inputCgc.value.trim().length < 11) return;
    
    if (!validaCNPJ(inputCgc.value.trim()) && !validaCPF(inputCgc.value.trim())) {
        errorAlert("Erro!", "CPF ou CNPJ inválido!");
        document.getElementById("form-cliente").reset();
        return;
    }

    let data = {
        area: "CLIENT",
        fields: ["CODIGO", "NOME", "ENDERECO", "NUMERO", "BAIRRO", "CEP", "MUNICIPIO", "TELEFO", "TABELA", "VENDED"],
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

        HideOverlay();
    
        if (response.ok) {
            let json = await response.json()
            if (json.success) {
                let client = json.data;
    
                if (client.length > 0) {
                    client = client[0];
                    
                    if (dadosUsuario.CODIGO != '000003' && client.VENDED != dadosUsuario.CODIGO) {
                        errorAlert("Erro!", "Cliente faz parte da carteira de outro representante.\nPor favor LIGUE para a central para autorizar o pedido.")
                        document.getElementById("form-cliente").reset();
                        return;
                    }
    
                    clienteAtual = client;
                    document.querySelector("#input-codigo-cliente").value = client.CODIGO;
                    document.querySelector("#input-nome").value = client.NOME;
                    document.querySelector("#input-endereco").value = client.ENDERECO;
                    document.querySelector("#input-numero").value = client.NUMERO;
                    document.querySelector("#input-bairro").value = client.BAIRRO;
                    document.querySelector("#input-cep").value = client.CEP;
                    document.querySelector("#input-cidade").value = client.MUNICIPIO;
                    document.querySelector("#input-telefone").value = client.TELEFO;

                    buscaTabela(client.TABELA);
                    return;
                }
            }
    
            $.confirm({
                title: 'Erro!',
                content: 'Cliente não cadastrado!',
                type: 'red',
                typeAnimated: true,
                buttons: {
                    success: {
                        text: 'Cancelar',
                        btnClass: 'btn-red',
                        action: function () {
                            inputCgc.value = '';
                            document.querySelector("#input-vendedor").disabled = false;
                        }
                    },
                    register: {
                        text: 'Cadastrar',
                        btnClass: 'btn-green',
                        action: () => {
                            cadastro();
                            document.querySelector("#input-vendedor").disabled = false;
                        }
                    }
                }
            });
        } else {
            if (response.status == 401) {
            }
        }
    });
    document.querySelector("#input-vendedor").disabled = true;
    return false;
});

const cadastro = async () => {
    document.querySelector("#input-nome").disabled = false;
    document.querySelector("#input-endereco").disabled = false;
    document.querySelector("#input-numero").disabled = false;
    document.querySelector("#input-bairro").disabled = false;
    document.querySelector("#input-cep").disabled = false;
    document.querySelector("#input-cidade").disabled = false;
    document.querySelector("#input-telefone").disabled = false;
    novoCliente = true;
    document.querySelector("#input-nome").focus();
}

const cadastrar = async () => {
    if (!validaCNPJ(inputCgc.value.trim()) && !validaCPF(inputCgc.value.trim())) {
        errorAlert("Erro!", "CPF ou CNPJ inválido!");
        return;
    }

    let url = `https://viacep.com.br/ws/${document.querySelector("#input-cep").value}/json`;

    let options = {
        method: 'get'
    };

    let result = await fetch(url, options);
    dadosEndereco = null;
    if (result.ok) {
        dadosEndereco = await result.json();
    }

    let nomeCliente = document.querySelector("#input-nome").value.toUpperCase();
    let enderecoCliente = document.querySelector("#input-endereco").value.toUpperCase();
    let numeroEndereco = document.querySelector("#input-numero").value.toUpperCase();
    let bairroCliente = document.querySelector("#input-bairro").value.toUpperCase();
    let cepCliente = document.querySelector("#input-cep").value.toUpperCase();
    let cidadeCliente = document.querySelector("#input-cidade").value.toUpperCase();
    let telefoneCliente = document.querySelector("#input-telefone").value.toUpperCase();
    let codigoMunicipio = dadosEndereco != null ? dadosEndereco.ibge : "";
    let tabela = ibgeRms.includes(codigoMunicipio) ? "1" : "3";

    let data = [{
        area: "CLIENT",
        data: [{
            CODIGO: "SEQ",
            CGC: inputCgc.value,
            PESSOA: inputCgc.value.length == 14 ? "J" : "F",
            CODPAIS: "1058",
            DATCAD: currentDate(),
            NOME: nomeCliente,
            ENDERECO: enderecoCliente,
            NUMERO: numeroEndereco,
            BAIRRO: bairroCliente,
            CEP: cepCliente,
            MUNICIPIO: cidadeCliente,
            TELEFO: telefoneCliente,
            VENDED: dadosUsuario.CODIGO,
            CODMUN: codigoMunicipio,
            ESTADO: dadosEndereco != null ? dadosEndereco.uf : "",
            TABELA: tabela
        }],
        RETURN_ID: "CODIGO"
    }];

    let retorno = await insert(data);

    if (retorno.ok) {
        let json = await retorno.json();
        return json.data[0];
    } else {
        return '';
    }
}

document.querySelector("#input-cep").addEventListener('focusout', async (event) => {
    let cep = event.target.value.replace(/\D/g, '');

    if (cep.trim().length != 8) return;

    ShowOverlay();

    let url = `https://viacep.com.br/ws/${cep}/json`;

    let options = {
        method: 'get'
    };

    let result = await fetch(url, options);
    dadosEndereco = null;
    if (result.ok) {
        dadosEndereco = await result.json();
        document.querySelector("#input-endereco").value = dadosEndereco.logradouro.toUpperCase();
        document.querySelector("#input-bairro").value = dadosEndereco.bairro.toUpperCase();
        document.querySelector("#input-cidade").value = dadosEndereco.localidade.toUpperCase();
        HideOverlay();
        document.querySelector("#input-numero").focus();
    } else {
        HideOverlay();
    }
})

document.querySelector("#teste-pdf")?.addEventListener('click', () => {
    var source = window.document.getElementsByTagName("body")[0];
    html2canvas(source).then((canvas) => {

        var imgData = canvas.toDataURL('image/jpeg');

        //console.log('Image URL: ' + imgData);

        var doc = new jsPDF('p', 'mm', 'a4');

        //doc.setFontSize(10);

        //doc.text(10, 15, 'Filter section will be printed where.')

        doc.addImage(imgData, 'jpeg', 5, -10, 200, 200);

        doc.save('sample.pdf');

    });
})

document.querySelector("#finaliza-pedido-botao").addEventListener('click', async (event) => {
    event.preventDefault();
    let codigoCliente = document.querySelector("#input-codigo-cliente");
    let nomeVendedor = document.querySelector('#input-vendedor').value;
    let tipoPedido = document.querySelector('input[name=tipo_pedido]:checked').value;
    let observacao = document.querySelector("#observacao");

    if (codigoCliente.value === '') {

        if (novoCliente) {
            codigoCliente.value = await cadastrar();
        }

        if (codigoCliente.value === '') {
            errorAlert('Erro', 'Informe o cliente!');
            return;
        }
    }

    if (nomeVendedor === '') {
        errorAlert('Erro', 'Informe o vendedor!');
        return;
    }

    if (condicaoPagamento.value === '') {
        errorAlert('Erro', 'Informe a Condição de Pagamento');
        return;
    }

    if (formaPagamento.value === '') {
        errorAlert('Erro', 'Informe a Forma de Pagamento');
        return;
    }

    if (produtosPedido.length == 0) {
        errorAlert('Erro', 'Pedido sem itens');
        return;
    }

    ShowOverlay();
    let itens = [];
    let ordem = 0;
    for (const item of produtosPedido) {
        itens.push({
            ORDEM: (++ordem).toString(),
            PRODUTO: item.codigo,
            QUANT: item.quantidade.toString(),
            VALUNIT: item.preco.toString(),
            TOTAL: (item.preco * item.quantidade).toString(),
            INTEGR: "5102.21",
            CFOP: "5102",
            ARMAZEM: "01"
        });
    }

    const sum = itens.reduce((accumulator, object) => {
        return accumulator + parseFloat(object.TOTAL);
    }, 0);

    /*
    if (dadosUsuario.CODIGO != '000003' && sum < 1000) {
        errorAlert('Erro', 'Pedido com valor inferior a R$ 1.000,00');
        HideOverlay();
        return;
    }
    */

    const qtd = itens.reduce((accumulator, object) => {
        return accumulator + parseFloat(object.QUANT);
    }, 0);

    let data = [{
        area: "CABPDV",
        data: [{
            CLIENTE: codigoCliente.value,
            VENDEDOR: dadosUsuario.CODIGO,
            CONDICAO: condicaoPagamento.value,
            FORMPG: formaPagamento.value,
            EMISSAO: currentDate(),
            DATAINC: currentDate(),
            TIPO: tipoPedido,
            STATUS: "B",
            FLAG: "A",
            FILIAL: "0101",
            TABELA: clienteAtual.TABELA,
            QTDTOT: qtd.toString(),
            VALOR: sum.toString(),
            VALBRUT: sum.toString(),
            VALMERC: sum.toString(),
            OBS_INT: `VENDEDOR: ${nomeVendedor.toUpperCase()}`,
            OBSTXT: observacao.value,
            ITEPDV: itens
        }]
    }];


    insert(data).then(async response => {

        if (response.ok) {
            let json = await response.json();
            if (json.success) {
                let chave = json.data[0];

                $.confirm({
                    title: 'Sucesso!',
                    content: `Pedido ${chave} salvo!`,
                    type: 'green',
                    typeAnimated: true,
                    buttons: {
                        success: {
                            text: 'Ok',
                            btnClass: 'btn-green',
                            action: function () {
                                document.location.reload();
                            }
                        }
                    }
                });
                sessionStorage.removeItem('produtosPedido');
            }
        } else {
            let texto = await response.text();
            alert(texto);
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
                    atualizaPreco();
                });
                a.appendChild(b);
            }
        }
    });
    inp.addEventListener('focusout', function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        e.preventDefault();
        if (currentFocus > -1) {
            /*and simulate a click on the "active" item:*/
            if (x) x[currentFocus].click();
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
        } else if (e.keyCode == 9) {
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

buscaCondicoes();
buscaFormasPagamento();

document.addEventListener('keyup', (e) => {
    if (e.target.nodeName == 'INPUT' && e.target.type.toUpperCase() == 'TEXT') {
        e.target.value = e.target.value.toUpperCase();
    }
})


produtosPedido.forEach(produto => {

    const corpoTabelaProdutos = `
        <tr class="produto-carrinho" data-code="${produto.codigo}" data-id="${produto.index}">
            <td class="produto">
                ${produto.produto}
            </td>
            <td class="produto-quantidade">
                <input min="0" value="${produto.quantidade}"  type="number" name="" placeholder="Qtd" disabled>
            </td>
            <td class="produto-preco">
                <input min="0" value="${parseFloat(produto.preco).toLocalCurrency()}"  type="text" name="" placeholder="Qtd" disabled>
            </td>
            <td class="produto-total">
                <input min="0" value="${parseFloat(produto.quantidade * (produto.preco || 0)).toLocalCurrency()}"  type="text" name="" placeholder="Qtd" disabled>
            </td>
            <td>
                <button class="btn btn-danger" onclick="removeItemClick(event)">
                    <i class="fa fa-trash" aria-hidden="true" style="pointer-events: none;"></i>
                </button>
            </td>
        </tr>
    `;
    tabelaProdutos.innerHTML += corpoTabelaProdutos;

});


document.addEventListener("DOMContentLoaded", onContentLoaded);

validaToken();

function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    console.log(charCode)
    if (charCode == 44) {
        return true;
    }
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
    return true;
}