import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string;
      secondary: string;
    };
    typography: {
      base: {
        fontFamily: string;
        lineHeight: number;
      };
      h1: {
        fontSize: number;
        fontWeight: number | string;
      };
      h2: {
        fontSize: number;
        fontWeight: number | string;
      };
      h3: {
        fontSize: number;
        fontWeight: number | string;
      };
      h4: {
        fontSize: number;
        fontWeight: number | string;
      };
      body: {
        fontSize: number;
        textAlign: CSSObject.textAlign;
      };
    };
  }
}
