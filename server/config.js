const path = require('path');
module.exports = {
	port: 3000,
	publicDir: path.join(__dirname,'../public'),
	game: {
		start: { x: 0, y: 0, angle: 0}
	}
}