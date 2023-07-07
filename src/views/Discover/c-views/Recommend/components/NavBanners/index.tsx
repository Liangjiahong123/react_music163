import React, { memo, useRef, useState, useEffect } from 'react';
import type { ReactNode, FC } from 'react';
import { Link } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import { BannersControl, BannersLeft, BannersRight, NavBannersWrap } from './style';
import { appShallowEqual, useAppSelector } from '@/hooks';

interface Iprops {
  children?: ReactNode;
}

type ClickType = 'prev' | 'next';

const NavBanners: FC<Iprops> = () => {
  /* 获取state数据*/
  const { banners } = useAppSelector(
    (state) => ({
      banners: state.discover.banners
    }),
    appShallowEqual
  );

  /**组件内部数据 */
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState<string>();
  const [dotIndex, setDotIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const indexRef = useRef(currentIndex);

  /**获取轮播图背景 */
  useEffect(() => {
    if (!banners.length) return;
    setBgImage(banners[currentIndex].imageUrl + '?imageView&blur=40x20');
  }, [banners]);

  /** 事件处理 */
  const handleChangeClick = (type: ClickType) => {
    let newIndex = type === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (newIndex > banners.length - 1) newIndex = 0;
    if (newIndex < 0) newIndex = banners.length - 1;
    indexRef.current = newIndex;
    setCurrentIndex(newIndex);
    setDotIndex(-1);
  };

  const handleDotClick = (index: number) => {
    indexRef.current = index;
    setCurrentIndex(index);
    setDotIndex(index);
  };

  const handleAfterChange = () => {
    setBgImage(banners[indexRef.current].imageUrl + '?imageView&blur=40x20');
    setDotIndex(indexRef.current);
  };

  /** 轮播图自动切换 */
  if (timerRef.current) clearInterval(timerRef.current);
  timerRef.current = setInterval(() => {
    handleChangeClick('next');
  }, 5000);

  /* 主图切换 */
  let imageUrl = '';
  banners.length && (imageUrl = banners[currentIndex].imageUrl);

  /* 跳转id切换 */
  let targetId = '';
  banners.length && (targetId = banners[currentIndex].targetId);

  return (
    <NavBannersWrap bgImage={bgImage}>
      <div className='banner-container'>
        <BannersLeft>
          <div className='banner-list'>
            <SwitchTransition mode='out-in'>
              <CSSTransition
                classNames='fade'
                timeout={1000}
                key={currentIndex}
                onExited={handleAfterChange}
              >
                <Link to={`/discover/playlist?id=${targetId}`}>
                  <img className='banner-item' src={imageUrl} />
                </Link>
              </CSSTransition>
            </SwitchTransition>
          </div>
          <div className='dots'>
            {banners.map((item, i) => (
              <i
                className={classNames('item', { active: dotIndex === i })}
                key={item.imageUrl}
                onClick={() => handleDotClick(i)}
              ></i>
            ))}
          </div>
        </BannersLeft>

        <BannersRight>
          <Link to='/download'>
            <div className='download-btn'></div>
          </Link>
          <div className='desc'>PC 安卓 iPhone WP iPad Mac 六大客户端</div>
        </BannersRight>

        <BannersControl>
          <div className='control left' onClick={() => handleChangeClick('prev')}></div>
          <div className='control right' onClick={() => handleChangeClick('next')}></div>
        </BannersControl>
      </div>
    </NavBannersWrap>
  );
};

export default memo(NavBanners);
