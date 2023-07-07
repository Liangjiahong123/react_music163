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

  .title-right {
    .more {
      display: inline-block;
      padding-bottom: 4px;
      color: #666;
      font-size: 12px;

      &:hover {
        text-decoration: underline;
      }
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      vertical-align: middle;
      ${(props) => props.theme.bg('0 -240px', 'index.png')}
    }
  }
`;
