document.addEventListener('DOMContentLoaded', function() {
    // Funções existentes
    const raceSelect = document.getElementById('race');
    const owlinElementGroup = document.getElementById('owlin-element-group');
    const elementSelect = document.getElementById('element');

    function atualizarElementoOwlin() {
        if (raceSelect.value === 'owlin') {
            owlinElementGroup.style.display = 'block';
            elementSelect.style.display = 'block';
        } else {
            owlinElementGroup.style.display = 'none';
            elementSelect.style.display = 'block';
        }
    }

    raceSelect.addEventListener('change', atualizarElementoOwlin);
    atualizarElementoOwlin();

    // Função para mudar cor de fundo
    const botaoMudarCor = document.getElementById('mudarCorFundo');
    let corFundoBranca = true;
    
    botaoMudarCor.addEventListener('click', function() {
        if (corFundoBranca) {
            document.body.style.backgroundColor = "#000000";
            corFundoBranca = false;
        } else {
            document.body.style.backgroundColor = "#FFFFFF";
            corFundoBranca = true;
        }
        localStorage.setItem('corFundo', corFundoBranca ? 'branco' : 'preto');
    });

    // Funções para salvar e carregar ficha
    function salvarFicha() {
        const ficha = {
            playerName: document.getElementById('player-name').value,
            characterName: document.getElementById('character-name').value,
            class: document.getElementById('class').value,
            race: document.getElementById('race').value,
            element: document.getElementById('element').value,
            owlinElement: document.getElementById('owlin-element').value,
            level: document.getElementById('level').value,
            // Adicione mais campos conforme necessário
        };

        localStorage.setItem('fichaRPG', JSON.stringify(ficha));
        alert('Ficha salva com sucesso!');
    }

    function carregarFicha() {
        const fichaString = localStorage.getItem('fichaRPG');
        if (fichaString) {
            const ficha = JSON.parse(fichaString);
            document.getElementById('player-name').value = ficha.playerName || '';
            document.getElementById('character-name').value = ficha.characterName || '';
            document.getElementById('class').value = ficha.class || '';
            document.getElementById('race').value = ficha.race || '';
            document.getElementById('element').value = ficha.element || '';
            document.getElementById('owlin-element').value = ficha.owlinElement || '';
            document.getElementById('level').value = ficha.level || '';
            // Atualize mais campos conforme necessário
            atualizarElementoOwlin(); // Atualiza a visibilidade do elemento Owlin
            console.log('Ficha carregada com sucesso!');
        } else {
            console.log('Nenhuma ficha salva encontrada.');
        }
    }

    // Adicionar event listeners aos botões
    const saveButton = document.getElementById('saveButton');
    const loadButton = document.getElementById('loadButton');

    if (saveButton) {
        saveButton.addEventListener('click', salvarFicha);
    }

    if (loadButton) {
        loadButton.addEventListener('click', carregarFicha);
    }

    // Carregar ficha automaticamente ao abrir a página
    carregarFicha();

    // Carregar cor de fundo salva
    const corSalva = localStorage.getItem('corFundo');
    if (corSalva === 'preto') {
        document.body.style.backgroundColor = "#000000";
        corFundoBranca = false;
    } else {
        document.body.style.backgroundColor = "#FFFFFF";
        corFundoBranca = true;
    }
});