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

            // Status
            hpMax: document.querySelector('input[name="hp-max"]').value,
            hpCurrent: document.querySelector('input[name="hp-current"]').value,
            manaMax: document.querySelector('input[name="mana-max"]').value,
            manaCurrent: document.querySelector('input[name="mana-current"]').value,
            staminaMax: document.querySelector('input[name="stamina-max"]').value,
            staminaCurrent: document.querySelector('input[name="stamina-current"]').value,

            // Atributos
            atributos: {
                agility: {
                    base: document.getElementById('agility-base').value,
                    score: document.getElementById('agility-score').value,
                    mod: document.getElementById('agility-mod').value
                },
                constitution: {
                    base: document.getElementById('constitution-base').value,
                    score: document.getElementById('constitution-score').value,
                    mod: document.getElementById('constitution-mod').value
                },
                strength: {
                    base: document.getElementById('strength-base').value,
                    score: document.getElementById('strength-score').value,
                    mod: document.getElementById('strength-mod').value
                },
                intellect: {
                    base: document.getElementById('intellect-base').value,
                    score: document.getElementById('intellect-score').value,
                    mod: document.getElementById('intellect-mod').value
                },
                wisdom: {
                    base: document.getElementById('wisdom-base').value,
                    score: document.getElementById('wisdom-score').value,
                    mod: document.getElementById('wisdom-mod').value
                },
                presence: {
                    base: document.getElementById('presence-base').value,
                    score: document.getElementById('presence-score').value,
                    mod: document.getElementById('presence-mod').value
                }
            },

            // Perícias
            pericias: Array.from(document.querySelectorAll('#skills-table tbody tr')).map(row => ({
                nome: row.cells[0].textContent,
                roll: row.querySelector('input[name$="-roll"]').value,
                attributes: row.querySelector('input[name$="-attributes"]').value,
                training: row.querySelector('input[name$="-training"]').value,
                others: row.querySelector('input[name$="-others"]').value
            })),

            // Armas
            armas: Array.from(document.querySelectorAll('.weapons-grid')).map(weapon => ({
                tipo: weapon.querySelector('input[name="weapon-type[]"]').value,
                geracao: weapon.querySelector('input[name="weapon-generation[]"]').value,
                elemento: weapon.querySelector('select[name="weapon-element[]"]').value,
                dano: weapon.querySelector('input[name="weapon-damage[]"]').value,
                def: weapon.querySelector('input[name="weapon-def[]"]').value,
                move: weapon.querySelector('input[name="weapon-move[]"]').value
            })),

            // Armaduras
            armaduras: Array.from(document.querySelectorAll('.armors-grid')).map(armor => ({
                tipo: armor.querySelector('input[name="armor-type[]"]').value,
                geracao: armor.querySelector('input[name="armor-generation[]"]').value,
                ca: armor.querySelector('input[name="armor-ca[]"]').value,
                move: armor.querySelector('input[name="armor-move[]"]').value,
                elemento: armor.querySelector('select[name="armor-element[]"]').value
            })),
            profileImage: localStorage.getItem('profileImage') || ''
        };

        localStorage.setItem('fichaRPG', JSON.stringify(ficha));
        alert('Ficha salva com sucesso!');
    }

    function carregarFicha() {
        const fichaString = localStorage.getItem('fichaRPG');
        if (fichaString) {
            const ficha = JSON.parse(fichaString);
            
            // Carregar Informações Básicas
            document.getElementById('player-name').value = ficha.playerName || '';
            document.getElementById('character-name').value = ficha.characterName || '';
            document.getElementById('class').value = ficha.class || '';
            document.getElementById('race').value = ficha.race || '';
            document.getElementById('element').value = ficha.element || '';
            document.getElementById('owlin-element').value = ficha.owlinElement || '';
            document.getElementById('level').value = ficha.level || '';

            // Carregar Status
            document.querySelector('input[name="hp-max"]').value = ficha.hpMax || '';
            document.querySelector('input[name="hp-current"]').value = ficha.hpCurrent || '';
            document.querySelector('input[name="mana-max"]').value = ficha.manaMax || '';
            document.querySelector('input[name="mana-current"]').value = ficha.manaCurrent || '';
            document.querySelector('input[name="stamina-max"]').value = ficha.staminaMax || '';
            document.querySelector('input[name="stamina-current"]').value = ficha.staminaCurrent || '';

            // Carregar Atributos
            for (let attr in ficha.atributos) {
                document.getElementById(`${attr}-base`).value = ficha.atributos[attr].base || '';
                document.getElementById(`${attr}-score`).value = ficha.atributos[attr].score || '';
                document.getElementById(`${attr}-mod`).value = ficha.atributos[attr].mod || '';
            }

            // Carregar Perícias
            const skillsTable = document.getElementById('skills-table').getElementsByTagName('tbody')[0];
            ficha.pericias.forEach((pericia, index) => {
                if (skillsTable.rows[index]) {
                    const row = skillsTable.rows[index];
                    row.querySelector('input[name$="-roll"]').value = pericia.roll || '';
                    row.querySelector('input[name$="-attributes"]').value = pericia.attributes || '';
                    row.querySelector('input[name$="-training"]').value = pericia.training || '';
                    row.querySelector('input[name$="-others"]').value = pericia.others || '';
                }
            });

            // Carregar Armas
            const weaponsContainer = document.querySelector('.weapons-container');
            weaponsContainer.innerHTML = ''; // Limpa as armas existentes
            ficha.armas.forEach(arma => {
                const weaponGrid = document.createElement('div');
                weaponGrid.className = 'weapons-grid';
                weaponGrid.innerHTML = `
                    <input type="text" name="weapon-type[]" value="${arma.tipo || ''}">
                    <input type="text" name="weapon-generation[]" value="${arma.geracao || ''}">
                    <select name="weapon-element[]">
                        <option value="${arma.elemento || ''}" selected>${arma.elemento || ''}</option>
                    </select>
                    <input type="text" name="weapon-damage[]" value="${arma.dano || ''}">
                    <input type="text" name="weapon-def[]" value="${arma.def || ''}">
                    <input type="text" name="weapon-move[]" value="${arma.move || ''}">
                `;
                weaponsContainer.appendChild(weaponGrid);
            });

            // Carregar Armaduras
            const armorsContainer = document.querySelector('.armors-container');
            armorsContainer.innerHTML = ''; // Limpa as armaduras existentes
            ficha.armaduras.forEach(armadura => {
                const armorGrid = document.createElement('div');
                armorGrid.className = 'armors-grid';
                armorGrid.innerHTML = `
                    <input type="text" name="armor-type[]" value="${armadura.tipo || ''}">
                    <input type="text" name="armor-generation[]" value="${armadura.geracao || ''}">
                    <input type="text" name="armor-ca[]" value="${armadura.ca || ''}">
                    <input type="text" name="armor-move[]" value="${armadura.move || ''}">
                    <select name="armor-element[]">
                        <option value="${armadura.elemento || ''}" selected>${armadura.elemento || ''}</option>
                    </select>
                `;
                armorsContainer.appendChild(armorGrid);
            });

            atualizarElementoOwlin();
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

function handleImageUpload(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const imagePreview = document.getElementById('profile-image-preview');
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
        document.querySelector('.upload-area').style.display = 'none';
        document.getElementById('change-image').style.display = 'block';
        
        // Salvar a imagem em base64 no localStorage
        localStorage.setItem('profileImage', e.target.result);
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // ... código existente ...

    const imageUpload = document.getElementById('profile-image-upload');
    if (imageUpload) {
        imageUpload.addEventListener('change', handleImageUpload);
    }

    // ... resto do código ...
});