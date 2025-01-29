//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let amigoInserido =  document.querySelector("input").value //Captura o valor inserido pelo usuário
        if (amigoInserido != "") { //Só adiciona a lista valores não nulos
        amigos.push(amigoInserido); //adiciona a lista 'amigos'
        document.querySelector("input").value = ""; //Limpa o campo
        atualizarLista(); //CHama a função para adicionar os nomes na tela do usuário
        } else {
            alert ("O campo não pode ser vazio");
        }
    }
atualizarLista();
function atualizarLista() { //Adiciona cada nome como um elemento <li>
    let listaAmigos = document.getElementById("listaAmigos"); //Nova variável para armazenar os elementos da lista
    listaAmigos.innerHTML = ""; //Limpa a lista anterior
    amigos.forEach ((amigoInserido) => {
        let li = document.createElement("li"); //Adiciona li para cada elemento
        li.textContent = amigoInserido;
        listaAmigos.appendChild(li); //Junta li aos nomes do campo
    });
}

function sortearAmigo() {
    if (amigos.length > 0) { //Verifica se há elementos na lista
        let nomeSorteado = amigos[Math.floor(Math.random() * amigos.length)]; //Sorteia um nome aleatório na lista de amigos
        document.querySelector("#resultado").textContent = `O amigo sorteado foi ${nomeSorteado}!`;
    } else {
        document.querySelector("#resultado").textContent = "Sem amigos para sortear :(";
    }
}