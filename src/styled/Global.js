import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        color: #333;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 300;
    }

    h1, h2 {
        margin-bottom: 2rem;
    }


`;
