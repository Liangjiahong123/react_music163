import styled from 'styled-components';

export const AlbumItemWrap = styled.div`
  width: 118px;
  height: 150px;
  margin-left: 11px;
  ${(props) => props.theme.bg('-260px 100px', 'index.png')}

  .cover {
    position: relative;
    width: 100px;
    height: 100px;
    margin-bottom: 7px;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .mask {
      width: 118px;
      height: 100px;
      ${(props) => props.theme.pos('absolute', { l: 0, t: 0 })}
      ${(props) => props.theme.bg('0 -570px', 'coverall.png')}
    }

    .icon-play {
      display: none;
      width: 22px;
      height: 22px;
      ${(props) => props.theme.pos('absolute', { r: '10px', b: '5px' })}
      ${(props) => props.theme.bg('0 -85px', 'iconall.png')}
    }

    &:hover .icon-play {
      display: inline-block;
    }
  }

  .desc,
  .author {
    width: 90%;
    line-height: 18px;
    font-size: 12px;
    color: #000;
    ${(props) => props.theme.tEllipsis()}
    ${(props) => props.theme.hoverUdLine}
  }

  .author {
    color: #666;
  }
`;
