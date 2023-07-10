import styled from 'styled-components';

export const RankingItemWrap = styled.div`
  width: 229px;

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
    ${(props) => props.theme.hoverUdLine}
  }

  &:nth-child(2) {
    width: 230px;
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
      ${(props) => props.theme.bg('0 9999px', 'index.png')}
      ${(props) => props.theme.geneIcon('&.play', '-267px -205px', '-267px -235px')}
      ${(props) => props.theme.geneIcon('&.collec', '-300px -205px', '-300px -235px')}
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
      ${(props) => props.theme.bg('0 9999px', 'index.png')}

      &:not(:last-child) {
        margin-right: 10px;
      }

      ${(props) => props.theme.geneIcon('&.play', '-267px -268px', '-267px -288px')}
      ${(props) => props.theme.geneIcon('&.collect', '-297px -268px', '-297px -288px')}

      &.add {
        margin-top: 2px;
        margin-right: 6px;
        ${(props) => props.theme.bg('0 -700px', 'icon.png')}

        &:hover {
          background-position: -22px -700px;
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
