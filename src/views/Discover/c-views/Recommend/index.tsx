import React, { memo, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { useAppDispatch } from '@/hooks';
import { fetchDiscoverData } from '@/store/modules/discover';
import NavBanners from './components/NavBanners';

interface Iprops {
  children?: ReactNode;
}

const Recommend: FC<Iprops> = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchDiscoverData());
  }, []);

  return (
    <div className='recommend-container'>
      <NavBanners />
    </div>
  );
};

export default memo(Recommend);
