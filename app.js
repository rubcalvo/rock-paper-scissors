

let elemento = document.getElementById('btn')
elemento.addEventListener('click', function () {
var player_score = 0;
var computer_score = 0;
    
    for (let i = 0; i < 5; i++) {
        // your code here!
        function computerChoice() {
            const rps = ['rock', 'paper', 'scissors']
            const random = Math.floor(Math.random() * 3);
            return rps[random]

        };

        function playerChoice() {
            choice = prompt('Hi, welcome to Rock-Paper-Scissors. Choose one: Paper, Rock or Scissors')
            return choice.toLowerCase()
        }
        let computer = computerChoice()
        let player = playerChoice()



        switch (true) {
            case player === 'paper' && computer === 'rock':
                console.log(`Computer choose ${computer}. You win`);
                player_score = player_score + 1
                break;
            case player === 'paper' && computer === 'scissors':
                computer_score = computer_score + 1
                console.log(`Computer choose ${computer}. You lose`);
                break;
            case player === 'scissors' && computer === 'rock':
                computer_score = computer_score + 1
                console.log(`Computer choose ${computer}. You lose`);
                break;
            case player === 'scissors' && computer === 'paper':
                player_score = player_score + 1
                console.log(`Computer choose ${computer}. You win`);
                break;
            case player === 'rock' && computer === 'scissors':
                player_score = player_score + 1
                console.log(`Computer choose ${computer}. You win`);
                break;
            case player === 'rock' && computer === 'paper':
                computer_score = computer_score + 1
                console.log(`Computer choose ${computer}. You lose`);
                break;
            case player === computer:
                console.log(`Computer also choose ${computer}. It is a draw`);
                break;
            default:
                console.log('Please try again.')
        };
        if (i === 4) {
            if (computer_score > player_score) {
                console.log(`Computer score ${computer_score} wins and you only ${player_score}. You lose :(`)
            } else if (computer_score < player_score) {
                console.log(`Computer score ${computer_score} wins and you ${player_score}. You win!`)
            } else if (computer_score == player_score) {
                console.log('It\'s a draw')
            }
            else {
                console.log("Something went wrong")
            }
        }
    }
    
    

})

