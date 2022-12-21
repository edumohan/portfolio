import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 0px;
  padding:80px 82px;
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
  
  @media only screen and (max-width: 1000px) {
    float: left;
    width: 100%;
    padding:50px 0px;
    margin:50px 0px;
  }
`;
