import React, { memo, useRef, ElementRef } from 'react';
import type { ReactNode, FC } from 'react';
import { Carousel } from 'antd';
import { appShallowEqual, useAppSelector } from '@/hooks';
import { DisReleaseWrap, AlbumRoller, AlbumList } from './style';
import TitleBaseView from '@cpns/TitleBaseView';
import AlbumItem from '@cpns/AlbumItem';

interface Iprops {
  children?: ReactNode;
}

const DiscRelease: FC<Iprops> = () => {
  /** 组件内部数据 */
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);

  /**获取state数据 */
  const { newAlbums } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    appShallowEqual
  );

  /** 事件处理函数 */
  const handleToggleItem = (type: string) => {
    type === 'prev' && carouselRef.current?.prev();
    type === 'next' && carouselRef.current?.next();
  };

  return (
    <DisReleaseWrap>
      <TitleBaseView title='新碟上架' isLink toPath='/discover/album' showIcon />
      <AlbumRoller>
        <i className='btn prev' onClick={() => handleToggleItem('prev')}></i>
        <AlbumList>
          <Carousel speed={1500} dots={false} ref={carouselRef}>
            {[0, 1].map((k) => (
              <div className='album-list' key={k}>
                {newAlbums?.slice(k * 5, (k + 1) * 5).map((item) => (
                  <AlbumItem albumItem={item} key={item.id} />
                ))}
              </div>
            ))}
          </Carousel>
        </AlbumList>
        <i className='btn next' onClick={() => handleToggleItem('next')}></i>
      </AlbumRoller>
    </DisReleaseWrap>
  );
};

export default memo(DiscRelease);
