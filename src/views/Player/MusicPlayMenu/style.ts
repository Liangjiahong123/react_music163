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

    .icon-lock {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      cursor: pointer;
      ${(props) => props.theme.bg('-100px -380px', 'playbar.png')}

      &:hover {
        background-position: -100px -400px;
      }
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

interface IControl {
  isPlaying: boolean;
}
export const Control = styled.div<IControl>`
  ${(props) => props.theme.flexRow('', 'center')}

  .prev,.next, .play {
    margin-right: 8px;
    margin-top: 5px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    ${(props) => props.theme.bg('0 9999px', 'playbar.png')}
  }

  .prev {
    background-position: 0 -130px;
    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    margin-top: 0;
    width: 36px;
    height: 36px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};

    &:hover {
      background-position: -40px ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`;

export const MusicInfo = styled.div`
  ${(props) => props.theme.flexRow('', 'flex-end')}
  .avatar {
    position: relative;
    margin-right: 15px;
    width: 34px;
    height: 34px;
    background-color: red;

    img {
      width: 34px;
      height: 34px;
    }

    .mask {
      width: 34px;
      height: 35px;
      ${(props) => props.theme.pos('absolute', { l: 0, t: 0 })}
      ${(props) => props.theme.bg('0 -80px', 'playbar.png')}
    }
  }

  .player {
    position: relative;
    display: flex;
    .process {
      width: 466px;
      height: 9px;
      ${(props) => props.theme.bg('0 9999px', 'statbar.png')}

      &.show {
        background-position: right 0;

        .cur {
          width: 20%;
          background-position: left -66px;
          ${(props) => props.theme.pos('absolute', { l: 0, t: 0 })}
        }

        .buffer {
          width: 70%;
          background-position: right -30px;
        }
      }
    }

    .time {
      overflow: hidden;
      margin-top: -4px;
      margin-left: 15px;
      color: #797979;
      text-shadow: 0 1px 0 #121212;

      .cur-time {
        color: #a1a1a1;
        text-align: left;
      }
    }
  }
`;

export const Operator = styled.div``;
