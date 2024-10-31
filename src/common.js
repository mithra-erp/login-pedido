const xClientId = 'NDM5ODY1ODQwMDAxMjk=';
const baseUrlApi = 'https://api.mithra.com.br'
const apiToken = () => sessionStorage.getItem("api_token")

const validaToken = () => {
    if (!apiToken()) {
        sessionStorage.clear();
        window.location.href = 'index.html';
    }
}

const search = async (search) => {
    let options = {
        method: 'post',
        mode: 'cors',
        headers: new Headers({
            'X-Client-Id': xClientId,
            'Authorization': `Bearer ${apiToken()}`,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(search)
    };

    return fetch(`${baseUrlApi}/mithra/v1/search`, options);
}

const insert = async (data) => {
    let options = {
        method: 'post',
        mode: 'cors',
        headers: new Headers({
            'X-Client-Id': xClientId,
            'Authorization': `Bearer ${apiToken()}`
        }),
        body: JSON.stringify(data)
    };

    return fetch(`${baseUrlApi}/mithra/v1/template`, options);
}

// Mostra overlay para chamadas ajax.
const ShowOverlay = () => {
    var over = '<div id="overlay"><div class="loader"></div></div>';
    $(over).appendTo('body');
}

// Esconde overlay.
const HideOverlay = () => {
    $('#overlay').remove();
}

const currentDate = () => {
    let today = new Date().toISOString().slice(0, 10);
    return today.replaceAll('-', '');
}

const errorAlert = (title, message) => {
    $.confirm({
        title: title,
        content: message,
        type: 'red',
        typeAnimated: true,
        buttons: {
            ok: {
                text: 'Ok',
                btnClass: 'btn-red',
                action: function () {
                }
            }
        }
    });
}

const validaCNPJ = (cnpj) => {
 
    cnpj = cnpj.replace(/[^\d]+/g,'');
 
    if(cnpj == '') return false;
     
    if (cnpj.length != 14)
        return false;
 
    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" || 
        cnpj == "11111111111111" || 
        cnpj == "22222222222222" || 
        cnpj == "33333333333333" || 
        cnpj == "44444444444444" || 
        cnpj == "55555555555555" || 
        cnpj == "66666666666666" || 
        cnpj == "77777777777777" || 
        cnpj == "88888888888888" || 
        cnpj == "99999999999999")
        return false;
         
    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0,tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;
         
    tamanho = tamanho + 1;
    numeros = cnpj.substring(0,tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
      soma += numeros.charAt(tamanho - i) * pos--;
      if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
          return false;
           
    return true;
}

const validaCPF = (cpf) => {
    var Soma = 0
    var Resto

    var strCPF = String(cpf).replace(/[^d]/g, '')

    if (strCPF.length !== 11)
        return false

    if ([
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999',
    ].indexOf(strCPF) !== -1)
        return false

    for (i = 1; i <= 9; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(9, 10)))
        return false

    Soma = 0

    for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

    Resto = (Soma * 10) % 11

    if ((Resto == 10) || (Resto == 11))
        Resto = 0

    if (Resto != parseInt(strCPF.substring(10, 11)))
        return false

    return true
}

Number.prototype.toLocalCurrency = function () {
    return this.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });
}

HTMLCollection.prototype.last = function () {
    return this[this.length - 1];
}