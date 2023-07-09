import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { HotDjWrap } from './style';
import { formatImgSize } from '@/utils';

interface Iprops {
  children?: ReactNode;
  djItem: Record<string, any>;
}

const HotDjItem: FC<Iprops> = (props) => {
  const { djItem } = props;
  return (
    <HotDjWrap>
      <Link to={`user/home?id=${djItem.id}`} className='avatar'>
        <img src={formatImgSize(djItem.avatar, 40)} />
      </Link>
      <div className='info'>
        <Link to={`user/home?id=${djItem.id}`} className='name'>
          {djItem.name}
        </Link>
        <div className='desc'>{djItem.desc}</div>
      </div>
    </HotDjWrap>
  );
};

export default memo(HotDjItem);
