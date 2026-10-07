function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evens": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismack Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Hayword": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    };
}




function numPointsScored(playerName) {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    }

    if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    }
};
console.log(numPointsScored("Alan Anderson"));
console.log(numPointsScored("Reggie Evens"));  
console.log(numPointsScored("Brook Lopez"));
console.log(numPointsScored("Mason Plumlee"));
console.log(numPointsScored("Jason Terry"));

console.log(numPointsScored("Jeff Adrien"));
console.log(numPointsScored("Bismack Biyombo"));
console.log(numPointsScored("DeSagna Diop"));
console.log(numPointsScored("Ben Gordon"));
console.log(numPointsScored("Brendan Hayword"));

function shoeSize(playerName) {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    }

    if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    }
};
console.log(shoeSize("Alan Anderson"));
console.log(shoeSize("Reggie Evens"));  
console.log(shoeSize("Brook Lopez"));
console.log(shoeSize("Mason Plumlee"));
console.log(shoeSize("Jason Terry"));

console.log(shoeSize("Jeff Adrien"));
console.log(shoeSize("Bismack Biyombo"));
console.log(shoeSize("DeSagna Diop"));
console.log(shoeSize("Ben Gordon"));
console.log(shoeSize("Brendan Hayword"));

function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];

    if (game.home.teamName === teamName) {
        for (let player in game.home.players) {
            numbers.push(game.home.players[player].number);
        }
    } else if (game.away.teamName === teamName) {
        for (let player in game.away.players) {
            numbers.push(game.away.players[player].number);
        }
    }

    return numbers;
};
console.log(playerNumbers("Brooklyn Nets"));
console.log(playerNumbers("Charlotte Hornets"));

function playerStats(playerName) {
    const game = gameObject();

    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    }

    if (game.away.players[playerName]) {
        return game.away.players[playerName];
    }
};
console.log(playerStats("Alan Anderson"));
console.log(playerStats("Reggie Evens"));  
console.log(playerStats("Brook Lopez"));
console.log(playerStats("Mason Plumlee"));
console.log(playerStats("Jason Terry"));

console.log(playerStats("Jeff Adrien"));
console.log(playerStats("Bismack Biyombo"));
console.log(playerStats("DeSagna Diop"));
console.log(playerStats("Ben Gordon"));
console.log(playerStats("Brendan Hayword"));

function bigShoeRebounds() {
    const game = gameObject();
    let biggestShoeSize = 0;
    let rebounds = 0;

    for (let player in game.home.players) {
        if (game.home.players[player].shoe > biggestShoeSize) {
            biggestShoeSize = game.home.players[player].shoe;
            rebounds = game.home.players[player].rebounds;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].shoe > biggestShoeSize) {
            biggestShoeSize = game.away.players[player].shoe;
            rebounds = game.away.players[player].rebounds;
        }
    }

    return rebounds;
};
console.log(bigShoeRebounds());

function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerWithMostPoints = "";

    for (let player in game.home.players) {
        if (game.home.players[player].points > mostPoints) {
            mostPoints = game.home.players[player].points;
            playerWithMostPoints = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].points > mostPoints) {
            mostPoints = game.away.players[player].points;
            playerWithMostPoints = player;
        }
    }

    return playerWithMostPoints;
};
console.log(mostPointsScored());

function winningTeam() {
    const game = gameObject();
    let homeTeamPoints = 0;
    let awayTeamPoints = 0;

    for (let player in game.home.players) {
        homeTeamPoints += game.home.players[player].points;
    }

    for (let player in game.away.players) {
        awayTeamPoints += game.away.players[player].points;
    }

    if (homeTeamPoints > awayTeamPoints) {
        return game.home.teamName;
    } else if (awayTeamPoints > homeTeamPoints) {
        return game.away.teamName;
    } else {
        return "It's a tie!";
    }
};
console.log(winningTeam());

function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";

    for (let player in game.home.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    for (let player in game.away.players) {
        if (player.length > longestName.length) {
            longestName = player;
        }
    }

    return longestName;
};
console.log(playerWithLongestName());

function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let maxSteals = 0;
    let playerWithMostSteals = "";

    for (let player in game.home.players) {
        if (game.home.players[player].steals > maxSteals) {
            maxSteals = game.home.players[player].steals;
            playerWithMostSteals = player;
        }
    }

    for (let player in game.away.players) {
        if (game.away.players[player].steals > maxSteals) {
            maxSteals = game.away.players[player].steals;
            playerWithMostSteals = player;
        }
    }

    return longestName === playerWithMostSteals;
};
console.log(doesLongNameStealATon());

function teamColors(teamName) {
    const game = gameObject();

    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return "Team not found.";
    }
};
console.log(teamColors("Brooklyn Nets"));
console.log(teamColors("Charlotte Hornets"));

function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
};
console.log(teamNames());
