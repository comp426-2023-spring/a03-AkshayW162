#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

// Args
var args = minimist(process.argv.slice(2));

//-h or --help is passed as a command line argument
if (args.h || args.help) { 
	console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    );
	process.exit(0);
}

//-r or --rules is passed as a command line argument
if (args.r || args.rules) { 
	console.log(
        `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
	process.exit(0);
}

//Unlabeled argument is supplied but is out of range
let shot = args._[0] 
try {
	console.log(JSON.stringify(rps(shot))); 
} catch (e) {
	console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    );
    console.log(
        `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
    process.exit(1);
}      