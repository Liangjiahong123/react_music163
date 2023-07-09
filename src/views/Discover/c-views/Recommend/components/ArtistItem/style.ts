import styled from 'styled-components';

export const ArtistItemWrap = styled.div`
  margin-top: 14px;
  width: 210px;
  height: 62px;
  background: #fafafa;

  img {
    width: 62px;
    height: 62px;
    vertical-align: top;
  }

  .info {
    display: inline-block;
    width: 148px;
    height: 60px;
    padding-left: 15px;
    border: 1px solid #e9e9e9;
    border-left: none;

    .name {
      font-size: 14px;
      font-weight: bold;
      margin-top: 8px;
      line-height: 1.5;
    }

    .desc {
      color: #666;
      width: 90%;
      margin-top: 8px;
      ${(props) => props.theme.tEllipsis()}
    }
  }
`;
