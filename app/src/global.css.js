import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
import "fonts/stylesheet.css";

export default createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 18px;
    line-height: 30px;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  * {
    box-sizing:border-box;
  }

  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'Avenir Book', Georgia, sans-serif;
    line-height: 1;
    font-size: 1.6rem;
    color: #2C3454;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }
  h1,h2,h3,.semi-bold-txt2{
    font-family: 'Avenir', Georgia, sans-serif;
  }
  h5{
    font-family: 'Avenir';
    font-size: 20px;
    font-weight: 500;
    margin: 15px 0px;
  }
  h4{
    font-family: 'Avenir',Georgia,sans-serif;
    font-size: 28px;
    line-height: 40px;
    font-weight: 700;
  }
  h1{
    font-size: 48px;
    line-height: 66px;
  }

  ol, ul {
    list-style: none;
    padding-left: 20px !important;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }
  p {
    line-height: 25px;
    font-size: 18px;
    line-height: 30px;
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: #2C3454;
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }
  #gatsby-focus-wrapper {
    float: none;
    max-width:1400px;
    margin:0 auto;
    width: 100%;
    >div{
      float: left;
      width: 100%;
      min-height: calc(100vh -10px);
    }
  }

  a:hover {
    opacity:.5;
  }
  .logo-app {
    display: block;
    width: 50px;
    margin-bottom: 20px;
    margin-top: 15px;
    img {
      display: block;
      max-width: 100%;
    }
  }
  .double-strong {
    font-family: 'Avenir',Georgia,sans-serif;
    font-weight: 900;
  }
  .strong {
    font-family:'Avenir',Georgia,sans-serif;
  }
  i {
    font-style: italic;
  }
  .hidden {
    display:none;
  }
  .banner-wrap  img.project-logo {
    margin: 0 auto 40px auto;
    display: block;
    height: 28px;
    width: auto;
  }
  .screeshot-wrapper {
    position: relative;
    display: flex;
    img {
      position:relative;
      z-index:1;
    }
  }
  .intro-wrapper {
    width: 400px;
    font-size: 25px;
    line-height: 26px;
    margin: 120px auto 180px;
    font-weight: 200;
    h1 {
      margin-bottom:24px;
    }
    .intro-box {
      margin-top:9px;
    }
    .me-into-p {
      font-size: 25px;
    line-height: 28px;
    }
  }
  .intro-footer {
    font-size: 13px;
    margin-top: 65px;
    margin-bottom: 50px;
    a {
      text-decoration: none;
      color: #2C3454;
    }
  }
  .about-wrapper {
    padding: 0px 80px;
    .about-desc {
      display: flex;
      width: 100%;
      padding: 100px;
    }
    .about-head {
      padding: 18px 60px 10px 0px;
      h3 {
        font-size: 36px;
        font-weight: 500;
        padding-right: 50px;
        line-height: 49px;
        font-family: 'Avenir',Georgia,sans-serif;
      }
      width: 30%;
    }
    .about-desc-left {
      font-size: 14px;
      font-weight: 300;
      margin-top: 18px;
      width: 70%;
      p {
        margin:0px 0px 9px 0px;
        font-size: 18px;
        line-height: 30px;
      }
      .contact-row {
        font-weight: 600;
      }
    }
  }
  .italic-text {
    font-family: 'Avenir Book';
    font-weight: normal;
    font-style: italic;
  }
  .space-block {
    height: 50px;
  }
  .download-resume {
    color: #2B7BFA;
    font-style: italic;
    padding-top: 8px;
    display: block;
    font-size: 14px;
  }
  .desc-row {
    margin-bottom: 40px;
  }
  .banner-wrap {
    width: 100%;
    overflow: hidden;
    border-radius: 20px;
    position: relative;
    margin-bottom: 40px;
    .floating-text {
      position: absolute;
      color: #FFFFFF;
      padding: 120px 100px;
      h3 {
        font-weight: 600;
        font-size: 36px;
        line-height: 49px;
      }
    }
    img {
      width:100%;
    }
  }
  .project-link {
    display: block;
  }
  .img-shadow {
    box-shadow: 5px 5px 40px 0px rgb(107 120 188 / 21%);
    border-radius: 10px;
    overflow: hidden;
  }


  .project-wrapper {
    padding: 24px 82px;
    .hor-space{
      padding:0px 50px;
    }

    .blue-bg{
      width: 100%;
      text-align: center;
      padding: 100px 100px 0px 100px;
      position:relative;
      h1 {
        font-size: 48px;
        line-height: 66px;
        font-weight: 500;
      }
      .project-desc {
        margin-top: 10px;
        line-height: 33px;
        font-size: 24px;
      }
      .project-date {
        opacity: .8;
        font-style: italic;
      }
      .overflow-image{
        margin-top:100px;
        overflow: hidden;
        border-radius: 20px;
        box-shadow: 0px 30px 60px 0px rgb(25 43 100 / 15%);
        margin-bottom:100px;
        img {
          display:block;
          max-width:100%;
        }
      }
    }
    h4 {
      margin-bottom:40px;
    }
    .blue-bg span {
      content:" ";
      display:block;
      height: 85%;
      border-radius: 20px;
      position:absolute;
      left:0;
      right:0;
      z-index:-1;
      top:0;
    }
    .resp-row {
      display: flex;
      padding: 50px 100px;
    }
    .resp-container > .img-col-1 {
      margin:0px 100px;
    }
    .resp-title {
      width: 30%;
      font-size: 36px;
      font-weight: 500;
      padding-right: 50px;
      line-height: 49px;
      font-family: 'Avenir',Georgia,sans-serif;
    }
    .resp-desc {
      width: 70%;
      font-size: 18px;
      line-height: 30px;
    }
    .step-container {
      background-color: #F7F8FA;
      border-radius: 20px;
      padding: 100px 100px;
      margin-top: 50px;
      margin-bottom: 100px;
    }
    .step-left {
      width: 30%;
      font-size: 26px;
      font-weight: 500;
      padding-right: 50px;
      line-height: 32px;
    }
    .quote {
      font-family: 'Avenir Book';
      font-weight: normal;
      font-style: italic;
      font-size: 24px;
      line-height: 33px;
    }
    .step-description {
      width: 70%;
      font-size: 18px;
      line-height: 30px;
      h5 {
        font-family: 'Avenir';
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 6px;
        margin-top: 24px;
      }
      h4 {
        font-weight: 800;
        font-size: 24px;
        line-height: 40px;
        margin-top: 80px;
        margin-bottom: 40px;
      }
      p {
        margin-bottom: 20px;
        font-size: 18px;
        line-height: 30px;
      }
    }
    .col-2-img, .img-col-2 {
      display: flex;
      justify-content: space-between;
      margin-top: 40px;
      margin-bottom: 50px;
      div{
        img{
          width: 100%
        }
        max-width: 48%;
        display:block;
      }
    }
    .img-col-2.flex-image {
      display: flex;
      justify-content: space-between;
      img {
        width: 60%;
      }
      img:first-child {
        width: 280px;
      }
    }
    .extra-top {
      margin-top:120px;
    }
    .img-col-space {
      padding:0px 50px;
    }
    .img-col-1 {
      margin-top: 40px;
      margin-bottom: 40px;
      > div {
        margin-bottom:9px;

      }
      img {
        width: 100%;
        display:block;
      }
    }
    .step-row {
      padding: 0px;
      display: flex;
    }
    .grid-container-4 {
      display: grid;
      grid-template-columns: auto auto;
      height:300px;
      .grid-item {
        padding: 20px;
        position:relative;
        height: 280px;
      }
      .float-box {
        font-style:italic;
      }
      .seq-head {
        font-size:14px;
        font-weight:bold;
      }
      .small-txt1 {
        font-size: 10px;
        line-height: 12px;
      }
      .float-box {
        font-style:italic;
        * {
          position:absolute;
        }
      }
      .semii-bold-txt1 {
        font-size:14px;
        font-size:18px;
        line-height: 30px;
        font-weight:bold;
      }
      .bold-txt1 {
        font-size:18px;
        line-height: 30px;
        font-weight:bold;
      }
      .regular-txt1 {
        font-size:18px;
        line-height: 30px;
      }
      .grid-1 {
        background-color:#E0F1FF;
        .small-txt1 {
          top: 60px;
          width: 140px;
        }
        .semii-bold-txt1 {
          right: 20px;
          top: 54px;
          width: 160px;
        }
        .bold-txt1 {
          top: 130px;
        }
        .regular-txt1 {
          top: 80%;
          left: 0;
          right: 0;
          text-align: center;
          margin: auto;
        }
      }
    }
    .space-top-20 {
      margin-top:20px;
    }
    .profile-card {
      display:flex;
      margin-bottom: 20px;
      margin-top: 40px;
      align-items: flex-end;
      .profile-round {
        display: block;
        width: 93px;
        border-radius: 10px 10px 10px 10px;
        overflow: hidden;
        height: 173px;
        img {
          width: 100%;
        }
      }
      .profile-desc {
        padding-left:26px;
        width: 78%;
      }
      .job-title {
        font-size: 18px !important;
        margin-bottom:6px;
      }
      .para-section {
        margin-top:20px;
      }
    }
    .space-block-2 {
      margin-top:120px;
      clear:both
    }
    .space-top-40 {
      margin-top:40px;
      clear:both;
    }
    .img-grid-4 {
      .col-2-img:first-child {
        margin-bottom:30px;
      }
      .col-2-img:last-child {
        margin-top:30px !important;
      }
    }
  }
  .no-margin {
    margin:0px !important;
  }
  .no-top-margin {
    margin-top:0px !important;
  }
  .no-top-padding {
    padding-top:0px !important;
  }
  .project-footer {
    .desc-row {
      margin-top:20px
    }
    h4 {
      margin-top: 40px;
      margin-bottom:40px;
      font-weight: 800;
      font-size: 18px;
      line-height: 30px;
    }
  }
  .resp-container.project-footer{
    .img-col-1 {
      margin: 40px 100px;
    }
  }
  .w-80-d {
    width:80%
  }
  .double-strong {
    font-weight:bold;
  }
  .footer-note {
    font-size: 12px;
    text-align: center;
    width: 35%;
    opacity: .5;
    margin: auto;
    padding: 40px;
  }
  @media only screen and (max-width: 1000px) {
    .intro-wrapper {
      width: 100%;
      font-size: 20px;
      line-height: 26px;
      margin: 40px auto 40px auto;
      font-weight: 200;
      padding: 0px 40px;
    }
    .intro-footer {
      font-size: 13px;
      margin-top: 15px;
      margin-bottom: 15px;
    }
    .w-80-d {
      width:100%
    }
    .about-wrapper {
      padding: 0px 24px;
      .about-desc {
        width: 100%;
        margin: 24px auto 24px auto;
        display: block;
        padding: 0px;
      }
      .about-desc-left {
        width: 100%;
      }
      .about-head {
        width: 100%;
      }
    }
    .italic-text {
      font-style: italic;
    }
    .project-wrapper {
      padding: 12px 24px;
      .blue-bg {
        padding: 50px 24px 0px 24px;
        .overflow-image {
          margin-top: 50px;
        }
        h1 {
          font-size:26px;
        }
      }
      .resp-row {
        display: block;
        padding: 12px;
        .resp-desc {
          width: 100%;
        }
      }
      .para-section {
        margin-top:20px;
        p {
          margin-bottom:20px
        }
      }
      .profile-desc {
        p {
          margin-bottom:0px
        }
      }
      .space-block-2 {
        margin-top: 40px;
      }
      .resp-title {
        width: 100%;
        margin-bottom: 9px;
      }
      .step-container {
        padding:12px;
        margin-bottom: 12px;
      }
      .step-row {
        padding: 12px;
        display: block;
        .step-left {
          width:100%;
        }
        step-description {
          width: 100%;
        }
      }
      .hor-space {
        padding: 0px 8px;
      }
      .step-description {
        width:100%;
      }
      .profile-card {
        display:block;
        .profile-round {
          display: block;
          width: 150px;
          border-radius: 20px;
          overflow: hidden;
          margin: 0px;
          height: 240px;
          img {
            height: auto;
            overflow: hidden;
            max-height: auto;
            width: 100;
            max-width: 100%;
          }
        }
        .profile-desc {
          padding-left: 0;
          width: 100%;
          padding-top: 20px;
        }
      }


    }
    .space-block {
      height: 10px;
    }
    .project-wrapper .img-col-1 {
      margin-top: 12px;
      margin-bottom: 12px;
    }
    .footer-note {
      width: 100%;
      padding: 0px 10px;
      float: left;
    }
    .banner-wrap  .floating-text {
      padding:24px 12px;
    }
    .resp-container.project-footer {
      padding: 0px 15px;
      .img-col-1 {
        margin: 12px 0px;
      }
    }
  }
  .role-box {
      width: 250px;
      border-radius: 8px;
      padding: 20px;
      justify-content: center;
      align-items: center;
      color: #2C3454;
      font-size: 14px;
  }
  .role-box .head {
    font-weight: 900;
  }
  .role-box p {
    font-size: 14px;
    line-height: 20px;
  }
  .grey-box {
    background: #F1F0EF;
  }
  .blue-box {
    background: #E0F2FF;
  }
  .role-box + div{
    margin-left:20px
  }
  .flex-user {
    display:flex
  }
  .user-persona {
    padding-right: 50px;
    img {
      max-width: 100%;
    }
  }
  .profile-pic {
    width: 200px;
  }
  .company-head {
    font-weight: 700;
  }
  .green-box {
    background:#C2ED97;
  }
  .img-row {
    display: flex;
    justify-content: space-between;
    text-align: center;
  }
  .col-1-img img {
    width: 85%;
  }
  .col-1-img h5 {
    font-size: 16px;
  }
`;
