// Pagina JS da pagina de login.html .............
//Ana Letícia Lopes Moreira    RA:2018013951
//Arthur Lopes Saraiva         RA:2020011060


//compara se o email e senha são iguais aos utilizados emite alerta de login ou erro.
function checkLogin() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (email =='eduardo@unifei.com' && senha == 'senha123') {
        alert('Login realizado com sucesso');
        return true;
        
    } else if (email !='eduardo@unifei.com' && senha != 'senha123') {
        alert("Email e senha invalidos!");
        return false;
    } else if(email =='eduardo@unifei.com' && senha != 'senha123'){
        alert("Senha invalida!");
        return false;
    }else{
        alert("Tivemos algum erro com o seu login, tente novamente");
        return false;
    }
};
