import fs from 'fs'

let dirPath = '/home/jessica/git/num-backend/src/routes/'
let files = fs.readdirSync(dirPath)

let paths = []
for (let file of files) {
	paths = [...paths, ...readFile(dirPath + file)]
}

console.log(paths)

const nearley = require('nearley')
const grammar = require('./grammar.js')
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))
parser.feed(paths.join('\n'))
console.dir(parser.results, { depth: null })

function readFile(fileName) {
	let result = fs.readFileSync(fileName, { encoding: 'utf-8' })

	let paths = []
	let inicios = indexesOf(result, /\/\*\*/g)
	let fins = indexesOf(result, /\*\//g)

	let $Media = { title: String }

	for (let i = 0; i < inicios.length; i++) {
		let raw = result.substring(inicios[i], fins[i])
		let [useless, ...lines] = raw.split('\n')
		let filteredLines = lines.map(l => l.substring(l.indexOf('@')).trim()).filter(l => !!l)

		paths = [...paths, ...filteredLines]
	}

	return paths
}

function indexesOf(string, regex) {
	let match
	let indexes = []

	regex = new RegExp(regex)

	while ((match = regex.exec(string))) {
		if (!indexes[match[0]]) indexes[match[0]] = []
		indexes.push(match.index)
	}

	return indexes
}
