const config = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {}
	},

	plugins: [require('flowbite/plugin'), ('tw-elements/dist/plugin'), ('@tailwindcss/forms'),('@tailwindcss/aspect-ratio')],

	
	darkMode: 'class'
};

module.exports = config;
