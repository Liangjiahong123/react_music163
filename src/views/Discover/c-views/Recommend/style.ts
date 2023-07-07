import styled from 'styled-components';

export const RecommendWrap = styled.div`
  .recommend-content {
    display: flex;
    width: 980px;
    min-height: 700px;
    margin: 0 auto;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;
    ${(props) => props.theme.bg('100% 100%', 'wrap1.png')}
    background-repeat: repeat-y;

    .left {
      box-sizing: border-box;
      width: 728px;
      padding: 20px 20px 40px;
    }

    .right {
      width: 250px;
    }
  }
`;
