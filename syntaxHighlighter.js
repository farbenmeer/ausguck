import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import okaidia from 'react-syntax-highlighter/dist/esm/styles/prism/okaidia'

const getLanguage = className => {
	if (!className) return 'javascript'

  const match = /language-(\w*)/.exec(className)
	
  return match?.[1] || 'javascript'
}

const pre = props => props.children

const code = props => {
  const language = getLanguage(props.className)
  return <SyntaxHighlighter language={language} {...props} style={okaidia} />
}

export default {
  components: {
    pre,
    code
  }
}
