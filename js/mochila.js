document.addEventListener('DOMContentLoaded', function() {
    var botao = document.getElementById("mostrarTabela");
    var popup = document.getElementById("tabelaPopup");
    var fechar = document.getElementsByClassName("fechar")[0];
    var adicionarItem = document.getElementById("adicionarItem");
    var tabela = document.getElementById("tabelaItens");

    botao.onclick = function() {
        popup.style.display = "block";
        carregarItensMochila();
    }

    fechar.onclick = function() {
        popup.style.display = "none";
        salvarItensMochila();
    }

    window.onclick = function(event) {
        if (event.target == popup) {
            popup.style.display = "none";
            salvarItensMochila();
        }
    }

    adicionarItem.onclick = function() {
        adicionarNovoItem("Novo Item", "1", "Descrição do novo item");
        salvarItensMochila();
    }

    function adicionarNovoItem(nome, quantidade, descricao) {
        var novaLinha = tabela.insertRow(-1);
        var celula1 = novaLinha.insertCell(0);
        var celula2 = novaLinha.insertCell(1);
        var celula3 = novaLinha.insertCell(2);
        var celula4 = novaLinha.insertCell(3);
        celula1.innerHTML = `<input type="text" value="${nome}">`;
        celula2.innerHTML = `<input type="text" value="${quantidade}">`;
        celula3.innerHTML = `<input type="text" value="${descricao}">`;
        celula4.innerHTML = '<span class="remover-item">X</span>';
        adicionarEventoRemover(celula4.firstChild);
    }

    function adicionarEventoRemover(elemento) {
        elemento.onclick = function() {
            var linha = this.parentNode.parentNode;
            linha.parentNode.removeChild(linha);
            salvarItensMochila();
        }
    }

    function salvarItensMochila() {
        var itens = [];
        var linhas = tabela.getElementsByTagName("tr");
        for (var i = 1; i < linhas.length; i++) { // Começa em 1 para pular o cabeçalho
            var celulas = linhas[i].getElementsByTagName("td");
            var item = {
                nome: celulas[0].getElementsByTagName("input")[0].value,
                quantidade: celulas[1].getElementsByTagName("input")[0].value,
                descricao: celulas[2].getElementsByTagName("input")[0].value
            };
            itens.push(item);
        }
        localStorage.setItem('itensMochila', JSON.stringify(itens));
    }

    function carregarItensMochila() {
        var itensString = localStorage.getItem('itensMochila');
        if (itensString) {
            var itens = JSON.parse(itensString);
            // Limpa a tabela antes de carregar os itens
            while (tabela.rows.length > 1) {
                tabela.deleteRow(1);
            }
            itens.forEach(function(item) {
                adicionarNovoItem(item.nome, item.quantidade, item.descricao);
            });
        }
    }

    // Adiciona eventos de remover para itens existentes
    var botoesRemover = document.getElementsByClassName("remover-item");
    for (var i = 0; i < botoesRemover.length; i++) {
        adicionarEventoRemover(botoesRemover[i]);
    }

    // Carrega os itens da mochila ao iniciar a página
    carregarItensMochila();
});