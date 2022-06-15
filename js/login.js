

const validaUsuario = (event) => {
    event.preventDefault();
    let login = document.querySelector('#usuario-login');
    let senha = document.querySelector('#usuario-senha');

    let usuario = {
        usuario: login.value,
        senha: senha.value,
    }
    localStorage.setItem('usuario', JSON.stringify(usuario));
    window.location.href="/pedido.html"
    
}
