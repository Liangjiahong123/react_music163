import styled from 'styled-components';

interface IOperProps {
  playMode: number;
}

export const PlayOperWrap = styled.div<IOperProps>`
  ${(props) => props.theme.flexRow('', 'flex-start')}

  .left {
    ${(props) => props.theme.flexRow('', 'center')}

    .oper {
      width: 25px;
      height: 25px;
      cursor: pointer;
      ${(props) => props.theme.bg('0 9999px', 'playbar.png')}

      &.pip {
        ${(props) => props.theme.bg('0 0', 'iconpip.png')}

        &:hover {
          background-position: 0 -25px;
        }
      }
      ${(props) => props.theme.geneIcon('&.collect', '-88px -163px', '-88px -189px')}
      ${(props) => props.theme.geneIcon('&.share', '-114px -163px', '-114px -189px')}
    }
  }

  .right {
    position: relative;
    padding-left: 13px;
    ${(props) => props.theme.flexRow('', 'center')}
    ${(props) => props.theme.bg('-144px -250px', 'playbar.png')}

    .ctrl {
      width: 25px;
      height: 25px;
      cursor: pointer;
      ${(props) => props.theme.bg('0 9999px', 'playbar.png')}
      ${(props) => props.theme.geneIcon('&.volume', '-2px -248px', '-31px -248px')}
      ${(props) => {
        switch (props.playMode) {
          case 1:
            return props.theme.geneIcon('&.playmode', '-66px -248px', '-93px -248px');
          case 2:
            return props.theme.geneIcon('&.playmode', '-66px -344px', '-93px -344px');
          default:
            return props.theme.geneIcon('&.playmode', '-3px -344px', '-33px -344px');
        }
      }}
    }
    .add {
      position: relative;
      cursor: pointer;

      .list {
        display: block;
        width: 38px;
        height: 25px;
        padding-left: 21px;
        line-height: 27px;
        text-align: center;
        color: #666;
        font-style: normal;
        text-shadow: 0 1px 0 #080707;
        ${(props) => props.theme.bg('-42px -68px', 'playbar.png')}

        &:hover {
          background-position: -42px -98px;
        }
      }

      .tip {
        display: none;
        width: 152px;
        height: 49px;
        text-align: center;
        color: #fff;
        line-height: 37px;
        ${(props) => props.theme.pos('absolute', { l: '-65px', t: '-51px' })}
        ${(props) => props.theme.bg('0 -287px', 'playbar.png')}
      }
    }
    > .tip {
      display: none;
      width: 81px;
      height: 39px;
      line-height: 34px;
      text-align: center;
      color: #fff;
      ${(props) => props.theme.pos('absolute', { l: '12px', t: '-35px' })}
      ${(props) => props.theme.bg('0 -457px', 'playbar.png')}
    }
  }
`;
