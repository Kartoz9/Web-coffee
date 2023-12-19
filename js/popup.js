const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.md-btn');

const getCardElements = (card) => {
    const cardImg = card.querySelector('img');
    const cardTitle = card.querySelector('.card-titel');
    const cardDesc = card.querySelector('.card-desc');
    const cardPrice = card.querySelector('.card-price');
    return {
        cardImg,
        cardTitle,
        cardDesc,
        cardPrice,
    }
} 

const getPopupElements = (popup) => {
    const popupImg = popup.querySelector('.md-img');
    const popupTitle = popup.querySelector('.md-titel');
    const popupDesc = popup.querySelector('.md-desc');
    const popupPrice = popup.querySelector('.total-price');
    return {
        popupImg,
        popupTitle,
        popupDesc,
        popupPrice,
    }
}

const changePopupValues = (card, popup) => {
    const {
        cardImg,
        cardTitle,
        cardDesc,
        cardPrice,
    } = getCardElements(card);

    const {
        popupImg,
        popupTitle,
        popupDesc,
        popupPrice,
    } = getPopupElements(popup);

    popupImg.src = cardImg.src;
    popupTitle.innerHTML = cardTitle.innerText
    popupDesc.innerHTML = cardDesc.innerText
    popupPrice.innerHTML = cardPrice.innerText
} 

const cardHandler = (event) =>{
    const card = event.target.closest('.card-coffee');
    
    if (!card) {
        return
    }
    
    changePopupValues(card, popup)

    popup.classList.add('open');
}

document.addEventListener('click', cardHandler)

closeBtn.addEventListener('click', () => {
    popup.classList.remove('open');
})