// src/assets/styles/global-styles.ts
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

// 위에서 받은 `normalize`로 기본 css가 초기화 합니다.
const GlobalStyle = createGlobalStyle`
  ${reset}
  ${normalize}

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  p {
    line-height: 1.5;
  }

  @media (max-width: 252px) {
    html {
      font-size: 7px;
    }
  }
  @media (min-width: 253px) and (max-width: 270px) {
    html {
      font-size: 7.5px;
    }
  }
  @media (min-width: 271px) and (max-width: 288px) {
    html {
      font-size: 8px;
    }
  }
  @media (min-width: 289px) and (max-width: 306px) {
    html {
      font-size: 8.5px;
    }
  }
  @media (min-width: 307px) and (max-width: 324px) {
    html {
      font-size: 9px;
    }
  }
  @media (min-width: 325px) and (max-width: 342px) {
    html {
      font-size: 9.5px;
    }
  }
  @media (min-width: 343px) and (max-width: 360px) {
    html {
      font-size: 10px;
    }
  }
  @media (min-width: 361px) and (max-width: 375px) {
    html {
      font-size: 10.416px;
    }
  }
  @media (min-width: 376px) and (max-width: 378px) {
    html {
      font-size: 10.5px;
    }
  }
  @media (min-width: 379px) and (max-width: 396px) {
    html {
      font-size: 11px;
    }
  }
  @media (min-width: 397px) and (max-width: 414px) {
    html {
      font-size: 11.5px;
    }
  }
  @media (min-width: 415px) and (max-width: 432px) {
    html {
      font-size: 12px;
    }
  }
  @media (min-width: 433px) and (max-width: 451px) {
    html {
      font-size: 12.5px;
    }
  }

  @media (min-width: 451px) and (max-width: 481px) {
    html {
      font-size: 13px;
    }
  }

  /* 
    ##Device = Low Resolution Tablets, Mobiles (Landscape)
    ##Screen = B/w 481px to 767px
  */

  @media (min-width: 481px) and (max-width: 767px) {
    html {
      font-size: 13.5px;
    }
  }

  /* 
    ##Device = Tablets, Ipads (landscape)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) and (orientation: landscape) {
    html {
      font-size: 13.5px;
    }
  }

  /* 
    ##Device = Tablets, Ipads (portrait)
    ##Screen = B/w 768px to 1024px
  */

  @media (min-width: 768px) and (max-width: 1024px) {
    html {
      font-size: 13.5px;
    }
  }

  /* 
    ##Device = Laptops, Desktops
    ##Screen = B/w 1025px to 1280px
  */

  @media (min-width: 1025px) {
    html {
      font-size: 13.5px;
    }
  }

`;

export default GlobalStyle;
