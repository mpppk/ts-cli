#!/usr/bin/env node

import * as program from 'commander';

program
    .version('0.1.0')
    .option('-p, --peppers', 'Add peppers')
    .option('-P, --pineapple', 'Add pineapple')
    .option('-b, --bbq-sauce', 'Add bbq sauce')
    .option('-c, --cheese [type]', 'Add the specified type of cheese [marble]', 'marble')
    .parse(process.argv);

let msg = 'you ordered a pizza with:';
msg = program.peppers ? `${msg}\n  - peppers` : msg;
msg = program.pineapple ? `${msg}\n  - pineapple` : msg;
msg = program.bbqSauce ? `${msg}\n  - bbq` : msg;

// tslint:disable-next-line no-console
console.log(`${msg}\n  - ${program.cheese} cheese`);
