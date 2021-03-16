const myCircle = document.createElement('div');
myCircle.className = "red-circle";
document.querySelector('.game-field').append(myCircle);
let circleCurrentX;
let circleCurrentY;


const moveCircle =(e)=> {
    let X1 = e.clientX;
    let Y1 = e.clientY;
    let X2 = myCircle.offsetLeft;
    let Y2 = myCircle.offsetTop;

    let radius = myCircle.offsetWidth/2;


    let distance = Math.sqrt( Math.pow(Math.abs(X1-X2), 2) + Math.pow(Math.abs(Y1-Y2), 2) );
    if(distance - radius <= 0) console.log('game over');
    else
{
    circleCurrentX = myCircle.offsetLeft;
    circleCurrentY = myCircle.offsetTop;
        myCircle.style.transform = `translate(${e.clientX - circleCurrentX-radius}px, ${e.clientY - circleCurrentY-radius}px)`;
}
};

const repositionCircle = (e)=>setTimeout(()=>moveCircle(e), 500 );

document.addEventListener('mousemove', (e)=>repositionCircle(e));
