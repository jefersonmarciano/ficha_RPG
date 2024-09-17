document.addEventListener('DOMContentLoaded', function() {
    const imageUpload = document.getElementById('profile-image-upload');
    const imagePreview = document.getElementById('profile-image-preview');
    const uploadArea = document.querySelector('.upload-area');
    const changeImageButton = document.getElementById('change-image');

    // Função para lidar com o upload da imagem
    function handleImageUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const imageData = e.target.result;
                // Salvar a imagem no cache
                caches.open('profile-image-cache').then(function(cache) {
                    cache.put('profileImage', new Response(imageData));
                });
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
        changeImageButton.style.display = 'block';
    }

    // Adicionar evento de mudança ao input de arquivo
    if (imageUpload) {
        imageUpload.addEventListener('change', handleImageUpload);
    }

    // Carregar a imagem salva ao iniciar a página
    function loadSavedImage() {
        caches.open('profile-image-cache').then(function(cache) {
            cache.match('profileImage').then(function(response) {
                if (response) {
                    response.blob().then(function(blob) {
                        const reader = new FileReader();
                        reader.onload = function(e) {
                            updateImagePreview(e.target.result);
                        };
                        reader.readAsDataURL(blob);
                    });
                }
            });
        });
    }

    // Chamar a função para carregar a imagem salva
    loadSavedImage();

    // Adicionar evento para o botão de trocar imagem
    if (changeImageButton) {
        changeImageButton.addEventListener('click', function() {
            imageUpload.click();
        });
    }
});
