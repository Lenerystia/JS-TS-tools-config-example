export default {
    extends: ['@commitlint/config-conventional'],
	plugins: ['commitlint-plugin-function-rules'],
	rules: {
		// 'header-max-length': [0], // level: disabled
	},
}