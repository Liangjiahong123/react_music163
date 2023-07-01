import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { LoadingWrap } from './style';

interface Iprops {
  children?: ReactNode;
}

const Loading: FC<Iprops> = () => {
  return (
    <LoadingWrap>
      <Spin size='large' indicator={<LoadingOutlined style={{ color: '#c20c0c' }} spin />}>
        <div className='content' />
      </Spin>
    </LoadingWrap>
  );
};

export default memo(Loading);
