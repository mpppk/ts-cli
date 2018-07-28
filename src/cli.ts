#!/usr/bin/env node

import * as program from 'commander';
import { screenshot } from './service/Crawler';

program
    .version('0.1.0')
    .option('-u, --url [url]', 'Target URL')
    .option('-o, --out [capture file name]', 'Output capture file name')
    .parse(process.argv);

const captureFileName: string = program.out;
const url: string = program.url;

if (!url) {
  console.error('error: --url must be specified'); // tslint:disable-line
  process.exit(1);
}

if (!captureFileName) {
  console.error('error: --out must be specified'); // tslint:disable-line
  process.exit(1);
}

screenshot(url, captureFileName);

// tslint:disable-next-line no-console
console.log(`capture from ${url} to ${captureFileName}.png`);
