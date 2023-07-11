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
  ${(props) => props.theme.geneIcon('.prev ', '0 -130px', '-30px -130px')}

  .play {
    margin-top: 0;
    width: 36px;
    height: 36px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};

    &:hover {
      background-position: -40px ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  ${(props) => props.theme.geneIcon('.next ', '-80px -130px', '-110px -130px')}
`;

export const MusicInfo = styled.div`
  margin-top: -4px;
  ${(props) => props.theme.flexRow('', 'flex-end')}

  .avatar {
    position: relative;
    margin-right: 15px;
    width: 34px;
    height: 34px;
    background-color: red;

    img {
      display: block;
      width: 34px;
      height: 34px;
      object-fit: cover;
    }

    .mask {
      width: 34px;
      height: 35px;
      ${(props) => props.theme.pos('absolute', { l: 0, t: 0 })}
      ${(props) => props.theme.bg('0 -80px', 'playbar.png')}
    }
  }

  .player {
    ${(props) => props.theme.flexRow('', 'flex-end')}
    ${(props) => props.theme.pos('relative', { t: '-4px' })}

    .time {
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

export const SongContent = styled.div`
  ${(props) => props.theme.flexRow('', 'center')}
  height: 28px;
  overflow: hidden;
  color: #e8e8e8;
  text-shadow: 0 1px 0 #171717;
  line-height: 28px;

  .name {
    max-width: 300px;
    ${(props) => props.theme.tEllipsis()}
    ${(props) => props.theme.hoverUdLine}
  }

  .mv {
    margin-top: 3px;
    margin-left: 6px;
    width: 19px;
    height: 17px;
    ${(props) => props.theme.bg('0 -57px', 'playbar.png')};
    &:hover {
      background-position: -20px -57px;
    }
  }

  .artists {
    max-width: 220px;
    margin-left: 15px;
    color: #9b9b9b;
    ${(props) => props.theme.tEllipsis()}
    .author {
      ${(props) => props.theme.hoverUdLine}
    }
  }

  .ranking-link {
    display: block;
    margin-left: 13px;
    width: 14px;
    height: 15px;
    ${(props) => props.theme.bg('-110px -103px', 'playbar.png')};

    &:hover {
      background-position: -130px -103px;
    }
  }
`;

export const Process = styled.div`
  position: relative;
  top: 2px;
  width: 466px;
  height: 9px;
  ${(props) => props.theme.bg('right 0', 'statbar.png')}

  .ant-slider {
    margin: 0;
    padding: 0;
    height: 9px;
    width: 100%;
    ${(props) => props.theme.pos('absolute', { l: 0, t: 0 })}

    .ant-slider-rail,.ant-slider-track,.ant-slider-step {
      height: 9px;
    }
    .ant-slider-track {
      border-radius: 50px;
      background-color: rgba(199, 12, 12, 1);
    }

    .ant-slider-handle {
      width: 0;
      height: 0;
      inset-block-start: unset;
      &::before {
        display: none;
        width: 12px;
        height: 12px;
        background-image: url(${require('@img/loading.gif')});
        ${(props) => props.theme.pos('absolute', { l: '5px', t: '5px' })}
      }

      &::after {
        content: '';
        width: 22px;
        height: 22px;
        z-index: 999;
        box-shadow: none;
        cursor: default;
        background-color: transparent;
        transition: none;
        ${(props) => props.theme.pos('absolute', { l: '-10px', t: '-7px' })}
        ${(props) => props.theme.bg('0 -250px', 'iconall.png')}
      }

      &:hover::after {
        background-position: 0 -280px;
      }
    }
  }

  .buffer {
    width: 0%;
    height: 9px;
    ${(props) => props.theme.bg('right -30px', 'statbar.png')}
  }
`;

interface IOperProps {
  playMode: number;
}
export const Operator = styled.div<IOperProps>`
  ${(props) => props.theme.flexRow('', 'flex-start')}

  .left {
    ${(props) => props.theme.flexRow('', 'center')}

    .oper {
      width: 25px;
      height: 25px;
      cursor: pointer;
      ${(props) => props.theme.bg('0 9999px', 'playbar.png')}

      &.pip {
        ${(props) => props.theme.bg('0 0', 'iconpip.png')}

        &:hover {
          background-position: 0 -25px;
        }
      }
      ${(props) => props.theme.geneIcon('&.collect', '-88px -163px', '-88px -189px')}
      ${(props) => props.theme.geneIcon('&.share', '-114px -163px', '-114px -189px')}
    }
  }

  .right {
    position: relative;
    padding-left: 13px;
    ${(props) => props.theme.flexRow('', 'center')}
    ${(props) => props.theme.bg('-144px -250px', 'playbar.png')}

    .ctrl {
      width: 25px;
      height: 25px;
      cursor: pointer;
      ${(props) => props.theme.bg('0 9999px', 'playbar.png')}
      ${(props) => props.theme.geneIcon('&.volume', '-2px -248px', '-31px -248px')}
      ${(props) => {
        switch (props.playMode) {
          case 1:
            return props.theme.geneIcon('&.playmode', '-66px -248px', '-93px -248px');
          case 2:
            return props.theme.geneIcon('&.playmode', '-66px -344px', '-93px -344px');
          default:
            return props.theme.geneIcon('&.playmode', '-3px -344px', '-33px -344px');
        }
      }}
    }
    .add {
      position: relative;
      cursor: pointer;

      .list {
        display: block;
        width: 38px;
        height: 25px;
        padding-left: 21px;
        line-height: 27px;
        text-align: center;
        color: #666;
        font-style: normal;
        text-shadow: 0 1px 0 #080707;
        ${(props) => props.theme.bg('-42px -68px', 'playbar.png')}

        &:hover {
          background-position: -42px -98px;
        }
      }

      .tip {
        display: none;
        width: 152px;
        height: 49px;
        text-align: center;
        color: #fff;
        line-height: 37px;
        ${(props) => props.theme.pos('absolute', { l: '-65px', t: '-51px' })}
        ${(props) => props.theme.bg('0 -287px', 'playbar.png')}
      }
    }
    > .tip {
      display: none;
      width: 81px;
      height: 39px;
      line-height: 34px;
      text-align: center;
      color: #fff;
      ${(props) => props.theme.pos('absolute', { l: '12px', t: '-35px' })}
      ${(props) => props.theme.bg('0 -457px', 'playbar.png')}
    }
  }
`;
