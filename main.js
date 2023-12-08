function logar (){
    var usuario = document.getElementById('usuario').value;
    var senha = document.getElementById('senha').value;

    if(usuario == 'admin' && senha == '123456'){
        alert('Sucesso');
        location.href = "https://github.com/elfihr";
    } else{
        alert('Usuario ou senha incorreta')
    }
}