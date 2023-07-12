import styled from 'styled-components';

export const MusicPlayMenuWrap = styled.div`
  height: 53px;
  width: 100%;
  z-index: 1002;
  ${(props) => props.theme.pos('fixed', { b: 0, l: 0, r: 0 })}
  ${(props) => props.theme.bg('0 0', 'playbar.png')}
  background-repeat: repeat-x;
`;

export const UpdownWrap = styled.div`
  position: relative;
  z-index: 11;

  .left {
    width: 52px;
    height: 67px;
    ${(props) => props.theme.bg('0 -380px', 'playbar.png')}
    ${(props) => props.theme.pos('absolute', { t: '-14px', r: '15px' })}

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      cursor: pointer;
      ${(props) => props.theme.bg('0 9999px', 'playbar.png')}
      ${(props) => props.theme.geneIcon('&.lock', '-100px -380px', '-100px -400px')}
      ${(props) => props.theme.geneIcon('&.unlock', '-80px -380px', '-80px -400px')}
    }
  }

  .right {
    width: 15px;
    height: 54px;
    pointer-events: none;
    ${(props) => props.theme.pos('absolute', { t: '-1px', r: 0 })}
    ${(props) => props.theme.bg('-52px -393px', 'playbar.png')}
  }
`;

export const PlayBar = styled.div`
  width: 980px;
  height: 47px;
  z-index: 15;
  transform: translateX(-50%);
  ${(props) => props.theme.flexRow('space-between', 'center')}
  ${(props) => props.theme.pos('absolute', { l: '50%', b: 0 })}
`;
