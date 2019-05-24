import fs from 'fs'

let file = '/home/guilherme/Documents/git/num-backend/src/routes/AuthRoutes.js'

let result = fs.readFileSync(file, { encoding: 'utf-8' })

let paths = []
let inicios = indexesOf(result, /\/\*\*/g)
let fins = indexesOf(result, /\*\//g)

let $Media = { title: String }

for (let i = 0; i < inicios.length; i++) {
	let raw = result.substring(inicios[i], fins[i])
	let [useless, ...lines] = raw.split('\n')
	let filteredLines = lines.map(l => l.substring(l.indexOf('@')).trim()).filter(l => !!l)

	let path = {}
	for (let line of filteredLines) {
		if (line.startsWith('@Route')) {
			path = route(line)
		}
		if (line.startsWith('@Query')) {
			fillParamQueryInfo(line, path.query, '@Query')
		}
		if (line.startsWith('@Params')) {
			fillParamQueryInfo(line, path.params, '@Params')
		}
		if (line.startsWith('@Body')) {
			path.body = body(line)
		}
	}
	console.log(path)
	// console.log(JSON.stringify(path, null, 2))
}

function route(line) {
	let path = {}
	let split = line.split(' ')
	if (!['POST', 'GET', 'DELETE', 'PUT', 'PATCH', 'OPTIONS'].includes(split[1].toUpperCase())) {
		throw new Error('Route method not found: ' + line)
	}
	path.method = split[1]
	path.url = split[2]

	let twoDotIndexes = indexesOf(path.url, /:/g)
	let barraIndexes = indexesOf(path.url, /\//g)
	let interrogaIndexes = indexesOf(path.url, /\?/g)

	let both = [...barraIndexes, ...interrogaIndexes]
	both.sort((a, b) => a - b)

	path.query = {}
	path.params = {}
	for (let a of twoDotIndexes) {
		let primeroMaior = both.find(o => o > a)
		path.params[path.url.substring(a + 1, primeroMaior)] = ' '
	}
	for (let a of interrogaIndexes) {
		let primeroMaior = interrogaIndexes.find(o => o > a)
		path.query[path.url.substring(a + 1, primeroMaior)] = ' '
	}

	path.description = split.length > 3 ? split.slice(3).join(' ') : undefined
	return path
}

function fillParamQueryInfo(line, params, who) {
	let split = line.replace(who + ' ', '').split(',')
	for (let desc of split) {
		let two = desc.split(':').map(x => x.trim())
		if (two.length > 1) {
			if (!params[two[0]]) {
				throw new Error(`Object not found: ${two[0]} in ${JSON.stringify(params, null, 2)}`)
			}
			params[two[0]] = two[1]
		}
	}
}

function body(line) {
	line = line.replace('@Body ', '')
	let jsonIndex = line.toLowerCase().indexOf('json')
	if (jsonIndex > -1) {
		let json = line.substring(jsonIndex + 4)
		json = json.substring(json.indexOf('{'), json.lastIndexOf('}') + 1)
		return parseJson(json)
	}
	return 'bawdaw'
}

function parseJson(json) {
	let properties = json.split(/,|:/)
	console.log(properties)
	return properties
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
