var RPS = require('../app/index');

describe("Rock Paper Scissors", function() {
    it("player 1 throws rock, player 2 throws scissors", function() {
        expect(RPS("rock", "scissors")).toBe("Player 1 Wins");
    });
    it("player 1 throws rock, player 2 throws paper", function() {
        expect(RPS("rock", "paper")).toBe("Player 2 Wins");
    });
    it("player 1 throws paper, player 2 throws scissors", function() {
        expect(RPS("paper", "scissors")).toBe("Player 2 Wins");
    });
    it("player 1 throws paper, player 2 throws rock", function() {
        expect(RPS("paper", "rock")).toBe("Player 1 Wins");
    });
    it("player 1 throws scissors, player 2 throws rock", function() {
        expect(RPS("scissors", "rock")).toBe("Player 2 Wins");
    });
    it("player 1 throws scissors, player 2 throws paper", function() {
        expect(RPS("scissors", "paper")).toBe("Player 1 Wins");
    });
    it("player 1 throws scissors, player 2 throws scissors", function() {
        expect(RPS("scissors", "scissors")).toBe("Tie");
    });

});

