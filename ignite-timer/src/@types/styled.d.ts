import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

// Esse arquivo serve para sobrescrever tipagem do stylede-components

type ThemeType = typeof defaultTheme // Guarda as propriedades do tema

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
