import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { styles } from './modules.style/BackToTop.styles';
import { animateScroll } from 'react-scroll';

interface BackToTopProps {
  totalPages: number;
}

export default function BackToTop({ totalPages }: BackToTopProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  // 传入初始值 null
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const scrollToTop = () => {
    const container = document.getElementById('contentContainer');
    if (container) {
      // 临时移除 scrollSnapType 属性
      container.style.scrollSnapType = 'none';

      animateScroll.scrollToTop({
        duration: 600,
        smooth: 'easeInOutQuad',
        containerId: 'contentContainer',
        delay: 0,
        spy: true,
        offset: 0,
      });
      setTimeout(() => {
        container.style.scrollSnapType = '';
      }, 601);
    }
  }

  const handleScrollState = () => {
    setIsScrolling(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 50);
  };

  // 合并监听逻辑
  useEffect(() => {
    const container = document.getElementById('contentContainer');
    if (!container) {
      return;
    }

    // 卡片观察器--观察滚动位置
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute('data-index')) || 1;
            setCurrentPage(cardIndex);
            handleScrollState();
          }
        });
      },
      {
        root: container,
        threshold: 0.7,
      }
    );

    const cards = container.querySelectorAll('.MuiCard-root');
    if (cards.length === 0) {
      console.warn('未找到任何卡片元素');
    }

    cards.forEach((card, index) => {
      card.setAttribute('data-index', String(index + 1));
      observer.observe(card);
    });

    // 滚动事件监听
    const handleScroll = () => {
      handleScrollState();
    };

    container.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      container.removeEventListener('scroll', handleScroll);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [totalPages]);

  return (
    <Box>
      {isScrolling ? (
        <Box sx={styles.pageNumberStyles}>
          {currentPage}
          <Box sx={styles.horizontalLineStyle} />
          {totalPages}
        </Box>
      ) : (
        <Box
          sx={{ ...styles.backToTopStyles, cursor: 'pointer' }}
          onClick={scrollToTop}
        >
          <KeyboardArrowUp />
        </Box>
      )}
    </Box>
  );
}