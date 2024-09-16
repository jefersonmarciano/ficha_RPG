document.addEventListener('DOMContentLoaded', function() {
    const statusItems = ['hp', 'mana', 'stamina'];

    statusItems.forEach(item => {
        const maxInput = document.querySelector(`input[name="${item}-max"]`);
        const currentInput = document.querySelector(`input[name="${item}-current"]`);
        const percentInput = document.querySelector(`input[name="${item}-percent"]`);

        function updatePercent() {
            const max = parseFloat(maxInput.value) || 0;
            const current = parseFloat(currentInput.value) || 0;
            
            if (max > 0) {
                const percent = Math.round((current / max) * 100);
                percentInput.value = percent;
            } else {
                percentInput.value = 0;
            }
        }

        maxInput.addEventListener('input', updatePercent);
        currentInput.addEventListener('input', updatePercent);

        // Inicializar os valores
        updatePercent();
    });
});


// perfil
document.getElementById('profile-image-upload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        const img = document.getElementById('profile-image-preview');
        img.src = e.target.result;
        img.style.display = 'block';
    }
    
    reader.readAsDataURL(file);
});