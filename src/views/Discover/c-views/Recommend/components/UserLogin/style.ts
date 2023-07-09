import styled from 'styled-components';

export const UserLoginWrapper = styled.div`
  height: 126px;
  ${(props) => props.theme.bg('0 0', 'index.png')}

  .note {
    width: 205px;
    margin: 0 auto;
    padding: 16px 0;
    line-height: 22px;
    color: #666;
  }

  .btn-login {
    margin: 0 auto;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;
    ${(props) => props.theme.bg('0 -195px', 'index.png')}

    &:hover {
      background-position: -110px -195px;
    }
  }
`;
