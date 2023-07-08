import styled from 'styled-components';

export const SongItemWrap = styled.div`
  margin: 0 42px 30px 0;
  width: 140px;
  overflow: hidden;
  line-height: 1.4;

  .cover {
    position: relative;
    width: 140px;
    height: 140px;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mask {
      width: 100%;
      height: 100%;
      ${(props) => props.theme.pos('absolute', { t: 0, l: 0 })}
      ${(props) => props.theme.bg('0 0', 'coverall.png')}
    }
  }

  .dec {
    max-width: 100%;
    margin: 8px 0 3px;
    vertical-align: middle;
    color: #000;
    white-space: break-spaces;
    word-break: break-all;
    ${(props) => props.theme.hoverUdLine}
  }
`;

export const BottomWrap = styled.div`
  padding: 0 8px;
  width: 100%;
  height: 27px;
  color: #ccc;
  ${(props) => props.theme.pos('absolute', { l: 0, b: 0 })}
  ${(props) => props.theme.flexRow('space-between', 'center')}
  ${(props) => props.theme.bg('0 -537px', 'coverall.png')}

  .icon-headset {
    display: inline-block;
    width: 14px;
    height: 11px;
    ${(props) => props.theme.bg('0 -24px', 'iconall.png')}
  }

  .icon-play {
    display: inline-block;
    width: 16px;
    height: 17px;
    ${(props) => props.theme.bg('0 0', 'iconall.png')}
  }

  .count {
    font-size: 12px;
    margin-left: 5px;
  }
`;
