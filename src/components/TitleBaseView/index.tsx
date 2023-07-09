import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { TitleBaseWrap } from './style';

interface Iprops {
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  showIcon?: boolean;
  title?: string;
  isLink?: boolean;
  toPath?: string;
  className?: string;
}

const TitleBaseView: FC<Iprops> = (props) => {
  const iconStyle = {
    paddingLeft: '34px',
    paddingRight: '10px',
    backgroundImage: `url(${require('@/assets/img/index.png')})`
  };

  const { showIcon, isLink, title, toPath = '', leftSlot, rightSlot, className } = props;

  const showLeftTitle = () => {
    if (isLink)
      return (
        <Link to={toPath} className='text'>
          {title}
        </Link>
      );
    return <h3 className='text'>{title}</h3>;
  };

  const showRightContent = () => {
    if (rightSlot) return rightSlot;
    return (
      <div className='title-right'>
        <Link to={toPath} className='more'>
          更多
        </Link>
        <i className='icon'></i>
      </div>
    );
  };

  return (
    <TitleBaseWrap className={className} style={showIcon ? iconStyle : {}}>
      <div className='title-left'>
        {showLeftTitle()}
        {leftSlot}
      </div>
      {showRightContent()}
    </TitleBaseWrap>
  );
};

export default memo(TitleBaseView);
