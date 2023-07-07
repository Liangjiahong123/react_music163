const mixin = {
  bg(p = 'center center', n: string, s = 'auto') {
    return `
      background-size: ${s};
      background-position: ${p};
      background-image: url(${require(`@/assets/img/${n}`)});
      background-repeat: no-repeat;
    `;
  }
};

export default mixin;
