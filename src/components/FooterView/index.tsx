import React, { memo } from 'react';
import type { ReactNode, FC } from 'react';
import { FooterWrap, EnterList, CopyWrap } from './style';
import { FOOTER_IMG_NAVS, FOOTER_LINK_NAV } from '@/assets/constants';

interface Iprops {
  children?: ReactNode;
}

const FooterView: FC<Iprops> = () => {
  return (
    <FooterWrap>
      <div className='content'>
        <EnterList>
          {FOOTER_IMG_NAVS.map((item) => (
            <div className='item' key={item.text}>
              <a href={item.link} target='_blank' rel='noreferrer' />
              <div className='text'>{item.text}</div>
            </div>
          ))}
        </EnterList>

        <CopyWrap>
          <p className='link'>
            {FOOTER_LINK_NAV.map((item) => (
              <a href={item.link} key={item.link} target='_blank' rel='noreferrer'>
                {item.title}
              </a>
            ))}
          </p>
          <p className='right'>
            <a href='https://jubao.163.com/' target='_blank' rel='noreferrer'>
              廉正举报
            </a>
            <span className='sep'>不良信息举报邮箱: 51jubao@service.netease.com</span>
            <span>客服热线：95163298</span>
          </p>
          <p className='right'>
            <span className='sep'>互联网宗教信息服务许可证：浙（2022）0000120</span>
            <span className='sep'>增值电信业务经营许可证：浙B2-20150198</span>
            <a href='https://beian.miit.gov.cn/#/Integrated/index' target='_blank' rel='noreferrer'>
              粤B2-20090191-18 工业和信息化部备案管理系统网站
            </a>
          </p>
          <p className='right'>
            <span className='sep'>网易公司版权所有©1997-2023</span>
            <span className='sep'>杭州乐读科技有限公司运营:</span>
            <a
              href='https://p5.music.126.net/obj/wonDlsKUwrLClGjCm8Kx/28066758115/1fc7/27fc/c5c1/158cb31a7117730c58652e2c6625e4c8.jpg'
              target='_blank'
              rel='noreferrer'
            >
              浙网文[2021] 1186-054号
            </a>
            <a
              href='https://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564'
              target='_blank'
              rel='noreferrer'
            >
              <i className='police-logo'></i>
              <span className='police-text'>浙公网安备 33010902002564号</span>
            </a>
          </p>
        </CopyWrap>
      </div>
    </FooterWrap>
  );
};

export default memo(FooterView);
