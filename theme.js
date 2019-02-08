import theme from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'

export default {
  ...theme,

  css: {
    ...theme.css,
    backgroundImage: 'url(./images/background.svg)',
    backgroundPosition: 'top right',
    backgroundRepeat: 'no-repeat'
  },

  colors: {
    ...theme.colors,
    text: 'rgb(61, 77, 101)'
  },

  prism: {
    style: okaidia
  }

  // Customize your presentation theme here.
  //
  // Read the docs for more info:
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
  // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
}
