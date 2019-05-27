console.log(JSON.stringify({ a: String }))
var resolved = [
	{
		type: '@Route',
		method: 'POST',
		description: 'Signup',
		url: 'auth/signup/:teste',
		params: ['rota'],
		query: ['querya', 'queryb'],
		paramsInfo: null,
		queryInfos: null,
		body: null,
		responses: []
	},

	{
		type: '@Route',
		method: 'POST',
		description: 'Signin',
		url: 'auth/signin',
		params: ['rota'],
		query: ['querya', 'queryb'],
		paramsInfo: { rota: 'Parametro bonitinho' },
		queryInfos: { querya: 'teste', queryb: 'outro teste' },
		body: {
			type: '@Body',
			contentType: 'json',
			json: { email: 'String', password: 'String', casaDahora: { teste: 'String', testedawda: 'zika ne' } }
		},
		responses: [
			{
				type: '@Response',
				code: '200',
				headers: {
					'Set-cookie': 'batataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa frita',
					'Content-type': 'batataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa frita'
				},
				contentType: 'json',
				json: { email: 'String', name: 'String', avatar: 'String', id: 'String', casaDahora: { teste: 'String', testex: 'String' } }
			},
			{
				type: '@Response',
				code: '400',
				headers: { 'Set-cookie-doidao': 'batataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa frita' },
				contentType: 'json',
				json: { error: 'User not found' }
			},
			{ type: '@Response', code: '400', headers: null, contentType: 'json', json: { error: 'User e-mail not verified' } },
			{ type: '@Response', code: '400', headers: null, contentType: 'json', json: { error: 'Invalid password' } },
			{ type: '@Response', code: '200', headers: null },
			{ type: '@Response', code: '200', headers: null, contentType: 'json', json: '$Media' },
			{
				type: '@Response',
				code: '200',
				headers: null,
				contentType: 'json',
				json: { teste: 'Texto', outro: 'String', outroNome: '$Media', $spread: ['Frita', 'BAOIDHIAWU'] }
			},
			{
				type: '@Response',
				code: '400',
				headers: null,
				contentType: 'json',
				json: { error: 'ValidationError', errors: [{ field: 'String', message: 'String' }] }
			}
		]
	}
]
