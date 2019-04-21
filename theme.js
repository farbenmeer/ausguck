import theme, {syntaxHighlighterPrism} from '@mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'

export default syntaxHighlighterPrism({
  ...theme,

  css: {
    ...theme.css,
    backgroundImage: 'url(../decks/images/background.svg)',
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
});
