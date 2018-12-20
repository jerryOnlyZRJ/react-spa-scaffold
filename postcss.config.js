module.exports = {
	plugins: {
		"autoprefixer": {
			browsers: ['> 1%', 'last 2 versions', 'Firefox >= 20', 'iOS >=7']
		},
		'postcss-preset-env': {
			stage: 0
		},
		'cssnano': {}
	}
}