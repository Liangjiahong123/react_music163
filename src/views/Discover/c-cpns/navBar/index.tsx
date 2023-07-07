import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { NavLink } from 'react-router-dom';
import { NavBarWrap } from './style';
import { DISCOVER_NAVS } from '@/assets/constants';

interface Iprops {
  children?: ReactNode;
}

const NavBar: FC<Iprops> = () => {
  return (
    <NavBarWrap>
      <div className='nav-list'>
        {DISCOVER_NAVS.map((item) => (
          <NavLink to={item.path} key={item.path}>
            {item.title}
          </NavLink>
        ))}
      </div>
    </NavBarWrap>
  );
};

export default memo(NavBar);
