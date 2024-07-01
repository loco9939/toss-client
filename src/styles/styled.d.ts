import Theme from '@/types/theme';

import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
