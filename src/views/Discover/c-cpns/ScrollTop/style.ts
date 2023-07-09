import styled from 'styled-components';

export const ScrollTopWrap = styled.div.attrs({
  title: '回到顶部'
})`
  > div {
    position: fixed;
    left: 50%;
    margin-left: 500px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    z-index: 9999;
    cursor: pointer;
    ${(props) => props.theme.bg('-265px -47px', 'sprite.png')}
  }
`;
