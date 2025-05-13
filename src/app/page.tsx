'use client'
import { useState } from 'react';
import { Box, Card, Typography, ToggleButton, ToggleButtonGroup, Button} from "@mui/material";
import { Toc, ViewAgenda, GridViewSharp,FavoriteBorder, Launch } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/pagination';
import { styles } from './styles/BasicCard.styles';
import Image from 'next/image';
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
  const [swiperData] = useState([
    {
      id: 1,
      imageUrl: "https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp",
      alt: "Product 1"
    },
    {
      id: 2,
      imageUrl: "https://df5apg8r0m634.cloudfront.net/p/11791/middle-2-160ae393d89a3db77893d552f041e1c0.jpg",
      alt: "Product 2"
    }
  ]);
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
                spaceBetween={10}
                slidesPerView={1}
                pagination={{
                  type: 'fraction',
                  el: '.swiper-pagination',
                  formatFractionCurrent: (number) => number,
                  formatFractionTotal: (number) => number,
                }}
                modules={[Pagination]}
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'relative'
                }}
              >
                {swiperData.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <Image
                      src={slide.imageUrl}
                      alt={slide.alt}
                      width={300}
                      height={300}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        backgroundColor: 'rgb(247, 249, 250)'
                      }}
                    />
                  </SwiperSlide>
                ))}
                <Box  sx={styles.swiperPagination}></Box>
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
                  <Box sx={styles.fickButtom}>
                    <Box className="fickIcon">
                      <FavoriteBorder />
                      <Launch />
                    </Box>
                    <Box>
                      <Button className='btn' variant="contained">View Details</Button>
                    </Box>  
                  </Box>
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