function helloworld() {
    var inputs = document.getElementsByTagName('input');
    var input = inputs[0];
    var nome = input.value.trim();

    if (nome === '') {
        alert('Informe o seu nome!');
        return;



    }
    console.log('nome: ', nome);
    window.alert('Bem vindo ! ' + nome);
    input.value = '';
}