import { useEffect, useState } from 'react';

const useScrollTop = () => {
  const [showIcon, setShowIcon] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => setShowIcon(window.scrollY > 0);

    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
    };
  }, []);

  const handleToScrollTop = () => window.scrollTo(0, 0);

  return { showIcon, handleToScrollTop };
};

export { useScrollTop };
