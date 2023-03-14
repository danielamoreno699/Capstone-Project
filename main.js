//togle btn
const openBtnMenu = () => {
    
}


// displaying cards
const cards = [
  {
    id: 0,
    img: '',
    guestName: 'Yochai Bencher',
    professionalBackground: 'Berkman profesor of Enterpreneuial Legal Studies',
    shortResume: 'Benkler studies commons-based peer production and published his seminal book The Wealth of Networks in 2006',

  },
  {
    id: 1,
    img: '',
    guestName: 'Yochai Bencher',
    professionalBackground: 'Berkman profesor of Enterpreneuial Legal Studies',
    shortResume: 'Benkler studies commons-based peer production and published his seminal book The Wealth of Networks in 2006',

  },
  {
    id: 2,
    img: '',
    guestName: 'Yochai Bencher',
    professionalBackground: 'Berkman profesor of Enterpreneuial Legal Studies',
    shortResume: 'Benkler studies commons-based peer production and published his seminal book The Wealth of Networks in 2006',

  },
  {
    id: 3,
    img: '',
    guestName: 'Yochai Bencher',
    professionalBackground: 'Berkman profesor of Enterpreneuial Legal Studies',
    shortResume: 'Benkler studies commons-based peer production and published his seminal book The Wealth of Networks in 2006',
  },
  {
    id: 4,
    img: '',
    guestName: 'Yochai Bencher',
    professionalBackground: 'Berkman profesor of Enterpreneuial Legal Studies',
    shortResume: 'Benkler studies commons-based peer production and published his seminal book The Wealth of Networks in 2006',
  },
];

const cardContainer = document.getElementById('card-speakers');
const displaycard = () => {
  cards.forEach((detailCard) => {
    const card = document.createElement('div');
    card.classList = 'box-speakers';

    const cardContent = ` <div class="box-speakers">
        <div class="img-container">
            <img class="img-speaker" src=''>    
        </div>
        
        <div class="text-desc-speaker">
            <h3>${detailCard.guestName}</h3>
            <h5 class="color-font">${detailCard.professionalBackground}</h5>
            <p class="bold" > ${detailCard.shortResume}
            </p>
        </div>
        </div>
         `;

    cardContainer.innerHTML += cardContent;

})};
displaycard();
