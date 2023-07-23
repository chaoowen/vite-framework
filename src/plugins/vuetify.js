import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    light: '#F4F4F4',
    dark: '#656765',
    primary: '#70649A',
    'primary-light': '#BBB5CB',
    secondary: '#B8B5BD',
    'secondary-light': '#E4E1EB',
    error: '#B00020',
    info: '#C18A26',
    success: '#1B813E',
    warning: '#F7C242',
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  icons: {
    iconfont: 'mdi',
  },
  components,
  directives
})