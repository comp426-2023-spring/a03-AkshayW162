#!/usr/bin/env node

const rpsValidShots = ["rock", "paper", "scissors"];
const rpslsValidShots = ["rock", "paper", "scissors", "lizard", "spock"];

//Rock Paper Scissors function
function rps(shot){
    //Opponent's choice; randomly generated
    let oppShot = rpsValidShots[rpsValidShots.length * Math.floor(Math.random())]

    //No arg supplied
    if (shot === null || shot === undefined){ return {"player": oppShot}; }
    
    //Convert to lowercase and validate choice
    let argShot = shot.toLowerCase()
    if(!rpsValidShots.includes(argShot)){
        console.error(shot + " is out of range.");
        console.log(`Available Rock-Paper-Scissors Options:
        - Rock
        - Paper
        - Scissors`);
        process.exit(1);
    } else {
        //Create output array for formatting
        let output = {
            "player": shot,
            "opponent": oppShot,
            "result": "" // Initialized as unknown
        };
    }    

    //Check wincons
    switch (argShot) {
        case 'rock':
            output['result'] = oppShot === 'scissors' ? 'win' : oppShot === 'rock' ? 'tie' : 'lose';
            break;
        case 'paper':
            output['result'] = oppShot === 'rock' ? 'win' : oppShot === 'paper' ? 'tie' : 'lose';
            break;
        case 'scissors':
            output['result'] = oppShot === 'paper' ? 'win' : oppShot === 'scissors' ? 'tie' : 'lose';
            break;
    }
    return output
}

//Rock Paper Scissors Lizard Spock function
function rpsls(shot) {
    
}