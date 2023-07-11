import styled from 'styled-components';

export const MusicInfoWrap = styled.div`
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
