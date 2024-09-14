import 'styled-components';
import light from './light';

declare module 'styled-components'{

    type themeType = typeof light;

    export interface defaultTheme extends ThemeType {}

}