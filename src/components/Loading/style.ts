import styled from 'styled-components';

export const LoadingWrap = styled.div`
  ${(props) => props.theme.pos('absolute', { t: '50%', l: '50%' })}
  .ant-spin-container {
    opacity: 1;
  }

  .content {
    ${(props) => props.theme.pos('fixed', { l: 0, r: 0, t: 0, b: 0 })}
    background-color: rgba(255, 255, 255, 0.7);
  }
`;
