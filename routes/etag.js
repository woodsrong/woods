/**
 * @module
 * @author woodsrong
 * @date 13-6-29
 */
var serverEtag = 10001;
exports.getinfo = function(req, res){
	var clientEtag = req.header('If-None-Match');
	res.set('Content-Type', 'application/json');
	if(serverEtag == clientEtag){
        res.set('ETag', serverEtag);
        res.set('OETag', clientEtag);
		res.send(304);
		console.log('304');
	}
	else {
        res.set('ETag', serverEtag);
        res.set('OETag', clientEtag);
		res.send(200, JSON.stringify({
			msg: 'success' + serverEtag + 'v=' + Math.random()
		}));
		console.log('200');
	}
};
exports.clear = function(req, res){
	serverEtag++;
	res.send(200, 'success' + serverEtag);
};