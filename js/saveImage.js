document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('profile-image-upload');
    const imagePreview = document.getElementById('profile-image-preview');
    const uploadArea = document.querySelector('.upload-area');
    const removeImageButton = document.getElementById('remove-image');

    // Carregar imagem salva ao iniciar a página
    loadSavedImage();

    // Função para lidar com o upload da imagem
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                // Salvar a imagem no localStorage
                localStorage.setItem('profileImage', imageData);
                // Atualizar a visualização da imagem
                updateImagePreview(imageData);
            };
            reader.readAsDataURL(file);
        }
    }

    // Função para atualizar a visualização da imagem
    function updateImagePreview(imageData) {
        imagePreview.src = imageData;
        imagePreview.style.display = 'block';
        uploadArea.style.display = 'none';
        removeImageButton.style.display = 'block';
    }

    // Função para carregar a imagem salva
    function loadSavedImage() {
        const savedImage = localStorage.getItem('profileImage');
        if (savedImage) {
            updateImagePreview(savedImage);
        }
    }

    // Função para remover a imagem
    function removeImage() {
        localStorage.removeItem('profileImage');
        imagePreview.src = '#';
        imagePreview.style.display = 'none';
        uploadArea.style.display = 'block';
        removeImageButton.style.display = 'none';
    }

    // Adicionar evento de mudança ao input de arquivo
    if (imageUpload) {
        imageUpload.addEventListener('change', handleImageUpload);
    }

    // Adicionar evento para o botão de remover imagem
    if (removeImageButton) {
        removeImageButton.addEventListener('click', removeImage);
    }
});
