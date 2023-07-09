import { DefaultTheme } from 'styled-components';

const mixin: DefaultTheme = {
  bg(p, n, s = 'auto') {
    return `
      background-size: ${s};
      background-position: ${p};
      background-image: url(${require(`@/assets/img/${n}`)});
      background-repeat: no-repeat;
    `;
  },
  flexRow(jc = '', al = '') {
    return `
      display: flex;
      justify-content: ${jc};
      align-items: ${al};
    `;
  },
  pos(type, direction) {
    return `
      position: ${type};
      left: ${direction.l};
      right: ${direction.r};
      top: ${direction.t};
      bottom: ${direction.b};
    `;
  },
  tEllipsis(line = 1) {
    return `
      display: -webkit-box;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: ${line};
      -webkit-box-orient: vertical;
    `;
  },
  geneIcon(selector: string, p: string, hp: string) {
    return `
      ${selector}{
        background-position: ${p};

        &:hover {
          background-position: ${hp};
        }
      }
    `;
  },
  hoverUdLine: '&:hover { text-decoration: underline; }'
};

export default mixin;
