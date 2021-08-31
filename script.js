


var threeHands = {paper: "/assets/paper.png",scissors: "/assets/scissors.png",rock: "/assets/rock.png"}

function pickUserHand(userInp){
console.log(userInp);

var hideHands =document.querySelector('.hands')
hideHands.style.display = 'none'

var showResult = document.querySelector('.contest')
showResult.style.display = 'flex'

console.log(threeHands.paper);

var userhand =document.getElementById('userPickImage')
if(userInp == 'paper'){

    userhand.src = `${threeHands.paper}`    

}else if(userInp == 'scissors'){

    userhand.src = `${threeHands.scissors}`    
    
}else if(userInp == 'rock'){

    userhand.src = `${threeHands.rock}`    
    
}

let threeOpts = ['paper','scissors','rock']
let cpRandom= threeOpts[Math.floor(Math.random() * threeOpts.length)]



var computerhand = document.getElementById('computerPickImage')

if(cpRandom == 'paper'){

    computerhand.src = `${threeHands.paper}`    

}else if(cpRandom == 'scissors'){

    computerhand.src = `${threeHands.scissors}`    
    
}else if(cpRandom == 'rock'){

    computerhand.src = `${threeHands.rock}`    
    
}



}