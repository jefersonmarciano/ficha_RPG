// Funcionalidade das abas
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabId = button.getAttribute('data-tab');
        
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        button.classList.add('active');
        document.getElementById(tabId).classList.add('active');
    });
});

// Atualização dos valores dos atributos
const attributeSliders = document.querySelectorAll('input[type="range"]');
attributeSliders.forEach(slider => {
    slider.addEventListener('input', (e) => {
        e.target.nextElementSibling.textContent = e.target.value;
    });
});

// Funções para adicionar linhas nas tabelas
function addTableRow(tableId, fields) {
    const table = document.getElementById(tableId);
    const newRow = table.insertRow();
    
    fields.forEach(field => {
        const cell = newRow.insertCell();
        const input = document.createElement('input');
        input.type = 'text';
        input.name = field;
        cell.appendChild(input);
    });

    const actionsCell = newRow.insertCell();
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.onclick = function() {
        table.deleteRow(newRow.rowIndex);
    };
    actionsCell.appendChild(deleteButton);
}

// Adicionar arma
document.getElementById('add-weapon').addEventListener('click', () => {
    addTableRow('weapons-table', ['type', 'generation', 'attack', 'magicCast']);
});

// Adicionar armadura
document.getElementById('add-armor').addEventListener('click', () => {
    addTableRow('armors-table', ['generation', 'ca', 'move', 'element']);
});

// Adicionar habilidade de Ciclo 1
document.getElementById('add-cycle1').addEventListener('click', () => {
    addTableRow('cycle1-table', ['type', 'name', 'action', 'resource', 'duration', 'effect1', 'effect2', 'range', 'mp', 'sp']);
});

// Adicionar habilidade de Ciclo 2
document.getElementById('add-cycle2').addEventListener('click', () => {
    addTableRow('cycle2-table', ['type', 'name', 'action', 'resource', 'duration', 'effect1', 'effect2', 'range', 'mp', 'sp']);
});

// Função para salvar os dados
function saveCharacterSheet() {
    const characterData = {
        name: document.getElementById('name').value,
        class: document.getElementById('class').value,
        race: document.getElementById('race').value,
        level: document.getElementById('level').value,
        hp: document.getElementById('hp').value,
        stamina: document.getElementById('stamina').value,
        mana: document.getElementById('mana').value,
        attributes: {
            agility: document.getElementById('agility').value,
            constitution: document.getElementById('constitution').value,
            strength: document.getElementById('strength').value,
            intellect: document.getElementById('intellect').value,
            wisdom: document.getElementById('wisdom').value,
            presence: document.getElementById('presence').value
        },
        skills: {
            athletics: document.getElementById('athletics').value,
            sleightOfHand: document.getElementById('sleightOfHand').value,
            fighting: document.getElementById('fighting').value,
            shooting: document.getElementById('shooting').value,
            magicCast: document.getElementById('magicCast').value,
            reflexes: document.getElementById('reflexes').value,
            manaSense: document.getElementById('manaSense').value,
            fortitude: document.getElementById('fortitude').value,
            willpower: document.getElementById('willpower').value,
            survival: document.getElementById('survival').value,
            persuasion: document.getElementById('persuasion').value,
            diplomacy: document.getElementById('diplomacy').value,
            history: document.getElementById('history').value,
            arcana: document.getElementById('arcana').value,
            insight: document.getElementById('insight').value,
            perception: document.getElementById('perception').value,
            stealth: document.getElementById('stealth').value,
            loot: document.getElementById('loot').value,
            medicine: document.getElementById('medicine').value,
            concentration: document.getElementById('concentration').value
        },
        weapons: Array.from(document.getElementById('weapons-table').rows).slice(1).map(row => ({
            type: row.cells[0].querySelector('input').value,
            generation: row.cells[1].querySelector('input').value,
            attack: row.cells[2].querySelector('input').value,
            magicCast: row.cells[3].querySelector('input').value
        })),
        armors: Array.from(document.getElementById('armors-table').rows).slice(1).map(row => ({
            generation: row.cells[0].querySelector('input').value,
            ca: row.cells[1].querySelector('input').value,
            move: row.cells[2].querySelector('input').value,
            element: row.cells[3].querySelector('input').value
        })),
        cycle1Skills: Array.from(document.getElementById('cycle1-table').rows).slice(1).map(row => ({
            type: row.cells[0].querySelector('input').value,
            name: row.cells[1].querySelector('input').value,
            action: row.cells[2].querySelector('input').value,
            resource: row.cells[3].querySelector('input').value,
            duration: row.cells[4].querySelector('input').value,
            effect1: row.cells[5].querySelector('input').value,
            effect2: row.cells[6].querySelector('input').value,
            range: row.cells[7].querySelector('input').value,
            mp: row.cells[8].querySelector('input').value,
            sp: row.cells[9].querySelector('input').value
        })),
        cycle2Skills: Array.from(document.getElementById('cycle2-table').rows).slice(1).map(row => ({
            type: row.cells[0].querySelector('input').value,
            name: row.cells[1].querySelector('input').value,
            action: row.cells[2].querySelector('input').value,
            resource: row.cells[3].querySelector('input').value,
            duration: row.cells[4].querySelector('input').value,
            effect1: row.cells[5].querySelector('input').value,
            effect2: row.cells[6].querySelector('input').value,
            range: row.cells[7].querySelector('input').value,
            mp: row.cells[8].querySelector('input').value,
            sp: row.cells[9].querySelector('input').value
        }))
    };
    localStorage.setItem('characterSheet', JSON.stringify(characterData));
    alert('Ficha salva com sucesso!');
}

// Função para carregar os dados
function loadCharacterSheet() {
    const savedData = localStorage.getItem('characterSheet');
    if (savedData) {
        const characterData = JSON.parse(savedData);
        document.getElementById('name').value = characterData.name;
        document.getElementById('class').value = characterData.class;
        document.getElementById('race').value = characterData.race;
        document.getElementById('level').value = characterData.level;
        document.getElementById('hp').value = characterData.hp;
        document.getElementById('stamina').value = characterData.stamina;
        document.getElementById('mana').value = characterData.mana;

        // Carregar atributos
        for (const [attr, value] of Object.entries(characterData.attributes)) {
            const slider = document.getElementById(attr);
            slider.value = value;
            slider.nextElementSibling.textContent = value;
        }

        // Carregar perícias
        for (const [skill, value] of Object.entries(characterData.skills)) {
            document.getElementById(skill).value = value;
        }

        // Carregar armas
        const weaponsTable = document.getElementById('weapons-table');
        weaponsTable.innerHTML = '<tr><th>Tipo</th><th>Geração</th><th>Ataque</th><th>Magia Cast</th><th>Ações</th></tr>';
        characterData.weapons.forEach(weapon => {
            addTableRow('weapons-table', ['type', 'generation', 'attack', 'magicCast']);
            const newRow = weaponsTable.rows[weaponsTable.rows.length - 1];
            newRow.cells[0].querySelector('input').value = weapon.type;
            newRow.cells[1].querySelector('input').value = weapon.generation;
            newRow.cells[2].querySelector('input').value = weapon.attack;
            newRow.cells[3].querySelector('input').value = weapon.magicCast;
        });

        // Carregar armaduras
        const armorsTable = document.getElementById('armors-table');
        armorsTable.innerHTML = '<tr><th>Geração</th><th>CA</th><th>Move</th><th>Elemento</th><th>Ações</th></tr>';
        characterData.armors.forEach(armor => {
            addTableRow('armors-table', ['generation', 'ca', 'move', 'element']);
            const newRow = armorsTable.rows[armorsTable.rows.length - 1];
            newRow.cells[0].querySelector('input').value = armor.generation;
            newRow.cells[1].querySelector('input').value = armor.ca;
            newRow.cells[2].querySelector('input').value = armor.move;
            newRow.cells[3].querySelector('input').value = armor.element;
        });

        // Carregar habilidades de Ciclo 1
        const cycle1Table = document.getElementById('cycle1-table');
        cycle1Table.innerHTML = '<tr><th>Tipo</th><th>Magia/Habilidade</th><th>Ação</th><th>Recurso</th><th>Duração</th><th>Efeito 1</th><th>Efeito 2</th><th>Alcance</th><th>MP</th><th>SP</th><th>Ações</th></tr>';
        characterData.cycle1Skills.forEach(skill => {
            addTableRow('cycle1-table', ['type', 'name', 'action', 'resource', 'duration', 'effect1', 'effect2', 'range', 'mp', 'sp']);
            const newRow = cycle1Table.rows[cycle1Table.rows.length - 1];
            newRow.cells[0].querySelector('input').value = skill.type;
            newRow.cells[1].querySelector('input').value = skill.name;
            newRow.cells[2].querySelector('input').value = skill.action;
            newRow.cells[3].querySelector('input').value = skill.resource;
            newRow.cells[4].querySelector('input').value = skill.duration;
            newRow.cells[5].querySelector('input').value = skill.effect1;
            newRow.cells[6].querySelector('input').value = skill.effect2;
            newRow.cells[7].querySelector('input').value = skill.range;
            newRow.cells[8].querySelector('input').value = skill.mp;
            newRow.cells[9].querySelector('input').value = skill.sp;
        });

        // Carregar habilidades de Ciclo 2
        const cycle2Table = document.getElementById('cycle2-table');
        cycle2Table.innerHTML = '<tr><th>Tipo</th><th>Magia/Habilidade</th><th>Ação</th><th>Recurso</th><th>Duração</th><th>Efeito 1</th><th>Efeito 2</th><th>Alcance</th><th>MP</th><th>SP</th><th>Ações</th></tr>';
        characterData.cycle2Skills.forEach(skill => {
            addTableRow('cycle2-table', ['type', 'name', 'action', 'resource', 'duration', 'effect1', 'effect2', 'range', 'mp', 'sp']);
            const newRow = cycle2Table.rows[cycle2Table.rows.length - 1];
            newRow.cells[0].querySelector('input').value = skill.type;
            newRow.cells[1].querySelector('input').value = skill.name;
            newRow.cells[2].querySelector('input').value = skill.action;
            newRow.cells[3].querySelector('input').value = skill.resource;
            newRow.cells[4].querySelector('input').value = skill.duration;
            newRow.cells[5].querySelector('input').value = skill.effect1;
            newRow.cells[6].querySelector('input').value = skill.effect2;
            newRow.cells[7].querySelector('input').value = skill.range;
            newRow.cells[8].querySelector('input').value = skill.mp;
            newRow.cells[9].querySelector('input').value = skill.sp;
        });

        alert('Ficha carregada com sucesso!');
    } else {
        alert('Nenhuma ficha salva encontrada.');
    }
}

// Adicionar event listeners para os botões de salvar e carregar
document.getElementById('saveButton').addEventListener('click', saveCharacterSheet);
document.getElementById('loadButton').addEventListener('click', loadCharacterSheet);