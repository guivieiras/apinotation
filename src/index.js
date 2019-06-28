import fs from 'fs-extra'
import lodash from 'lodash'
import nearley from 'nearley'
import grammar from './grammar.js'
import path from 'path'
const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar))

function recursive(dir) {
	let files = []
	function walkDir(dir) {
		for (let f of fs.readdirSync(dir)) {
			let dirPath = path.join(dir, f)
			let isDirectory = fs.statSync(dirPath).isDirectory()
			isDirectory ? walkDir(dirPath) : files.push(path.join(dir, f))
		}
	}
	walkDir(dir)
	return files
}

export default function(routesFolder, subst, publishFolder = '/tmp/apinotation-docs') {
	let annotations = []

	for (let file of recursive(routesFolder)) {
		let x = readFile(file)
		if (x.length > 0) {
			annotations = [...annotations, ...x]
		}
	}

	parser.feed(annotations.join('\n'))

	if (parser.results.length > 1) {
		throw 'Ambiguidade'
	}

	replaceRefs(parser.results[0], subst)

	// console.dir(parser.results[0], { depth: null })
	// clipboardy.writeSync(JSON.stringify(parser.results[0], null, 2))

	fs.copySync('node_modules/apinotation/dist/html', publishFolder)
	fs.writeFileSync(publishFolder + '/resolved.js', `let resolved = ${JSON.stringify(parser.results[0], null, 2)}`, {
		encoding: 'utf-8'
	})

	return publishFolder
}

function replaceRefs(result, subst) {
	let values = getValues(result).filter(v => !!v.obj && (v.obj.startsWith('$') || v.path.some(x => x == '$spread')))
	for (let v of values) {
		try {
			if (v.obj.startsWith('$')) {
				lodash.set(result, v.path, subst[v.obj])
			} else {
				v.path.pop()
				v.path.pop()
				let toSpread = lodash.get(result, v.path)
				delete toSpread.$spread
				lodash.set(result, v.path, { ...toSpread, ...subst['$' + v.obj] })
			}
		} catch (error) {
			console.error(error.message ? error.message : error)
		}
	}
}

function getValues(obj, path = []) {
	if (Array.isArray(obj)) {
		let values = []
		for (let [i, objS] of obj.entries()) {
			values = [...values, ...getValues(objS, [...path, i])]
		}
		return values
	} else if (typeof obj == 'object') {
		let values = []
		for (let key in obj) {
			values = [...values, ...getValues(obj[key], [...path, key])]
		}
		return values
	} else {
		return [{ obj, path }]
		//console.log(JSON.stringify({ obj, path }, null, 2))
	}
}

function readFile(fileName) {
	let result = fs.readFileSync(fileName, { encoding: 'utf-8' })

	let paths = []
	let inicios = indexesOf(result, /\/\*\*/g)
	let fins = indexesOf(result, /\*\//g)

	let $Media = { title: String }

	for (let i = 0; i < inicios.length; i++) {
		let raw = result.substring(inicios[i], fins[i])
		// let [useless, ...lines] = raw.split('\n')
		let lines = raw.split(/\n/)
		let filteredLines = lines.map(l => l.substring(l.indexOf('@')).trim()).filter(l => !!l && l.indexOf('@') > -1)

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
