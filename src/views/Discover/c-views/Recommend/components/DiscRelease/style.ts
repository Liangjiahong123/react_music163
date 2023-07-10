import styled from 'styled-components';

export const DisReleaseWrap = styled.div``;

export const AlbumRoller = styled.div`
  position: relative;
  height: 186px;
  margin: 20px 0 37px;
  border: 1px solid #d3d3d3;
  padding-left: 16px;
  background: #f5f5f5;

  .btn {
    width: 17px;
    height: 17px;
    cursor: pointer;
    ${(props) => props.theme.pos('absolute', { t: '71px' })}
    ${(props) => props.theme.bg('0 -9999px', 'index.png')}

    &.prev {
      left: 4px;
    }
    ${(props) => props.theme.geneIcon('&.prev', '-260px -75px', '-280px -75px')}

    &.next {
      right: 4px;
    }
    ${(props) => props.theme.geneIcon('&.next', '-300px -75px', '-320px -75px')}
  }
`;

export const AlbumList = styled.div`
  width: 645px;
  height: 180px;
  overflow: hidden;

  .album-list {
    display: flex !important;
    margin-top: 28px;
    ${(props) => props.theme.flexRow('', 'center')}
  }
`;
