import styled from 'styled-components';

export const FooterWrap = styled.div`
  position: relative;
  height: 325px;
  overflow: hidden;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;

  .content {
    width: 980px;
    margin: 0 auto;
  }
`;

export const EnterList = styled.div`
  margin-top: 33px;
  ${(props) => props.theme.flexRow('center', 'center')}

  .item {
    width: 45px;
    text-align: center;
    color: #666;

    &:not(:first-child) {
      margin-left: 80px;
    }

    > a {
      display: block;
      width: 45px;
      height: 45px;
      margin: 0 auto;
      ${(props) => props.theme.bg('-170px -5px', 'foot_enter_new2.png', '220px 220px')}

      &:hover {
        background-position: -5px -115px;
      }
    }

    ${(props) => props.theme.geneIcon('&:nth-child(2) > a', '-5px -170px', '-60px -170px')}
    ${(props) => props.theme.geneIcon('&:nth-child(3) > a', '-5px -60px', '-60px -5px')}
    ${(props) => props.theme.geneIcon('&:nth-child(5) > a', '-60px -60px', '-115px -5px')}
    ${(props) => props.theme.geneIcon('&:nth-child(6) > a', '-115px -115px', '-5px -5px')}
    ${(props) => props.theme.geneIcon('&:nth-child(8) > a', '-170px -115px', '-60px -115px')}

    &:nth-child(4) > a {
      ${(props) => props.theme.bg('center center', 'xStudio.png', '45px')}

      &:hover {
        background-image: url(${require('@/assets/img/xStudioHover.png')});
      }
    }

    &:nth-child(7) > a {
      ${(props) => props.theme.bg('center center', 'cloudSong.png', '45px')}

      &:hover {
        background-image: url(${require('@/assets/img/cloudSongHover.png')});
      }
    }

    > .text {
      display: inline-block;
      width: 100px;
      margin-top: 10px;
      margin-left: -27.5px;
      font-weight: 400;
      text-align: center;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const CopyWrap = styled.div`
  padding-top: 60px;
  line-height: 24px;
  margin: 0 auto;
  text-align: center;

  .link {
    color: #666;

    > a {
      ${(props) => props.theme.hoverUdLine}

      &:not(:last-child)::after {
        content: '|';
        margin: 0 8px 0 8px;
        color: #d9d9d9;
      }
    }
  }

  .right {
    color: #666;

    > a {
      margin-right: 14px;
      ${(props) => props.theme.hoverUdLine}
    }

    .sep {
      margin-right: 14px;
    }

    .police-logo {
      display: inline-block;
      width: 14px;
      height: 14px;
      background-size: cover;
      margin-right: 2px;
      vertical-align: -2px;
      ${(props) => props.theme.bg('center', 'police.png', 'cover')}
    }
  }
`;
