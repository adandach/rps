/**
 * @return {string}
 */
let tie = "Tie";
let player1Wins = "Player 1 Wins";
let player2Wins = "Player 2 Wins";

var RPS = function (player1, player2) {
    if (player1 === player2) {
        return tie;
    }

    if ((player1 === "paper" && player2 === "rock")
        || (player1 === "rock" && player2 === "scissors")
        || (player1 === "scissors" && player2 === "paper")) {
        return player1Wins;
    }
    return player2Wins;
};

module.exports = RPS;