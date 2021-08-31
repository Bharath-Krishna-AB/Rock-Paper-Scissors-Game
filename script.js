var hideHands =document.querySelector('.hands')

var showResult = document.querySelector('.contest')

var userhand =document.getElementById('userPickImage')

var threeHands = {paper: "/assets/paper.png",scissors: "/assets/scissors.png",rock: "/assets/rock.png"}

function pickUserHand(userInp){
console.log(userInp);
hideHands.style.display = 'none'

showResult.style.display = 'flex'

console.log(threeHands.paper);
if(userInp == 'paper'){

    userhand.src = `${threeHands.paper}`    

}else if(userInp == 'scissors'){

    userhand.src = `${threeHands.scissors}`    
    
}else if(userInp == 'rock'){

    userhand.src = `${threeHands.rock}`    
    
}

}