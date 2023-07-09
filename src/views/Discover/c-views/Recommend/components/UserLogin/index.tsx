import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { UserLoginWrapper } from './style';

interface Iprops {
  children?: ReactNode;
}

const UserLogin: FC<Iprops> = () => {
  return (
    <UserLoginWrapper>
      <p className='note'>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <div className='btn-login'>用户登录</div>
    </UserLoginWrapper>
  );
};

export default memo(UserLogin);
