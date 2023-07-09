import styled from 'styled-components';

export const HotDjWrap = styled.div`
  display: flex;
  width: 210px;
  height: 50px;

  .avatar {
    width: 40px;
    margin-right: 10px;

    > img {
      width: 40px;
      height: 40px;
      box-shadow: 0 0 1px #333333 inset;
    }
  }

  .info {
    width: 160px;
    line-height: 21px;

    .name {
      display: inline-block;
      max-width: 88%;
      vertical-align: middle;
      color: #000;
      ${(props) => props.theme.hoverUdLine}
    }

    .desc {
      color: #666;
      ${(props) => props.theme.tEllipsis()}
    }
  }
`;
