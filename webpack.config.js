const path = require('path');

 
const phaserModule = path.join(__dirname, '/node_modules/phaser/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js'),
  pixi = path.join(phaserModule, 'build/custom/pixi.js'),
  p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
	entry: {
    app: './public/js/main.js'
  },
  devtool: 'cheap-source-map',
	output: { filename: './public/bundle.js' },
	module: {
        loaders: [
            { test: /pixi.js/, loader: "script-loader" },
            { test: /p2.js/, loader: "script-loader" }
            // { test: /\.js?$/, loader: 'babel-loader', query: { presets: ['es2015'] } }
        ]
    },
  // watch: true,
	resolve: {
        alias: {
            'phaser': phaser,
            'pixi': pixi,
            'p2': p2,
        }
    }
}
