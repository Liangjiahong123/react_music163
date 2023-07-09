import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { PlayWrap } from './style';

interface Iprops {
  children?: ReactNode;
}

const Player: FC<Iprops> = () => {
  return <PlayWrap>Player</PlayWrap>;
};

export default memo(Player);
