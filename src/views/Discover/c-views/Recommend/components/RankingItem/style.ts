import styled from 'styled-components';

export const RankingItemWrap = styled.div`
  width: 230px;

  .top {
    display: flex;
    height: 120px;
    padding: 20px 0 0 19px;
  }

  .bottom {
    height: 319px;
    margin-left: 15px;
    line-height: 32px;
  }

  .look-more {
    height: 32px;
    margin-right: 32px;
    text-align: right;
    line-height: 32px;
    font-size: 12px;
    ${(props) => props.theme.hoverUdLine}
  }
`;

export const TopCover = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
  cursor: pointer;

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  .mask {
    width: 100%;
    height: 100%;
    ${(props) => props.theme.pos('absolute', { l: 0, t: 0 })}
    ${(props) => props.theme.bg('-145px -57px', 'coverall.png')}
  }
`;

export const TopInfo = styled.div`
  width: 116px;
  margin: 6px 0 0 10px;
  .name {
    width: 100%;
    color: #333;
    font-weight: bold;
    ${(props) => props.theme.tEllipsis()}
    ${(props) => props.theme.hoverUdLine}
  }
  .btn-icon {
    margin-top: 10px;
    color: #333;

    .icon {
      display: inline-block;
      width: 22px;
      height: 22px;
      margin-right: 10px;
      cursor: pointer;

      &.play {
        ${(props) => props.theme.bg('-267px -205px', 'index.png')}

        &:hover {
          ${(props) => props.theme.bg('-267px -235px', 'index.png')}
        }
      }

      &.collect {
        ${(props) => props.theme.bg('-300px -205px', 'index.png')}

        &:hover {
          ${(props) => props.theme.bg('-300px -235px', 'index.png')}
        }
      }
    }
  }
`;

export const BottomItem = styled.div`
  position: relative;
  height: 32px;
  ${(props) => props.theme.flexRow('', 'center')}

  .order {
    width: 35px;
    height: 32px;
    text-align: center;
    color: #666;
    font-size: 16px;

    &.top3 {
      color: #c10d0c;
    }
  }

  .name {
    width: 170px;
    height: 32px;
    font-size: 12px;
    ${(props) => props.theme.tEllipsis()}
    ${(props) => props.theme.hoverUdLine}
  }

  .opr {
    display: none;
    align-items: center;
    width: 67px;

    .icon {
      width: 17px;
      height: 17px;
      cursor: pointer;

      &:not(:last-child) {
        margin-right: 10px;
      }

      &.play {
        ${(props) => props.theme.bg('-267px -268px', 'index.png')}

        &:hover {
          ${(props) => props.theme.bg('-267px -288px', 'index.png')}
        }
      }

      &.add {
        margin-top: 2px;
        margin-right: 6px;
        ${(props) => props.theme.bg('0 -700px', 'icon.png')}

        &:hover {
          ${(props) => props.theme.bg('-22px -700px', 'icon.png')}
        }
      }

      &.collect {
        ${(props) => props.theme.bg('-297px -268px', 'index.png')}

        &:hover {
          ${(props) => props.theme.bg('-297px -288px', 'index.png')}
        }
      }
    }
  }

  &:hover {
    .name {
      width: 96px;
    }
    .opr {
      display: flex;
    }
  }
`;
