

function acessar(){

    let email = document.getElementById('email');
    let senha = document.getElementById('password');

    let listaUser = [];

    let userValid = {
        email: '',
        senha: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'));
    console.log(listaUser);
    
    listaUser.forEach(element => {
        if(email.value === element.emailUser && senha.value === element.senhaUser){
            userValid = {
                nome: element.nomeUser,
                email: element.emailUser,
                senha: element.senhaUser
            }
        }
    });

    if(email.value == userValid.email && senha.value == userValid.senha){
        window.location.href="../dashboard/dashboard.html";

        let token = Math.random().toString(14).substring(2) + Math.random().toString(14).substring(2);
        localStorage.setItem('token', token);

        localStorage.setItem('userLoagado', userValid);
    }else{
        console.log('Email ou senha incorretos');
    }
};



