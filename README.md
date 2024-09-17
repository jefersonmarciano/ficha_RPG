# Gerenciador de Ficha de Personagem RPG / RPG Character Sheet Manager

## Descrição / Description
[PT-BR] Este projeto é um Gerenciador de Ficha de Personagem RPG baseado na web que permite aos jogadores criar, salvar e gerenciar suas fichas de personagem para um sistema de RPG personalizado. Ele fornece uma interface interativa para inserir detalhes do personagem, gerenciar inventário e acompanhar habilidades e capacidades.

[EN] This project is a web-based RPG Character Sheet Manager that allows players to create, save, and manage their character sheets for a custom RPG system. It provides an interactive interface for inputting character details, managing inventory, and tracking skills and abilities.

## Funcionalidades / Features
- Gerenciamento de Informações do Personagem / Character Information Management
  - Informações básicas (nome, classe, raça, etc.) / Basic info (name, class, race, etc.)
  - Atributos e Perícias / Attributes and Skills
  - Acompanhamento de Saúde, Mana e Stamina / Health, Mana, and Stamina tracking
- Sistema de Inventário / Inventory System
  - Adicionar, remover e editar itens / Add, remove, and edit items
  - Acompanhar quantidades e descrições de itens / Track item quantities and descriptions
- Gerenciamento de Armas e Armaduras / Weapon and Armor Management
  - Adicionar múltiplas armas e peças de armadura / Add multiple weapons and armor pieces
  - Acompanhar dano, defesa e propriedades elementais / Track damage, defense, and elemental properties
- Rastreador de Habilidades e Capacidades / Skill and Ability Tracker
  - Gerenciar habilidades de Ciclo 1 e Ciclo 2 / Manage Cycle 1 and Cycle 2 abilities
  - Acompanhar detalhes das habilidades como tipo, ação, custo de recurso e efeitos / Track ability details like type, action, resource cost, and effects
- Upload de Imagem de Perfil / Profile Image Upload
  - Adicionar e alterar imagens de perfil do personagem / Add and change character profile images
  - Imagens são salvas no armazenamento local para persistência / Images are saved in local storage for persistence
- Persistência de Dados / Data Persistence
  - Salvar e carregar dados do personagem usando o armazenamento local do navegador / Save and load character data using browser's local storage
- Alternância de Tema / Theme Toggle
  - Alternar entre temas claro e escuro / Switch between light and dark themes

## Tecnologias Utilizadas / Technologies Used
- HTML5
- CSS3
- JavaScript (ES6+)
- API de Armazenamento Local para persistência de dados / Local Storage API for data persistence

## Configuração e Uso / Setup and Usage
1. Clone o repositório para sua máquina local. / Clone the repository to your local machine.
2. Abra o arquivo `index.html` em um navegador web moderno. / Open the `index.html` file in a modern web browser.
3. Comece a criar seu personagem preenchendo as várias seções. / Start creating your character by filling in the various sections.
4. Use o botão "Salvar" para armazenar os dados do seu personagem. / Use the "Save" button to store your character data.
5. Use o botão "Carregar" para recuperar dados de personagens previamente salvos. / Use the "Load" button to retrieve previously saved character data.

## Estrutura de Arquivos / File Structure
- `index.html`: Página principal da ficha de personagem / Main character sheet page
- `skils.html`: Página para gerenciar habilidades e capacidades / Page for managing skills and abilities
- `css/style.css`: Folha de estilo principal / Main stylesheet
- `js/`:
  - `script.js`: Arquivo JavaScript principal para gerenciamento de personagem / Main JavaScript file for character management
  - `scriptArma.js`: Lida com o gerenciamento de armas / Handles weapon management
  - `status.js`: Gerencia status e atributos do personagem / Manages character status and attributes
  - `skils.js`: Lida com o gerenciamento de habilidades e capacidades / Handles skill and ability management
  - `mochila.js`: Gerencia o sistema de inventário / Manages inventory system
  - `saveImage.js`: Lida com o upload e armazenamento da imagem de perfil / Handles profile image upload and storage

## Contribuindo / Contributing
[PT-BR] Contribuições para melhorar o projeto são bem-vindas. Por favor, siga estes passos:
1. Faça um fork do repositório
2. Crie um novo branch (`git checkout -b feature/RecursoIncrivel`)
3. Faça commit de suas alterações (`git commit -m 'Adiciona algum RecursoIncrivel'`)
4. Faça push para o branch (`git push origin feature/RecursoIncrivel`)
5. Abra um Pull Request

[EN] Contributions to improve the project are welcome. Please follow these steps:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Licença / License
[PT-BR] Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE.md para detalhes.

[EN] This project is licensed under the MIT License - see the LICENSE.md file for details.

## Agradecimentos / Acknowledgments
[PT-BR]
- Obrigado a todos os contribuidores que ajudaram a moldar este projeto.
- Inspirado em fichas de personagem de RPG de mesa tradicionais.

[EN]
- Thanks to all contributors who have helped shape this project.
- Inspired by traditional tabletop RPG character sheets.
