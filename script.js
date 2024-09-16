document.addEventListener('DOMContentLoaded', function() {
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
});

// mudar cor de fundo
document.addEventListener('DOMContentLoaded', function() {
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
    });
});