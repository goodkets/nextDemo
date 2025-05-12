'use client'
import * as React from 'react';
import { Box, Card, Typography,Button } from "@mui/material";
import { Toc, ViewAgenda, GridViewSharp } from '@mui/icons-material';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { styles } from './styles/BasicCard.styles';
import { getListAll } from '@/app/api/list';

export default function BasicCard() {
  //调用接口
  // const list = getListAll({});
  // 前端组件中调用
  const [startX, setStartX] = React.useState(0);
  const [startY, setStartY] = React.useState(0);
//记录开始的坐标
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setStartX(touch.clientX);
    setStartY(touch.clientY);
  };
//记录偏移量（结束）
  const handleTouchMove = (e: React.TouchEvent) => {
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
        <Button >
            asdasd
          </Button>
        <Box sx={styles.viewButtons}>
          <ViewAgenda sx={{ color: '#26ABFF' }} />
          <GridViewSharp sx={{ color: '#333' }} />
        </Box>
      </Box>
      <Box sx={styles.contentContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card key={item} sx={styles.card}>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
            >
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
             </Swiper>
            <Typography level="body-sm">
              这是一个示例卡片内容，你可以在这里放置任何内容。
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}