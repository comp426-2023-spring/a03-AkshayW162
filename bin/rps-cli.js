#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

// Args
var args = minimist(process.argv.slice(2));
