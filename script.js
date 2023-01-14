const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
const message = document.querySelector('.message');
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
{imgSrc: 'images/alien.jpg', name: 'alien'},
{imgSrc: 'images/bond.jpg', name: 'bond'},
{imgSrc: 'images/jurassic.jpg', name: 'jurassic'},
{imgSrc: 'images/terminator.jpg', name: 'terminator'},
{imgSrc: 'images/lotr.jpg', name: 'lotr'},
{imgSrc: 'images/matrix.jpg', name: 'matrix'},
{imgSrc: 'images/potter.jpg', name: 'potter'},
{imgSrc: 'images/star-wars.jpg', name: 'star-wars'},
{imgSrc: 'images/alien.jpg', name: 'alien'},
{imgSrc: 'images/bond.jpg', name: 'bond'},
{imgSrc: 'images/jurassic.jpg', name: 'jurassic'},
{imgSrc: 'images/terminator.jpg', name: 'terminator'},
{imgSrc: 'images/lotr.jpg', name: 'lotr'},
{imgSrc: 'images/matrix.jpg', name: 'matrix'},
{imgSrc: 'images/potter.jpg', name: 'potter'},
{imgSrc: 'images/star-wars.jpg', name: 'star-wars'},

];


const randomize = () => {
    const cardData = getData();

    cardData.sort(() => Math.random() -0.5);
   
    // console.log(cardData);

    return cardData;
}


const cardGenerator = () =>{
    const cardData = randomize();
    console.log(cardData);
    
    cardData.forEach(item => {
        const card = document.createElement('div');
        card.classList = 'card';
        const face = document.createElement('img');
        face.classList = 'face';
        const back = document.createElement('div');
        back.classList = 'back';

        face.src = item.imgSrc;
        card.setAttribute('name', item.name);

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', e => {
            card.classList.toggle('toggleCard');
            checkCards(e);
            message.textContent= '';
        })
    })

   
    const checkCards = (e) => {
        const clickedCard = e.target;
        console.log(clickedCard);
        clickedCard.classList.add('flipped');
        const flippedCards = document.querySelectorAll('.flipped');
        const toggleCard = document.querySelectorAll('.toggleCard');
        

        if(flippedCards.length === 2) {
            if(flippedCards[0].getAttribute('name') === flippedCards[1].getAttribute('name')){
                console.log('match')
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    card.style.pointerEvents = 'none';
                });
            } 
            else{
                console.log('wrong')
                flippedCards.forEach(card => {
                    card.classList.remove('flipped');
                    
                    setTimeout( () => card.classList.remove('toggleCard'), 1000);
                });

                playerLives--;
                playerLivesCount.textContent = playerLives;

                if(playerLives == 0)setTimeout(() =>{
                    restart('try again');
                }, 1000);
            } 
        }
    
    

        if(toggleCard.length === 16)setTimeout(() =>{
        restart("Congratulations, you're a nerd!")
        }, 1000)

    }
};


const restart = (text) => {
    let cardData = randomize();
    let faces = document.querySelectorAll('.face')
    let cards = document.querySelectorAll('.card')
    section.style.pointerEvents ='none';

    cardData.forEach((item, index) => {
        cards[index].classList.remove('toggleCard');
      setTimeout(() => {
        cards[index].style.pointerEvents = 'all';
        faces[index].src = item.imgSrc;
        cards[index].setAttribute('name', item.name);
        section.style.pointerEvents ='all';
      }, 1000);
    });

    playerLives = 6;
    
    playerLivesCount.textContent = playerLives;

    message.textContent = text;

}

cardGenerator();



