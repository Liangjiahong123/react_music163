import styled from 'styled-components';

export const SongRankingWrap = styled.div``;

export const RankingList = styled.div`
  height: 472px;
  margin-top: 20px;
  padding-left: 1px;
  display: flex;
  ${(props) => props.theme.bg('center center', 'index_bill.png')}
`;
