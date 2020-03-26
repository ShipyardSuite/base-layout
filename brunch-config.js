// See http://brunch.io for documentation.
exports.files = {
	javascripts: {
		joinTo: {
			'vendor.js': /^(?!src)/,
			'index.js': /^src/
		}
	},
	stylesheets: { joinTo: 'app.css' }
};

exports.modules = {
	nameCleaner: (path) => path.replace(/^src\//, '')
};

exports.paths = {
	watched: [ 'src' ],
	public: 'dist'
};

exports.plugins = {
	babel: { presets: [ 'latest', 'react' ] }
};
