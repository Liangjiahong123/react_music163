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
    ${(props) => props.theme.pos('absolute', { t: '259px', l: 0 })}
    width: 730px;
    height: 20px;
    text-align: center;
    .item {
      display: inline-block;
      width: 20px;
      height: 20px;
      cursor: pointer;
      ${(props) => props.theme.bg('3px -343px', 'banner.png')}

      &:hover, &.active {
        ${(props) => props.theme.bg('-16px -343px', 'banner.png')}
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
    font-size: 12px;
  }

  &::before,
  &::after {
    content: '';
    ${(props) => props.theme.pos('absolute', { t: 0 })}
    width: 20px;
    height: 285px;
  }

  &::before {
    left: -20px;
    ${(props) => props.theme.bg('-1px 0', 'banner.png')}
  }

  &::after {
    right: -20px;
    ${(props) => props.theme.bg('-20px 0', 'banner.png')}
  }
`;

export const BannersControl = styled.div`
  .control {
    ${(props) => props.theme.pos('absolute', { t: '50%' })}
    margin-top: -31px;
    width: 37px;
    height: 63px;
    cursor: pointer;

    &.left {
      left: -68px;
      ${(props) => props.theme.bg('0 -360px', 'banner.png')}

      &:hover {
        ${(props) => props.theme.bg('0 -430px', 'banner.png')}
      }
    }

    &.right {
      right: -68px;
      ${(props) => props.theme.bg('0 -508px', 'banner.png')}

      &:hover {
        ${(props) => props.theme.bg('0 -578px', 'banner.png')}
      }
    }
  }
`;
