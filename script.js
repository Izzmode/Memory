const section = document.querySelector('section');
const playerLivesCount = document.querySelector('.playerLivesCount');
const playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
{imgSrc: 'images/chick.jpg', name: 'chick'},
{imgSrc: 'images/cow.jpg', name: 'cow'},
{imgSrc: 'images/hare.jpg', name: 'hare'},
{imgSrc: 'images/horses.jpg', name: 'horses'},
{imgSrc: 'images/piglet.jpg', name: 'piglet'},
{imgSrc: 'images/puppy.jpg', name: 'puppy'},
{imgSrc: 'images/rooster.jpg', name: 'rooster'},
{imgSrc: 'images/sheep.jpg', name: 'sheep'},
{imgSrc: 'images/chick.jpg', name: 'chick'},
{imgSrc: 'images/cow.jpg', name: 'cow'},
{imgSrc: 'images/hare.jpg', name: 'hare'},
{imgSrc: 'images/horses.jpg', name: 'horses'},
{imgSrc: 'images/piglet.jpg', name: 'piglet'},
{imgSrc: 'images/puppy.jpg', name: 'puppy'},
{imgSrc: 'images/rooster.jpg', name: 'rooster'},
{imgSrc: 'images/sheep.jpg', name: 'sheep'},

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

        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener('click', e => {
            card.classList.toggle('toggleCard');
        })
    })

   
    

}

cardGenerator();





// const squares = document.querySelectorAll('.square');



// const myFunction = e =>{
//     // alert('funkar det nu?')
//     console.log(e.target)

//     if (!e.target.classList.contains('square')){
//         return
//     }

//     e.target.classList.toggle('active')
// };

// squares.forEach(square =>{
//     addEventListener('click', myFunction)
    
// })



