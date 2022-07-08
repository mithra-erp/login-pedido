const xClientId = 'NDM5ODY1ODQwMDAxMjk=';
const baseUrlApi = 'https://api.mithra.com.br'

const search = async (search) => {
    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId
        }),
        body: JSON.stringify(search)
    };

    return fetch(`${baseUrlApi}/mithra/v1/search`, options);
}

const insert = async (data) => {
    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId
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