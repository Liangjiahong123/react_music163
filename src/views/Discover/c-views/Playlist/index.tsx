import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';

interface Iprops {
  children?: ReactNode;
}

const Playlist: FC<Iprops> = () => {
  return <div>Playlist</div>;
};

export default memo(Playlist);
