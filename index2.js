import fs from 'fs-extra'
const nearley = require('nearley')
const grammar = require('./grammar.js')
// Create a Parser object from our grammar.
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

// Parse something!
parser.feed(fs.readFileSync('whatis.txt', { encoding: 'utf-8' }))

// parser.results is an array of possible parsings.
console.dir(parser.results, { depth: null })
