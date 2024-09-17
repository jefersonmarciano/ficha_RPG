document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('skils.html')) {
        // Código para skils.html
        loadSavedSelections();
        addCheckboxListeners();
    } else if (window.location.pathname.includes('index.html')) {
        // Código para index.html
        loadSavedSkillsToIndex();
    }
});

function addCheckboxListeners() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic-check[]"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateSkillSelection(this);
        });
    });
}

function updateSkillSelection(checkbox) {
    const row = checkbox.closest('tr');
    const skillData = {
        intReq: row.querySelector('input[name="magic-int-req[]"]').value,
        type: row.querySelector('input[name="magic-type[]"]').value,
        name: row.querySelector('input[name="magic-name[]"]').value,
        action: row.querySelector('input[name="magic-action[]"]').value,
        resource: row.querySelector('input[name="magic-resource[]"]').value,
        duration: row.querySelector('input[name="magic-duration[]"]').value,
        effect1: row.querySelector('input[name="magic-effect1[]"]').value,
        effect2: row.querySelector('input[name="magic-effect2[]"]').value,
        range: row.querySelector('input[name="magic-range[]"]').value,
        description: row.querySelector('textarea[name="magic-description[]"]').value
    };

    if (checkbox.checked) {
        addSkillToSelection(skillData);
    } else {
        removeSkillFromSelection(skillData.name);
    }

    saveSelections();
}

function addSkillToSelection(skillData) {
    let selectedSkills = JSON.parse(localStorage.getItem('selectedCycle1Skills')) || [];
    // Verifica se a habilidade já existe antes de adicionar
    if (!selectedSkills.some(skill => skill.name === skillData.name)) {
        selectedSkills.push(skillData);
        localStorage.setItem('selectedCycle1Skills', JSON.stringify(selectedSkills));
    }
}

function removeSkillFromSelection(skillName) {
    let selectedSkills = JSON.parse(localStorage.getItem('selectedCycle1Skills')) || [];
    selectedSkills = selectedSkills.filter(skill => skill.name !== skillName);
    localStorage.setItem('selectedCycle1Skills', JSON.stringify(selectedSkills));
}

function saveSelections() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic-check[]"]');
    const selections = Array.from(checkboxes).map(checkbox => ({
        id: checkbox.closest('tr').id,
        checked: checkbox.checked
    }));
    localStorage.setItem('cycle1Selections', JSON.stringify(selections));
}

function loadSavedSelections() {
    const savedSelections = JSON.parse(localStorage.getItem('cycle1Selections')) || [];
    savedSelections.forEach(selection => {
        const checkbox = document.querySelector(`#${selection.id} input[type="checkbox"][name="magic-check[]"]`);
        if (checkbox) {
            checkbox.checked = selection.checked;
            if (selection.checked) {
                updateSkillSelection(checkbox);
            }
        }
    });
}

function loadSavedSkillsToIndex() {
    // Adiciona o arquivo CSS dinamicamente
    if (!document.getElementById('cycle1-abilities-css')) {
        const link = document.createElement('link');
        link.id = 'cycle1-abilities-css';
        link.rel = 'stylesheet';
        link.href = './css/cycle1-abilities.css';
        document.head.appendChild(link);
    }

    const savedSkills = JSON.parse(localStorage.getItem('selectedCycle1Skills')) || [];
    const tableBody = document.getElementById('cycle1-abilities-grid');
    if (!tableBody) return;

    tableBody.innerHTML = ''; // Limpa o conteúdo existente

    savedSkills.forEach(skill => {
        const newRow = document.createElement('div');
        newRow.className = 'ability-row';
        newRow.innerHTML = `
            <div class="ability-item">
                <strong>${skill.name}</strong>
                <span>(${skill.type})</span>
                <span>Ação: ${skill.action}</span>
                <span>Custo: ${skill.resource}</span>
                <span>Efeito 1: ${skill.effect1}</span>
                <span>Efeito 2: ${skill.effect2}</span>
                <span>Alcance: ${skill.range}</span>
            </div>
        `;
        tableBody.appendChild(newRow);
    });
}
