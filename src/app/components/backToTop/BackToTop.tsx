import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { styles } from './BackToTop.styles';

interface BackToTopProps {
  totalPages: number;
}

export default function BackToTop({ totalPages }: BackToTopProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const timerRef = useRef<NodeJS.Timeout>();

  // 回到顶部函数
  const scrollToTop = () => {
    const container = document.getElementById('contentContainer');
    if (container) {
      container.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // 改进的卡片观察逻辑
  useEffect(() => {
    const container = document.getElementById('contentContainer');
    if (!container) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute('data-index')) || 1;
            setCurrentPage(cardIndex);
            setIsScrolling(true);
            clearTimeout(timerRef.current);
            timerRef.current = setTimeout(() => {
              setIsScrolling(false);
            }, 50);
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

    return () => {
      observer.disconnect();
      clearTimeout(timerRef.current);
    };
  }, [totalPages]);

  // 滚动事件监听增强版
  useEffect(() => {
    const container = document.getElementById('contentContainer');
    if (!container) return;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 50);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

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
          sx={{...styles.backToTopStyles, cursor: 'pointer'}}
          onClick={scrollToTop}
        >
          <KeyboardArrowUp />
        </Box>
      )}
    </Box>
  );
}