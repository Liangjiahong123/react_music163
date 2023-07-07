import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { TitleBaseWrap } from './style';

interface Iprops {
  leftSlot?: ReactNode;
  RightSlot?: ReactNode;
  showIcon?: boolean;
  title?: string;
  isLink?: boolean;
  toPath?: string;
}

const TitleBaseView: FC<Iprops> = (props) => {
  const iconStyle = {
    paddingLeft: '34px',
    paddingRight: '10px',
    backgroundImage: `url(${require('@/assets/img/index.png')})`
  };

  const { showIcon, isLink, title, toPath = '', leftSlot, RightSlot } = props;

  const showTitle = () => {
    if (isLink)
      return (
        <Link to={toPath} className='text'>
          {title}
        </Link>
      );
    return <h3 className='text'>{title}</h3>;
  };
  return (
    <TitleBaseWrap style={showIcon ? iconStyle : {}}>
      <div className='title-left'>
        {showTitle()}
        {leftSlot}
      </div>
      {RightSlot}
    </TitleBaseWrap>
  );
};

export default memo(TitleBaseView);
