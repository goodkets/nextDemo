'use client'
import * as React from 'react';
import { useState } from 'react';
import { Box, Card, Typography, ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Toc, ViewAgenda, GridViewSharp } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { styles } from './styles/BasicCard.styles';
// import { getListAll } from '@/app/api/list';


export default function BasicCard() {
  //调用接口
  // const list = getListAll({});
  const [view, setView] = useState('red');
  const [colorOptions] = useState([
    { value: 'red', color: '#FF5733' },
    { value: 'yellow', color: '#FFC300' },
    { value: 'green', color: '#33FF57' },
    { value: 'blue', color: '#26ABFF' },
    { value: 'purple', color: '#8E44AD' },
  ])
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const handleChange = (event, newView) => {
    if (newView !== null) {
      setView(newView);
    }
  };
  //记录开始的坐标
  const handleTouchStart = (e: TouchEvent) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };
  //记录偏移量（结束）
  const handleTouchMove = (e: TouchEvent) => {
    if (e.touches.length > 1) {
      // 处理多指触摸
      return;
    }
    const touch = e.touches[0];
    const deltaX = touch.clientX - startX;
    const deltaY = touch.clientY - startY;

    // 这里可以添加滑动逻辑，例如判断左右滑动或上下滑动
    if (Math.abs(deltaX) < Math.abs(deltaY)) {
      if (deltaY > 0) {
        console.log('向下滑动');
      } else {
        console.log('向上滑动');
      }
    }
  };
  // 处理滑动结束
  const handleTouchEnd = () => {
    // 滑动结束后的逻辑
  };

  return (
    <Box 
      component="div"
      sx={styles.container}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Box sx={styles.header}>
        <Box sx={styles.filterButton}>
          <Toc sx={styles.tocIcon} />
          <p style={styles.filterText}>Filtrar & Ordenar por:</p>
        </Box>
        <Box sx={styles.viewButtons}>
          <ViewAgenda sx={{ color: '#26ABFF' }} />
          <GridViewSharp sx={{ color: '#333' }} />
        </Box>
      </Box>
      <Box sx={styles.contentContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card key={item} sx={styles.card}>
            <Box sx={styles.productContainer}>
              <Swiper
                spaceBetween={50}
                slidesPerView={3}
              >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
              </Swiper>
            </Box>
            <Box sx={styles.flick}>
              <Box sx={styles.flickContainer}>
                <Typography
                  className="price"
                  component="div"
                >
                  33.45￥
                </Typography>
                <Typography
                  className="product-code"
                  variant="body2"
                  component="div"
                >
                  S43131
                </Typography>
                <Box>
                  <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleChange}
                    sx={styles.colorToggleGroup}
                  >
                    {colorOptions.map((option) => (
                      <ToggleButton 
                        key={option.value} 
                        value={option.value}
                        sx={styles.colorToggleButton}
                      >
                        <Box 
                          sx={{...styles.colorCircle, 
                          backgroundImage: `url('https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline')`
                          }}
                         />
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                </Box>
                <Box>
                </Box>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}