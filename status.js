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
document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('profile-image-upload');
    const imagePreview = document.getElementById('profile-image-preview');
    const uploadArea = document.querySelector('.upload-area');

    const changeImageBtn = document.getElementById('change-image');

    imageUpload.addEventListener('change', function(event) {
        const file = event.target.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            uploadArea.style.display = 'none'; // Oculta a área de upload
            changeImageBtn.style.display = 'block';
        }
        
        reader.readAsDataURL(file);
    });

    changeImageBtn.addEventListener('click', function() {
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'flex';
        changeImageBtn.style.display = 'none';
        imageUpload.value = ''; // Limpa o input de arquivo
    });
});