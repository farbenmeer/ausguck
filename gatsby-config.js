module.exports = {
  pathPrefix: '/ausguck',
  plugins: [
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-theme-mdx-deck',
			options: {
				contentPath: 'decks',
				basePath: '/decks'
			}
		}
	],
}