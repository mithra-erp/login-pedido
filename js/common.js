const xClientId = 'NDM5ODY1ODQwMDAxMjk=';

const search = async (search) => {
    
    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId
        }),
        body: JSON.stringify(search)
    };

    return fetch('https://api.mithra.com.br/mithra/v1/search', options);
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