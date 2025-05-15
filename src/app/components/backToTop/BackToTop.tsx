'use client'
import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { KeyboardArrowUp } from '@mui/icons-material';
import { styles } from './BackToTop.styles';

interface BackToTopProps {
  totalPages: number;
}

export default function BackToTop({ totalPages }: BackToTopProps) {
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  // 监听卡片滑动
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = Number(entry.target.getAttribute('data-index')) || 1;
            setCurrentPage(cardIndex);
            setIsScrolling(true);
            
            const timer = setTimeout(() => {
              setIsScrolling(false);
            }, 500);
            
            return () => clearTimeout(timer);
          }
        });
      },
      {
        threshold: 0.7 // 当卡片显示70%时触发
      }
    );

    // 观察所有卡片
    const cards = document.querySelectorAll('.MuiCard-root');
    cards.forEach((card, index) => {
      card.setAttribute('data-index', String(index + 1));
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    const container = document.querySelector('[class*="contentContainer"]');
    const handleScroll = () => {
      if (container) {
        setIsScrolling(container.scrollTop > 100);
      }
    };
  
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  // // 回到顶部函数
  // const scrollToTop = (e) => {
   
  // };

  return (
    <Box>
      {isScrolling ? (
        // 滑动时显示页码
        <Box
          sx={styles.pageNumberStyles}
        >
          {currentPage}
          <Box sx={styles.horizontalLineStyle}>
      </Box>  
          {totalPages}
        </Box>
      ) : (
        // 未滑动时显示回到顶部按钮
        <Box
          // onClick={scrollToTop}
          sx={styles.backToTopStyles}
        >
          <KeyboardArrowUp />
        </Box>
      )}
    </Box>
  );
}