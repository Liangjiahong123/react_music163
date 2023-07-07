import styled from 'styled-components';

export const HotRecommendWrap = styled.div``;

export const HeaderLeft = styled.div`
  margin: 7px 0 0 20px;
  a {
    font-size: 12px;
    color: #666;

    &:hover {
      text-decoration: underline;
    }

    &:not(:last-child)::after {
      content: '|';
      display: inline-block;
      color: #ccc;
      margin: 0 12px;
      transform: scale(0.95);
    }
  }
`;

export const HeaderRight = styled.div`
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
`;

export const SongList = styled.div`
  margin-top: 20px;
`;
