import 'styled-components';

// and extend them!
declare module 'styled-components' {
  interface Direction<T = string | number> {
    l?: T;
    r?: T;
    t?: T;
    b?: T;
  }

  export interface DefaultTheme {
    bg(p: string, n: string, s?: string): string;
    flexRow(jc: string, al: string): string;
    pos(type: string, direction: Direction): string;
    tEllipsis(line?: number): string;
    hoverUdLine: string;
  }
}
