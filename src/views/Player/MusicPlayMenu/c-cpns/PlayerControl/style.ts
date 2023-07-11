import styled from 'styled-components';

interface IControl {
  isPlaying: boolean;
}

export const PlayerControlWrap = styled.div<IControl>`
  ${(props) => props.theme.flexRow('', 'center')}

  .prev,.next, .play {
    margin-right: 8px;
    margin-top: 5px;
    width: 28px;
    height: 28px;
    cursor: pointer;
    ${(props) => props.theme.bg('0 9999px', 'playbar.png')}
  }
  ${(props) => props.theme.geneIcon('.prev ', '0 -130px', '-30px -130px')}

  .play {
    margin-top: 0;
    width: 36px;
    height: 36px;
    background-position: 0 ${(props) => (props.isPlaying ? '-165px' : '-204px')};

    &:hover {
      background-position: -40px ${(props) => (props.isPlaying ? '-165px' : '-204px')};
    }
  }

  ${(props) => props.theme.geneIcon('.next ', '-80px -130px', '-110px -130px')}
`;
