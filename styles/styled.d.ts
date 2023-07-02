import { Header } from "components/templates/Header";
// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    header: {
      toggleContainerBgColor: string;
      toggleBgColor: string;
    };
    textColor: string;
    bgColor: string;
    btnColor: string;
  }
}
