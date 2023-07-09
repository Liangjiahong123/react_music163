import styled from 'styled-components';

export const TitleBaseWrap = styled.div`
  ${(props) => props.theme.flexRow('space-between;', 'flex-end')}
  padding-bottom: 6px;
  border-bottom: 2px solid #c10d0c;
  background-repeat: no-repeat;
  background-position: -225px -156px;

  .title-left {
    ${(props) => props.theme.flexRow(';', 'center')}

    .text {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
  }

  .title-right {
    .more {
      display: inline-block;
      padding-bottom: 4px;
      color: #666;

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
