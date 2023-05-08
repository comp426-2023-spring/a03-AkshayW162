#!/usr/bin/env node

import minimist from 'minimist';
import { rpsls } from "../lib/rpsls.js"

// Args
var args = minimist(process.argv.slice(2));
