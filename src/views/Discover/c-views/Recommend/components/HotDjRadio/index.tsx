import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { HotDjWrap, HotDjList } from './style';
import TitleBaseView from '@/components/TitleBaseView';

interface Iprops {
  children?: ReactNode;
}

const HotDjRadio: FC<Iprops> = () => {
  return (
    <HotDjWrap>
      <TitleBaseView className='mini-title' title='热门主播' />
      <HotDjList></HotDjList>
    </HotDjWrap>
  );
};

export default memo(HotDjRadio);
