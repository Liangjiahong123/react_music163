import styled from 'styled-components';

export const HeaderWrap = styled.div`
  position: relative;
  z-index: 1000;
  background: #242424;

  .header-container {
    width: 1100px;
    height: 70px;
    border-bottom: 1px solid #000;
    margin: 0 auto;
    display: flex;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeftWrap = styled.div`
  display: flex;
  ${(props) => props.theme.bg('0 9999px', 'topbar.png')};
  .logo {
    display: block;
    width: 176px;
    height: 70px;
    text-indent: -9999px;
    background-position: 0 0;
  }

  .nav-list {
    display: flex;
    .item {
      position: relative;
      a {
        display: block;
        height: 70px;
        line-height: 70px;
        padding: 0 19px;
        color: #ccc;
        cursor: pointer;

        &:hover,
        &.active {
          background: #000;
          color: #fff;
        }

        &.active .icon {
          transform: translate(-50%, 0);
          display: inline-block;
          width: 12px;
          height: 7px;
          ${(props) => props.theme.pos('absolute', { l: '50%', b: '-2px' })}
          background-position: -226px 0;
        }
      }
    }
  }
`;

export const HeaderRightWrap = styled.div`
  ${(props) => props.theme.flexRow('', 'center')}

  .search {
    width: 158px;
    height: 32px;
    background-color: #fff;
    border-radius: 16px;

    .ant-input:placeholder-shown {
      line-height: 1;
    }
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    margin-right: 12px;
    border: 1px solid #4f4f4f;
    color: #ccc;
    border-radius: 20px;
    margin: 0 20px;
    cursor: pointer;
  }

  .login {
    display: block;
    width: 28px;
    color: #787878;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
