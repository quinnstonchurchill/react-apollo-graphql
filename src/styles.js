import { injectGlobal } from 'styled-components'


export const theme = {
  layout: {
    maxWidth: `${1000 / 16}rem`,
  },
  color: {
    primary: 'lightgrey',
    white: '#FFFFFF',
    black: '#000000',
  },
}

const breakpoints = {
  xs: 340,
  sm: 550,
  md: 768,
  lg: 1000,
  xl: 1200,
  xxl: 1600,
}

export const mediaQueries = Object.keys(breakpoints).reduce((obj, size) => {
  obj[size] = `@media (min-width: ${breakpoints[size] / 16}rem)`
  return obj
}, {})

const injectGlobalStyles = () => injectGlobal`
  html,
  body,
  #__next {
    height: 100%;
  }
  
  body {
    min-width: 326px;
  }
  body,
  textarea,
  input,
  button,
  label {
    font-family: Montserrat, sans-serif;
    -webkit-font-smoothing: antialiased;
  }
`

export default injectGlobalStyles
