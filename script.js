let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 9);
};

const compareGuesses = (human, computer, generateTarget) => {
  let humanPoint = Math.abs(generateTarget - human);
  let computerPoint = Math.abs(generateTarget - computer);

  if (humanPoint <= computerPoint ) {
    return true
  } else if (computerPoint < humanPoint) {
    return false
  };
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore =+ 1;
  };
};

function advanceRound() {
  currentRoundNumber += 1
}












