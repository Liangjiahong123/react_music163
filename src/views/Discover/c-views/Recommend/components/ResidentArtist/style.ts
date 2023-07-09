import styled from 'styled-components';

export const ResidentArtistWrap = styled.div`
  margin-top: 15px;

  .mini-title {
    height: 23px;
    margin: 0 20px;
    border-bottom: 1px solid #ccc;

    .title-left .text {
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
    }
  }

  .more {
    color: #666;
    ${(props) => props.theme.hoverUdLine}
  }
`;

export const ArtistList = styled.div`
  margin: 6px 0 14px 20px;
`;

export const LinkWrap = styled.a.attrs({
  href: 'https://music.163.com/st/musician',
  target: '_blank',
  rel: 'noopener noreferrer'
})`
  display: inline-block;
  margin-left: 20px;
  padding-right: 5px;
  border-radius: 4px;
  white-space: nowrap;
  height: 31px;
  line-height: 31px;
  overflow: hidden;
  color: #333;
  vertical-align: top;
  text-align: center;
  cursor: pointer;
  ${(props) => props.theme.bg('right -100px', 'button2.png')};

  > span {
    display: inline-block;
    width: 170px;
    font-weight: bold;
    padding: 0 15px 0 20px;
    pointer-events: none;
    ${(props) => props.theme.bg('0 -59px', 'button2.png')};
  }

  &:hover {
    background-position: right -182px;

    > span {
      background-position: 0 -141px;
    }
  }
`;
