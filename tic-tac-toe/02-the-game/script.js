/* background Music */
    var freshpage_sound = new Audio("../sound/Super Mario Bros. Theme Song.mp3")
    freshpage_sound.volume = 0.2
    freshpage_sound.play()
    freshpage_sound.loop = true



//---------key in name and change it
const namePlayX = () =>{
    let playX = prompt("Player X's name:","")
    let playername = document.getElementById('P1_name').textContent
    if (playX == null || playX == ""){
        playername = "Player X"
    }
    else{
        playername = playX
    }
    document.getElementById("P1_name").innerHTML = playername
    document.getElementById("name1").innerHTML = playername
    document.getElementById("username").innerHTML = playername
}
const namePlay0 = () =>{
    let play0 = prompt("Player 0's name:","")
    let playername = document.getElementById('P2_name').textContent

    if (play0 == null || play0 == ""){
        playername = "Player 0"
    }
    else{
        playername = play0
    }
    document.getElementById("P2_name").innerHTML = playername
    document.getElementById("name2").innerHTML = playername
    document.getElementById("username").innerHTML = playername

}


changeX = document.getElementById('editX')
changeX.addEventListener('click', namePlayX)

change0 = document.getElementById('edit0')
change0.addEventListener('click', namePlay0)





//------click, and hovering
const for_x = (theBox) =>{
   theBox.value = 'X'
   theBox.style.color = 'black'
}
const for_0 = (theBox) =>{
    theBox.value = '0'
    theBox.style.color = 'black'
}

const tohover = (event) =>{
    let theBox = event.target
    if(round == 1){
        for_x(theBox)
    }
    else{
        for_0(theBox)
    }
}

const toleave = (event) =>{
    let theBox = event.target
    theBox.value = ''
    
}

const click_x = (theBox) =>{
    theBox.value = 'X'
    theBox.style.color = 'black'
    var clickSound = new Audio("../sound/smb_bump.wav")
    clickSound.play()
    clickSound.volume = 0.3
    theBox.disabled = true
    round = 0
}
const click_0 = (theBox) =>{
    theBox.value = '0'
    theBox.style.color = 'black'
    var clickSound = new Audio("../sound/smb_bump.wav")
    clickSound.play()
    clickSound.volume = 0.3
    theBox.disabled = true
    round = 1
}
const toclick = (event) => {
    let theBox = event.target
    if(round == 1){
        click_x(theBox)
    }
    else{
        click_0(theBox)
    }
}






//--------score counter
const score = (player) => {
    player = document.getElementById('game-state').textContent
    bgpoints1 = document.getElementById('score-P1')
    bgpoints2 = document.getElementById('score-P2')
    playX = document.getElementById('name1').textContent
    play0 = document.getElementById('name2').textContent

    if (player == playX + " won!"){
       current1 = document.getElementById('score-P1').textContent
       p1 = Number(current1)
       p1 = p1 + 100
       document.getElementById('score-P1').textContent = p1
       console.log(p1)
       bgpoints1.style.color = 'yellow'
       bgpoints1.style.backgroundColor = 'rgb(30,96,209)'
    }
    else if(player == play0 + " won!"){
       current2 = document.getElementById('score-P2').textContent
       p2 = Number(current2)
       p2 = p2 + 100
       document.getElementById('score-P2').textContent = p2
       console.log(p2)
       bgpoints2.style.color = 'yellow'
       bgpoints2.style.backgroundColor = 'rgb(30,96,209)'
    }  

}



//---------------------check winner
const checkWin = () =>{
    let win_box =  [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,4,6],
        [2,5,8],
        [3,4,5],
        [6,7,8],
   ]

    let boxes = document.querySelectorAll('.box')
    let iswinnerFound = false
    
    for (let i =0; i<win_box.length; i++){
        console.log(win_box[i]);
        let firstCol = win_box[i][0]
        let secondCol = win_box[i][1]
        let thirdCol = win_box[i][2]

        if(boxes[firstCol].value === "X" && boxes[secondCol].value === "X" && boxes[thirdCol].value === "X"){
            let currentPlayer1 = document.getElementById('name1').textContent
            console.log("Player X is the winner")            
            message1 = currentPlayer1 + " won!"
            win = document.getElementById('game-state').textContent = message1
            score(win)
            iswinnerFound = true
            boxes[firstCol].style.backgroundColor = 'rgb(30,96,209)'
            boxes[secondCol].style.backgroundColor = 'rgb(30,96,209)'
            boxes[thirdCol].style.backgroundColor = 'rgb(30,96,209)'
            boxes[firstCol].style.color = 'white'
            boxes[secondCol].style.color = 'white'
            boxes[thirdCol].style.color= 'white'         
            var levelUp = new Audio("../sound/smb_powerup.wav")
            levelUp.play()
            levelUp.volume = 0.3
            for(j=0; j<boxes.length; j++){               
                boxes[j].disabled = true
            }
            //alert('Player X won! +100pts')
            break;
            
        }
        else if(boxes[firstCol].value === "0" && boxes[secondCol].value === "0" && boxes[thirdCol].value === "0"){
            let currentPlayer2 = document.getElementById('name2').textContent
            console.log("Player 0 is the winner")            
            message2 = currentPlayer2 + " won!"
            win = document.getElementById('game-state').textContent = message2
            score(win)
            iswinnerFound = true
            boxes[firstCol].style.backgroundColor = 'rgb(30,96,209)'
            boxes[secondCol].style.backgroundColor = 'rgb(30,96,209)'
            boxes[thirdCol].style.backgroundColor = 'rgb(30,96,209)'
            boxes[firstCol].style.color = 'white'
            boxes[secondCol].style.color = 'white'
            boxes[thirdCol].style.color= 'white'
            var levelUp = new Audio("../sound/smb_powerup.wav")
            levelUp.play()
            levelUp.volume = 0.3
            for(j=0; j<boxes.length; j++){
                boxes[j].disabled = true
            }
            //alert('Player 0 won!')

            break;
                
        }
    }  
    if(!iswinnerFound){
        let isOver = true;
        for(j=0; j < boxes.length; j++){
            if(boxes[j].value.trim() === ''){
               isOver = false;
               break;
            }
        }
      
        if(!isOver){
            if (round == 1){
                let currentPlayer = document.getElementById('name1').textContent
                turn = currentPlayer + "'s turn"
                document.getElementById('game-state').textContent = turn

                console.log("x turn")
            }
            else{
                let currentPlayer = document.getElementById('name2').textContent
                turn = currentPlayer + "'s turn"
                document.getElementById('game-state').textContent = turn
                console.log("0 turn")
            }
        }
        else{
            document.getElementById('game-state').textContent = "It's a tie... Game over"
            var tiesound = new Audio("../sound/smb_gameover.wav")
            tiesound.play()
            tiesound.volume = 0.3
            //var freshpage_sound = new Audio("../sound/Super Mario Bros. Theme Song.mp3")
            freshpage_sound.volume = 0.0
            console.log("It's a tie!....")
        }         
    }
} 


//----mouse event for click, hovering, win

let boxes = document.querySelectorAll('.box')
for(let i=0; i < boxes.length; i++){
    round = 1
    let singleBox = boxes[i]
    singleBox.addEventListener('mouseover', tohover)
    singleBox.addEventListener('mouseleave', toleave)
    singleBox.addEventListener('click', toclick)
    singleBox.addEventListener('click', checkWin)
    console.log('round:',round)
}


//--------------------reset/gameover
const playAgain = () =>{
    var reset_sound = new Audio("../sound/smb_coin.wav")
    reset_sound.play()
    reset_sound.volume = 0.3

    for(i=0; i<boxes.length; i++){
        boxes[i].value = ''
        boxes[i].disabled = false
        boxes[i].style.backgroundColor = 'white'
    }
    document.getElementById('score-P1').style.color = 'black'
    document.getElementById('score-P1').style.backgroundColor = 'rgb(255,202,86)'
    document.getElementById('score-P2').style.color = 'black'
    document.getElementById('score-P2').style.backgroundColor = 'rgb(255,202,86)'
    freshpage_sound.volume = 0.2
    turnX = document.getElementById('name1').textContent
    document.getElementById('game-state').textContent = "Game On! " + turnX + "'s turn"
    round = 1
}

const resetGame = () => {
    location.reload()
    var reset_sound1 = new Audio("../sound/smb_1-up.wav")
    reset_sound1.play()
    reset_sound1.volume = 0.3
}


let play_again = document.getElementById('resetButton')
play_again.addEventListener('click', playAgain)

let reset_game = document.getElementById('resetButton2')
reset_game.addEventListener('click', resetGame)





