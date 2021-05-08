import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 70px;
  padding: 100px 82px;
  margin-top: 100px;
  background-color:#F4F8FE;
  a {
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }
  nav {
    margin:0 auto;
  }
  .footer-note {
    margin: 120px auto 0px auto;
    font-size: 12px;
    text-align: center;
    width: 35%;
    opacity: .5;
}
  @media only screen and (max-width: 1000px) {
    float: left;
    width: 100%;
    padding:0;
    margin:50px 0px;
    .footer-note {
      width: 100%;
      padding:0px 10px;
    }
  }
`;
