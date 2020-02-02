module.exports = {
	files: {
		javascripts: {
			joinTo: {
				'app.js': 'app/**/*.js'
			}
		},
		stylesheets: { joinTo: 'app.css' }
	},
	paths: {
		public: './lib'
	},
	plugins: {
		babel: {
			presets: [ 'latest', 'react' ]
		}
	}
};
