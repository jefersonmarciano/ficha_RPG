document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById("mostrarTabela");
    var popup = document.getElementById("tabelaPopup");
    var fechar = document.getElementsByClassName("fechar")[0];
    var adicionarItem = document.getElementById("adicionarItem");
    var tabela = document.getElementById("tabelaItens");

    botao.onclick = function() {
        popup.style.display = "block";
    }

    fechar.onclick = function() {
        popup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
        }
    }

    adicionarItem.onclick = function() {
        var novaLinha = tabela.insertRow(-1);
        var celula1 = novaLinha.insertCell(0);
        var celula2 = novaLinha.insertCell(1);
        var celula3 = novaLinha.insertCell(2);
        var celula4 = novaLinha.insertCell(3);
        celula1.innerHTML = '<input type="text" value="Novo Item">';
        celula2.innerHTML = '<input type="text" value="1">';
        celula3.innerHTML = '<input type="text" value="Descrição do novo item">';
        celula4.innerHTML = '<span class="remover-item">X</span>';
        adicionarEventoRemover(celula4.firstChild);
    }

    function adicionarEventoRemover(elemento) {
        elemento.onclick = function() {
            var linha = this.parentNode.parentNode;
            linha.parentNode.removeChild(linha);
        }
    }

    var botoesRemover = document.getElementsByClassName("remover-item");
    for (var i = 0; i < botoesRemover.length; i++) {
        adicionarEventoRemover(botoesRemover[i]);
    }
});