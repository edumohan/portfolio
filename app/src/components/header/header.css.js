import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding: 0px 82px;
  margin-top: 60px;
  a {
    color: #2C3454;
    transition: color 0.2s ease;
    text-decoration: none;

    &:hover {
      opacity:.5;
    }
  }
  li.drop-wrapper {
    position: relative;
    min-height: 20px;
    .projects-list {
      display: none;
      position: absolute;
      top: 100%;
      border: solid 1px #e2e2e2;
      box-shadow: 0px 4px 4px rgb(0 0 0 / 13%);
      z-index: 99;
      background: #FFFFFF;
      padding: 12px 0px;
      a {
        display: block;
        padding: 12px 24px;
      }
    }
  }
  li.drop-wrapper:hover .projects-list {
    display:block
  }
  @media only screen and (max-width: 1000px) {
    margin-bottom: 24px;
    padding: 0px 24px;
    margin-top: 10px;
    justify-content: center;
    flex-direction: column;
    li.drop-wrapper:hover .projects-list,li.drop-wrapper:focus .projects-list  {
      display:none
    }
  }
`;
