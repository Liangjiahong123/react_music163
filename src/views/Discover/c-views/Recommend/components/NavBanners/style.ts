import styled from 'styled-components';

interface BannerProps {
  bgImage?: string;
}

export const NavBannersWrap = styled.div<BannerProps>`
  background: url(${(props) => props.bgImage}) center center / 6000px;

  .banner-container {
    position: relative;
    display: flex;
    width: 982px;
    height: 285px;
    margin: 0 auto;
  }
`;

export const BannersLeft = styled.div`
  width: 730px;
  overflow: hidden;

  .banner-list {
    position: relative;

    .banner-item {
      width: 100%;
      height: 285px;
      object-fit: cover;
      cursor: pointer;
      ${(props) => props.theme.pos('absolute', { t: 0, l: 0 })}
    }

    .fade-enter {
      opacity: 0.2;
    }

    .fade-enter-active {
      opacity: 1;
      transition: opacity 0.5s ease-in;
    }

    .fade-exit {
      opacity: 1;
    }

    .fade-exit-active {
      opacity: 0.2;
      transition: opacity 1s ease-out;
    }
  }

  .dots {
    width: 730px;
    height: 20px;
    text-align: center;
    ${(props) => props.theme.pos('absolute', { t: '259px', l: 0 })}
    .item {
      display: inline-block;
      width: 20px;
      height: 20px;
      cursor: pointer;
      ${(props) => props.theme.bg('3px -343px', 'banner.png')}

      &:hover, &.active {
        background-position: -16px -343px;
      }
    }
  }
`;

export const BannersRight = styled.div`
  position: relative;
  width: 252px;
  height: 285px;
  ${(props) => props.theme.bg('0 0', 'download.png')}

  .download-btn {
    width: 215px;
    height: 56px;
    margin: 186px 0 0 19px;
    cursor: pointer;

    &:hover {
      ${(props) => props.theme.bg('0 -290px', 'download.png')}
    }
  }

  .desc {
    margin: 10px auto;
    text-align: center;
    color: #8d8d8d;
  }

  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 285px;
    ${(props) => props.theme.pos('absolute', { t: 0 })}
    ${(props) => props.theme.bg('0 9999px', 'banner.png')}
  }

  &::before {
    left: -20px;
    background-position: -1px 0;
  }

  &::after {
    right: -20px;
    background-position: -20px 0;
  }
`;

export const BannersControl = styled.div`
  .control {
    margin-top: -31px;
    width: 37px;
    height: 63px;
    cursor: pointer;
    ${(props) => props.theme.pos('absolute', { t: '50%' })}
    ${(props) => props.theme.bg('0 9999px', 'banner.png')}

    &.left {
      left: -68px;
    }
    ${(props) => props.theme.geneIcon('&.left', '0 -360px', '0 -430px')}

    &.right {
      right: -68px;
    }
    ${(props) => props.theme.geneIcon('&.right', '0 -508px', '0 -578px')}
  }
`;
