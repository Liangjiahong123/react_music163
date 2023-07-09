import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { HotDjWrap, HotDjList } from './style';
import { HOT_DJRADIO } from '@/assets/constants';
import TitleBaseView from '@/components/TitleBaseView';
import HotDjItem from '../HotDjItem';

interface Iprops {
  children?: ReactNode;
}

const HotDjRadio: FC<Iprops> = () => {
  return (
    <HotDjWrap>
      <TitleBaseView className='mini-title' title='热门主播' />
      <HotDjList>
        {HOT_DJRADIO.map((item) => (
          <HotDjItem key={item.id} djItem={item} />
        ))}
      </HotDjList>
    </HotDjWrap>
  );
};

export default memo(HotDjRadio);
