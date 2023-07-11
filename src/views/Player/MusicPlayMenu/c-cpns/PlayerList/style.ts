import styled from 'styled-components';

export const PlayListWrap = styled.div`
  ${(props) => props.theme.pos('absolute', { l: '50%', b: '47px' })}
  width: 986px;
  height: 301px;
  transform: translateX(-50%);
`;

export const ListHeader = styled.div`
  padding: 0 5px;
  height: 41px;
  ${(props) => props.theme.flexRow('space-around', 'center')}
  ${(props) => props.theme.bg('0 0', 'playlist_bg.png')}

  > h4 {
    font-size: 14px;
    color: #e2e2e2;
    font-weight: bold;
  }

  > .oper {
    width: 270px;
    ${(props) => props.theme.flexRow('flex-end', 'center')}

    .collect,.clear {
      color: #ccc;
      cursor: pointer;
      ${(props) => props.theme.flexRow('', 'center')}

      .icon {
        width: 16px;
        height: 16px;
        margin-right: 6px;
        ${(props) => props.theme.bg('-24px 0', 'playlist.png')}
      }

      &:hover {
        color: #e2e2e2;
        text-decoration: underline;
      }
    }

    .collect:hover .icon {
      background-position: -24px -20px;
    }
    .clear .icon {
      margin-top: 3px;
    }

    .line {
      margin: 0 10px;
      height: 15px;
      border-left: 1px solid #000;
      border-right: 1px solid #2c2c2c;
    }

    ${(props) => props.theme.geneIcon('.clear .icon', '-51px 0', '-51px -20px')}
  }

  > .song-name {
    width: 346px;
    text-align: center;
    height: 39px;
    line-height: 39px;
    color: #fff;
    font-size: 14px;
    ${(props) => props.theme.tEllipsis()}
  }

  > .icon-close {
    display: block;
    width: 30px;
    height: 30px;
    overflow: hidden;
    text-indent: -999px;
    cursor: pointer;
    ${(props) => props.theme.bg('-195px 9px', 'playlist.png')}

    &:hover {
      background-position: -195px -21px;
    }
  }
`;

export const ListBody = styled.div`
  width: 982px;
  margin-left: 2px;
  height: 260px;
  background-color: #121212;
  ${(props) => props.theme.bg('-1014px 0', 'playlist_bg.png', '100% 100%')}
  background-repeat: repeat-y;

  .lyric-container {
    margin: 0 auto;
    width: 600px;
    height: 100%;
    overflow: hidden;

    .lyric-roller {
      margin: 8px auto;
      width: 354px;
      color: #989898;
      text-align: center;
      transition: transform 0.7s linear;

      > p {
        min-height: 37px;
        line-height: 37px;
        font-size: 12px;
        color: #989898;
        transform: all 0.7s linear;

        &.active {
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
`;
