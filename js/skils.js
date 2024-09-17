document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic-check[]"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
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
                
                window.parent.postMessage({
                    type: 'addCycle1Skill',
                    data: skillData
                }, '*');
            } else {
                // Enviar mensagem para remover a habilidade
                window.parent.postMessage({
                    type: 'removeCycle1Skill',
                    data: {
                        name: row.querySelector('input[name="magic-name[]"]').value
                    }
                }, '*');
            }
        });
    });

    // Adicionar evento para o botão de adicionar nova magia
    document.getElementById('add-magic-row').addEventListener('click', function() {
        const tbody = document.querySelector('.magic-table tbody');
        const newRow = tbody.rows[0].cloneNode(true);
        
        // Limpar os valores dos inputs na nova linha
        newRow.querySelectorAll('input, textarea').forEach(input => {
            input.value = '';
            if (input.type === 'checkbox') {
                input.checked = false;
            }
        });
        
        // Adicionar evento de change para o novo checkbox
        newRow.querySelector('input[type="checkbox"]').addEventListener('change', checkboxChangeHandler);
        
        tbody.appendChild(newRow);
    });

    function checkboxChangeHandler() {
        // ... (mesmo código do evento de change dos checkboxes originais)
    }
});
