const validaUsuario = (event) => {
    console.log(xClientId)
    event.preventDefault();
    let login = document.querySelector('#usuario-login');
    let senha = document.querySelector('#usuario-senha');

    let raw = {
        username: login.value,
        password: senha.value,
    }
    console.log(JSON.stringify(raw))
    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId
        }),
        body: JSON.stringify(raw)
    };

    fetch(`${baseUrlApi}/mithra/v1/auth`, options).then(async response => {
        if (response.ok) {
            let json = await response.json();


            navigator.serviceWorker.controller.postMessage({
                type: 'SET_TOKEN',
                token: json.access_token
            })
            window.location.href = "pedido.html";
        } else {
            let json = await response.json();
            alert(json.message);
        }
    }).catch(error => alert(error));
}
