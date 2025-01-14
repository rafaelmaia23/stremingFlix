import { createGlobalStyle } from "styled-components";
import "normalize.css";

const GlobalStyles = createGlobalStyle`

:root {
    --light-purple: #E7BDF2;
    --medium-purple: #DAA0F2;
    --cool-gray: #D8E0F2;
    --vibrant-blue: #056CF2;
    --aqua-blue: #88DFF2;
    --charcoal-gray: #282C34;
    --black: #000000;
    --white: #FFFFFF;
}

body {
    background-color: var(--charcoal-gray);
    font-family: 'Lato', sans-serif;
}
`;

export default GlobalStyles;
