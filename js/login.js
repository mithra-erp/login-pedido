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
            console.log(json);

            navigator.serviceWorker.ready.then(function (serviceWorkerRegistration) {
                // Let's see if you have a subscription already
                return serviceWorkerRegistration.pushManager.getSubscription();
            }).then((subscription) => {
                if (!subscription) {
                    // You do not have subscription
                }

                navigator.serviceWorker.controller.postMessage({
                    type: 'SET_TOKEN',
                    token: json.access_token
                })
                window.location.href = "pedido.html";
            })
        }
    })
}
