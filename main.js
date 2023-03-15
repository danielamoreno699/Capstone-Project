// toggle btn
const link = document.getElementsByClassName('menu-link');
const mobileMenuLayout = document.getElementById('mobile-menu-layout');
const openBtnMenu = () => {
  mobileMenuLayout.classList.add('active');
  document.body.classList.add('noScroll');
};

openBtnMenu();

const closeBtnMenu = () => {
  mobileMenuLayout.classList.remove('active');
  document.body.classList.remove('noScroll');
};

closeBtnMenu();

const RemoveActiveMenuLink = () => {
  Array.from(link).forEach((el) => {
    el.addEventListener('click', () => {
      mobileMenuLayout.classList.remove('active');
      document.body.classList.remove('noScroll');
    });
  });
};

RemoveActiveMenuLink();

// displaying cards
const cards = [
  {
    id: 0,
    img: 'assets/person2.jpg',
    guestName: 'Yochai Bencher',
    professionalBackground: 'Berkman professor of Enterpreneurial Legal Studies at Harvard Law School',
    shortResume: 'Benkler studies commons-based peer production, and published his seminal book The Wealth of Networks in 2006.',

  },
  {
    id: 1,
    img: 'assets/person3.jpg',
    guestName: 'SohYeong Noh',
    professionalBackground: 'Director of Art Centre Nabi and a board member of CC Korea',
    shortResume: 'As the main venue for media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts',

  },
  {
    id: 2,
    img: 'assets/person1.jpeg',
    guestName: 'Lila Tretikov',
    professionalBackground: 'Executive Director of the Wikimedia Foundation',
    shortResume: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month',

  },
  {
    id: 3,
    img: 'assets/person6.jpg',
    guestName: 'Kilnam Chon',
    professionalBackground: '',
    shortResume: 'Kilnam Chon Helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012 he was inducted into the inaugural class of the internet Society (ISOC) Internet Hall of Fame. ',
  },
  {
    id: 4,
    img: 'assets/person4.jpg',
    guestName: 'Julia Leda',
    professionalBackground: 'President of Young Pirates of Europe',
    shortResume: 'European integration, political democracy and participation of the youth through online as her major condem, Redas report outlining potential changes to the EU copyright law was approved by the Parliament in July',
  },
  {
    id: 5,
    img: 'assets/person5.jpg',
    guestName: 'Ryan Merkley',
    professionalBackground: 'CEO of Creative Commons, ex CCO of the Mozilla Foundation',
    shortResume: 'Ryan had been leading open-source projects at the mozilla Foundation such as the open source movement',
  },
];

const cardContainer = document.getElementById('card-speakers');
const displaycard = () => {
  cards.forEach((detailCard) => {
    const card = document.createElement('div');
    card.classList = 'box-speakers';

    const cardContent = ` <div class="box-speakers">
        <div class="img-container">
            <img class="img-speaker" src=${detailCard.img} alt="">    
        </div>
        
        <div class="text-desc-speaker">
            <h3 class="desc-speaker-h3">${detailCard.guestName}</h3>
            <h5 class=" descrip-h5 color-font">${detailCard.professionalBackground}</h5>
            <p class="descrip-p" > ${detailCard.shortResume}
            </p>
        </div>
        </div>
         `;

    cardContainer.innerHTML += cardContent;

})};
displaycard();
