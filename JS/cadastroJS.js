// Pagina JS da pagina cadastro.html .............
//Ana Letícia Lopes Moreira    RA:2018013951


//compara se as senhas digitadas são diferentes e alerta se estiverem erradas ou se o campo estiver vazio.
function checkForm() {
    var password = document.getElementById("password").value;
    var passwordCheck = document.getElementById("passwordCheck").value;

    if (password != passwordCheck) {
        alert("Senhas diferentes, por favor confira sua senha!");
        return false;
    } else if (password == '' || passwordCheck == '') {
        alert("Por favor preencha os campos de senha e confirme a senha!");
        return false;
    } else {
        document.getElementById("registro").submit();
        return true;
    }
};