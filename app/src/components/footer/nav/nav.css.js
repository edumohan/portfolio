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
  .more-questions {
    display: block;
    text-align: center;
    font-size: 32px;
    font-weight: bold;
    margin: 120px 0px 40px 0px;
    p {
      margin-bottom: 6px;
    }
  }
  .foot-nav {
    a{
      font-size: 16px;
      text-transform: capitalize;
    }
  }
`;
