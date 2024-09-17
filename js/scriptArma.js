document.addEventListener('DOMContentLoaded', function() {
    const weaponSelect = document.getElementById('weapon-type');
    const weaponBonusDiv = document.getElementById('weapon-bonus');

    const weaponBonuses = {
        'adagas-duplas': 'Bônus: Ação bônus como segundo ataque',
        'chain-blade': 'Bônus: Pode se prender em qualquer coisa para se puxar usando sua ação de movimento, alcance = 2x movimento',
        'espada-escudo': 'Bônus: Ataque de oportunidade se algum inimigo sair de seu alcance (ação bônus)',
        'espadas-gemeas': 'Bônus: Passar na reação gera um contra-ataque',
        'manoplas': 'Bônus: Reações deixam o inimigo "Caído"',
        'claymore': 'Bônus: Pode ser utilizado para bloquear qualquer ação ofensiva (reage com luta)',
        'glaive': 'Bônus: Ataque de oportunidade se algum inimigo entrar em seu alcance (ação bônus)',
        'lamina-curva': 'Bônus: Caso tenha reagido ao ataque do inimigo, ganha vantagem no acerto',
        'machadao': 'Bônus: Pode utilizar a movimentação para atacar',
        'marretao': 'Bônus: Pode usar a ação bônus para aumentar o dano do ataque',
        'cajado': 'Bônus: Magias têm +(2 estrelas) no efeito',
        'lamina-flutuante': 'Bônus: Pode duplicar magias gastando o dobro de mana',
        'arco-curto': 'Bônus: Ao acertar, reseta seu movimento',
        'arco-longo': 'Bônus: Preparar a flecha utiliza seu movimento, pode carregar com ação bônus para mais dano, + (2 estrelas) de ataque na carga',
        'espada-magica': 'Bônus: Ao atacar pode gastar +3 de mana para conjurar uma lâmina com 1/4 do dano em arco 1/2 movimento'
    };

    weaponSelect.addEventListener('change', function() {
        const selectedWeapon = this.value;
        const bonus = weaponBonuses[selectedWeapon];
        
        if (bonus) {
            weaponBonusDiv.textContent = bonus;
            weaponBonusDiv.style.display = 'block';
        } else {
            weaponBonusDiv.style.display = 'none';
        }
    });
});
