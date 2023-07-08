import styled from 'styled-components';

export const HotRecommendWrap = styled.div``;

export const HeaderLeft = styled.div`
  margin: 7px 0 0 20px;
  a {
    font-size: 12px;
    color: #666;

    ${(props) => props.theme.hoverUdLine}

    &:not(:last-child)::after {
      content: '|';
      display: inline-block;
      color: #ccc;
      margin: 0 12px;
      transform: scale(0.95);
    }
  }
`;

export const SongList = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-right: -40px;
`;
