// sélectionner modal-btn, modal-overlay, close-btn
// Ecouter les évènements 'click' sur modal-btn et close-btn
// quand un utilisateur 'click' sur modal-btn ajouter .open-modal à modal-overlay
// quand un utilisateur 'click' sur close-btn supprimer .open-modal de modal-overlay

let modalBut = document.querySelector('.btn'),
    modalOver = document.querySelector('.modal-overlay'),
    closeBut = document.querySelector('.close-btn');

modalBut.addEventListener('click', () =>
    modalOver.classList.add('open-modal')
)

closeBut.addEventListener('click', () =>
    modalOver.classList.remove('open-modal')
)