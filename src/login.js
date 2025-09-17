const validaUsuario = (event) => {
    event.preventDefault();
    let login = document.querySelector('#usuario-login');
    let senha = document.querySelector('#usuario-senha');

    let raw = {
        username: login.value,
        password: senha.value,
    }

    let options = {
        method: 'post',
        headers: new Headers({
            'X-Client-Id': xClientId,
            'Content-Type': 'application/json'
        }),
        body: JSON.stringify(raw)
    };

    ShowOverlay();

    fetch(`${baseUrlApi}/mithra/v1/auth`, options)
        .then(async response => {
            HideOverlay();
            if (response.ok) {
                let json = await response.json();

                sessionStorage.setItem("api_token", json.access_token);

                let data = {
                    area: "VENDED",
                    fields: ["CODIGO", "NOME", "NOMVEN", "ALTVAL"],
                    search: [
                        {
                            field: "USERAPP",
                            operation: "EQUAL_TO",
                            value: login.value
                        }
                    ]
                }

                ShowOverlay();
                search(data)
                    .then(async response => {
                        if (response.ok) {
                            let json = await response.json()
                            if (json.success) {
                                sessionStorage.setItem("user_data", JSON.stringify(json.data[0]));
                            }
                        }
                        window.location.href = "pedido.html";
                    })
                    .then(response => HideOverlay());
                

            } else {
                let json = await response.json();
                alert(json.message);
            }
        })
        .catch(error => {
            alert(error);
            HideOverlay();
        });
}
