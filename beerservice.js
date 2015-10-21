// Init
var restify = require('restify');
var server = restify.createServer({
	name: 'beerAppServer'
});
server.use(restify.queryParser());
server.use(restify.bodyParser());

// Configure routes
var PATH = '/beers';
server.get({path: PATH, version: '0.0.1'}, getAllBeers);
server.get({path : PATH + '/:beerId' , version : '0.0.1'} , getBeer);
server.post({path: PATH, version: '0.0.1'}, addBeer);
server.put({path: PATH + '/:beerId', version: '0.0.1' }, updateBeer);
server.del({path : PATH +'/:beerId' , version: '0.0.1'}, deleteBeer);
server.opts({path: PATH + '/:beerId', version: '0.0.1' }, crossOrigin);
server.opts({path: PATH, version: '0.0.1' }, crossOrigin);

// Data. As long as this REST-service stays alive, we can append a simple variable with data.
var beers = [
	{ id: 1, name: 'Jupiler', brouwer: 'Inbev'},
	{ id: 2, name: 'Duvel', brouwer: 'Moortgat' }
];

// For testing errorhandling, let's throw an error every ten requests
var requestCount = 0;
server.pre(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');

	requestCount++;
	if(requestCount === 10) {
		requestCount = 0;
		console.error('-- Returning an internal server error to test errorhandling.');
		res.send(500, 'An almost randomly selected internal server error.');
		return;
	}

	return next();
});

// Start the server
server.listen(9688, '127.0.0.1', function () {
	console.log('%s listening at %s ', server.name, server.url);
});

// Dealing with CORS
function crossOrigin(req,res,next){
	var allowHeaders = ['Accept', 'Accept-Version', 'Content-Type', 'Api-Version', 'Origin', 'X-Requested-With']; // added Origin & X-Requested-With
	res.header('Access-Control-Allow-Credentials', true);
	res.header('Access-Control-Allow-Headers', allowHeaders.join(', '));
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	//res.header('Access-Control-Allow-Origin', '*');
	if(req.method === 'OPTIONS') {
		res.send(204);
		return;
	}
	return next();
}

// The REST functions
function getAllBeers(req, res, next) {
	console.log('GET: all beers');

	res.send(200, beers);
	return next();
}
function getBeer(req, res, next) {
	console.log('GET: One beer by ID', req.params.beerId);

	for(var i = 0; i < beers.length; i++) {
		if(beers[i].id === req.params.beerId) {
			res.send(200, beers[i]);
			return;
		}
	}
}
function addBeer(req, res, next) {
	console.log('POST: Add beer', req.params);

	var beer = {
		id: beers.length + 1,
		firstName: req.params.firstName,
		surname: req.params.surname,
		email: req.params.email
	};
	beers.push(beer);

	res.send(201, beer);
	return next();
}
function updateBeer(req, res, next) {
	console.log('PUT: Update beer by ID', req.params.beerId, req.params);

	for(var i = 0; i < beers.length; i++) {
		if(beers[i].id === parseInt(req.params.beerId)) {
			beers[i].name = req.params.name;
			beers[i].brouwer = req.params.brouwer;
			break;
		}
	}

	res.send(204);
	return next();
}
function deleteBeer(req, res, next) {
	console.log('DELETE: Delete beer by ID', req.params.beerId);

	for(var i = 0; i < beers.length; i++) {
		if(beers[i].id === parseInt(req.params.beerId)) {
			beers.splice(i, 1);
			break;
		}
	}

	res.send(204);
	return next();
}
