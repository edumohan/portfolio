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
      font-family: 'proxima-nova-semi-bold',Georgia,sans-serif;
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
    margin: 100px 0px 80px 0px;
    p {
      margin-bottom: 12px;
      font-size: 26px;
      font-family: 'proxima-nova-semi-bold',Georgia,sans-serif;
    }
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
`;
