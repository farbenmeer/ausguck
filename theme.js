import { swiss } from '@mdx-deck/themes'
import syntaxHighligher from './syntaxHighlighter'

export default {
  ...swiss,
  ...syntaxHighligher,

  styles: {
    ...swiss.styles,
    Slide: {
      textAlign: 'center',
      fontSize: '48px',
      backgroundImage: 'url(https://farbenmeer.de/draft.svg)',
      backgroundPosition: 'top right',
      backgroundRepeat: 'no-repeat'
    },
    table: {
      textAlign: 'left'
    },
    td: {
      paddingRight: '0.5em',
      paddingTop: '0.25em',
      paddingBottom: '0.25em',
      borderBottom: '1px solid',
      verticalAlign: 'top'
    },
    a: {
      color: 'rgb(0, 119, 204)'
    },
    ul: {
      textAlign: 'left'
    },
    ol: {
      textAlign: 'left'
    },
  },

  colors: {
    ...swiss.colors,
    background: '#fff',
    text: 'rgb(61, 77, 101)'
  }
};
