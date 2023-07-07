import styled from 'styled-components';

export const TitleBaseWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 6px;
  border-bottom: 2px solid #c10d0c;
  background-repeat: no-repeat;
  background-position: -225px -156px;

  .title-left {
    display: flex;
    align-items: center;

    .text {
      font-size: 20px;
      font-weight: normal;
      line-height: 28px;
    }
  }
`;
