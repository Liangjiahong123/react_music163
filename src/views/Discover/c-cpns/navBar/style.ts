import styled from 'styled-components';

export const NavBarWrap = styled.div`
  background-color: #c20c0c;
  .nav-list {
    width: 1100px;
    height: 30px;
    margin: 0 auto;
    border-bottom: 1px solid #a40011;
    padding-left: 180px;

    a {
      display: inline-block;
      padding: 0 13px;
      margin: 3px 17px 0;
      border-radius: 20px;
      height: 20px;
      line-height: 20px;
      color: #fff;
      font-size: 12px;

      &.active {
        background: #9b0909;
      }
    }
  }
`;
