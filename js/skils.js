document.addEventListener('DOMContentLoaded', function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"][name="magic-check[]"]');
    
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('tr');
            if (this.checked) {
                const skillData = {
                    type: row.querySelector('input[name="magic-type[]"]').value,
                    name: row.querySelector('input[name="magic-name[]"]').value,
                    action: row.querySelector('input[name="magic-action[]"]').value,
                    resource: row.querySelector('input[name="magic-resource[]"]').value,
                    duration: row.querySelector('input[name="magic-duration[]"]').value,
                    effect1: row.querySelector('input[name="magic-effect1[]"]').value,
                    effect2: row.querySelector('input[name="magic-effect2[]"]').value,
                    range: row.querySelector('input[name="magic-range[]"]').value,
                    mp: row.querySelector('input[name="magic-mp[]"]')?.value || '',
                    sp: row.querySelector('input[name="magic-sp[]"]')?.value || ''
                };
                
                window.parent.postMessage({
                    type: 'addCycle1Skill',
                    data: skillData
                }, '*');
            }
        });
    });
});
