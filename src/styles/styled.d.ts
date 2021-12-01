import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      hilight: string;
      text: string;
      primary: string;
      success: string;
    };
  }
}
