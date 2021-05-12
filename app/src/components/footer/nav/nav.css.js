import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    justify-content: center;
    a {
      font-size: 16px;
      font-weight: 500;
      text-transform: capitalize;
    }
    a:hover {
      opacity: .5;
    }

    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      margin:0 24px
    }
  }
  .foot-nav {
    margin-top: 40px;
  }
  .foot-nav {
    a{
      font-size: 14px;
      text-transform: capitalize;
    }
  }
  .project-links{
    a {
      font-size:20px;
    }
  }
  @media only screen and (max-width: 1000px) {
    ul {
      display: block;
      text-align:center;
      li {
        display:inline-block;
        margin-top:20px;
        width:50%;
      }
    }
  }
`;
