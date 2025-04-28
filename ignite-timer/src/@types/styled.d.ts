import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme // Guarda as propriedades do tema

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
