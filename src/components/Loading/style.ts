import styled from 'styled-components';

export const LoadingWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  .ant-spin-container {
    opacity: 1;
  }

  .content {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
