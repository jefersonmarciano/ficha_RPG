document.addEventListener('DOMContentLoaded', function() {
            const raceSelect = document.getElementById('race');
            const owlinElementGroup = document.getElementById('owlin-element-group');

            raceSelect.addEventListener('change', function() {
                if (this.value === 'owlin') {
                    owlinElementGroup.style.display = 'block';
                } else {
                    owlinElementGroup.style.display = 'none';
                }
            });
        });
        // Funções para adicionar linhas nas tabelas
function adicionarLinha(tabela, campos) {
    const tbody = document.querySelector(`#${tabela} tbody`);
    const novaLinha = document.createElement('tr');
            
    campos.forEach(campo => {
        const td = document.createElement('td');
                const input = document.createElement('input');
        input.type = campo.tipo;
        input.name = campo.nome;
        input.className = 'form-control';
        input.style.width = '100%';
        td.appendChild(input);
        novaLinha.appendChild(td);
    });
    
    // Adicionar botão de remover
    const tdRemover = document.createElement('td');
    const btnRemover = document.createElement('button');
    btnRemover.textContent = 'Remover';
    btnRemover.className = 'btn btn-danger btn-sm';
    btnRemover.onclick = function() {
        tbody.removeChild(novaLinha);
    };
    tdRemover.appendChild(btnRemover);
    novaLinha.appendChild(tdRemover);
    
    tbody.appendChild(novaLinha);
}

// Configuração dos campos para cada tabela
const camposInventario = [
    {nome: 'item', tipo: 'text'},
    {nome: 'quantidade', tipo: 'number'},
    {nome: 'peso', tipo: 'number'}
];

const camposHabilidades = [
    {nome: 'habilidade', tipo: 'text'},
    {nome: 'descricao', tipo: 'text'}
];

const camposMagias = [
    {nome: 'magia', tipo: 'text'},
    {nome: 'nivel', tipo: 'number'},
    {nome: 'descricao', tipo: 'text'}
];

// Event listeners para os botões de adicionar
document.getElementById('adicionarInventario').addEventListener('click', () => adicionarLinha('inventario', camposInventario));
document.getElementById('adicionarHabilidade').addEventListener('click', () => adicionarLinha('habilidades', camposHabilidades));
document.getElementById('adicionarMagia').addEventListener('click', () => adicionarLinha('magias', camposMagias));

// Função para tornar a tabela responsiva
function tornarTabelaResponsiva(tabelaId) {
    const tabela = document.getElementById(tabelaId);
    const linhas = tabela.getElementsByTagName('tr');
    
    for (let i = 0; i < linhas.length; i++) {
        const colunas = linhas[i].getElementsByTagName('td');
        for (let j = 0; j < colunas.length; j++) {
            const conteudo = colunas[j].innerHTML;
            colunas[j].innerHTML = `<div class="td-content">${conteudo}</div>`;
        }
    }
}

// Aplicar responsividade às tabelas
document.addEventListener('DOMContentLoaded', () => {
    ['inventario', 'habilidades', 'magias'].forEach(tornarTabelaResponsiva);
});

// Adicionar swipe para remover em dispositivos móveis
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

document.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe(e.target);
}, false);

function handleSwipe(target) {
    if (touchStartX - touchEndX > 100) { // Swipe para a esquerda
        const linha = target.closest('tr');
        if (linha) {
            linha.parentNode.removeChild(linha);
        }
    }
}

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
