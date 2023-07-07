import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { HeaderWrap, HeaderLeftWrap, HeaderRightWrap } from './style';
import { HEADER_NAVS } from '@/assets/constants';

interface Iprops {
  children?: ReactNode;
}

const HeaderView: FC<Iprops> = () => {
  const showLink = (item: any) => {
    if (item.type === 'hash') {
      return (
        <NavLink to={item.path}>
          {item.title}
          <i className='icon'></i>
        </NavLink>
      );
    }
    if (item.type === 'href') {
      return (
        <a href={item.path} rel='noreferrer' target='_blank'>
          {item.title}
        </a>
      );
    }
  };

  return (
    <HeaderWrap>
      <div className='header-container'>
        <HeaderLeftWrap>
          <a className='logo' href='/#'>
            网易云音乐
          </a>
          <div className='nav-list'>
            {HEADER_NAVS.map((item) => (
              <div className='item' key={item.path}>
                {showLink(item)}
              </div>
            ))}
          </div>
        </HeaderLeftWrap>
        <HeaderRightWrap>
          <Input className='search' placeholder='音乐/视频/电台/用户' prefix={<SearchOutlined />} />
          <div className='center'>创作者中心</div>
          <div className='login'>登录</div>
        </HeaderRightWrap>
      </div>
      <div className='divider'></div>
    </HeaderWrap>
  );
};

export default memo(HeaderView);
