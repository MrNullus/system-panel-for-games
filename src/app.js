function validaLogin() {
    const login = document.getElementById("login").value;
    const senha = document.getElementById("senha").value;

    console.log(login, senha);

    if (login == "admin" && senha == "123456") {
        sessionStorage.setItem("AcessoAprovado", "SIM");
    
        window.location.href = "./panel.html";
    } else {
        alert("Login e senha incorretos!");

        sessionStorage.setItem("AcessoAprovado", "NÃO");
    }

}
 
function sair() {
    let pergunta = confirm("Deseja sair do painel de jogos?");

    if (pergunta) {
        sessionStorage.getItem("AcessoAprovado", "NÃO");
        window.location.href = "./index.html";
    }
}

function validaAcesso() {
    if (sessionStorage.getItem("AcessoAprovado") !== "SIM") {
        alert("Acesso indevido!");
        window.location.href = "index.html";
    }
}