'use client'
import { useState, useEffect } from 'react';
import { Box, Card, Typography, ToggleButton, ToggleButtonGroup, Button} from "@mui/material";
import { Toc, ViewAgenda, GridViewSharp,FavoriteBorder, Launch } from '@mui/icons-material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';  
import 'swiper/css';
import 'swiper/css/pagination';
import { styles } from './styles/BasicCard.styles';
import Image from 'next/image';
import BackToTop from "@/app/components/backToTop/BackToTop"
import { getListAll } from '@/app/api/list';


export default function BasicCard() {
  const [view, setView] = useState('red');
  const [colorOptions] = useState([]);
  const [swiperData] = useState([]);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [listData, setListData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getListAll({});
        setListData(res);
        // setIsLoading(false);
      } catch (error) {
        console.error('Failed to fetch data:', error);
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);
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
          <Box sx={styles.tocIcon} />
          <p style={styles.filterText}>Filtrar & Ordenar por:</p>
        </Box>
        <Box sx={styles.viewButtons}>
          <ViewAgenda sx={{ color: '#26ABFF' }} />
          <GridViewSharp sx={{ color: '#333' }} />
        </Box>
      </Box>
      <Box sx={styles.contentContainer}>
        {listData.map((item) => (
          <Card key={item} sx={styles.card}>
            <Box sx={styles.productContainer}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                resistanceRatio={0}
                pagination={{
                  type: 'fraction',
                  el: '.swiper-pagination',
                  formatFractionCurrent: (number) => number,
                  formatFractionTotal: (number) => number,
                }}
                modules={[Pagination]}
                className='swiperContainer'
              >
                {item.swiperData[0].images.map((slide) => (
                  <SwiperSlide key={slide.id} >
                    <Image
                      className='swiperImage'
                      src={slide.url}
                      alt={slide.alt}
                      width={800}
                      height={800}
                      quality={100}
                      property={'true'} 
                      style={{
                        objectFit:  slide.fitStyle,
                      }}
                    />
                  </SwiperSlide>
                ))}
                <div className='swiper-pagination'></div>
              </Swiper>
            </Box>
            <Box sx={styles.flick}>
              <Box sx={styles.flickContainer}>
                <Typography
                  className="price"
                  component="div"
                >
                  {item.money} €
                </Typography>
                <Typography
                  className="product-code"
                  variant="body2"
                  component="div"
                >
                  {item.alt}
                </Typography>
                <Box>
                  <ToggleButtonGroup
                    value={view}
                    exclusive
                    onChange={handleChange}
                    sx={styles.colorToggleGroup}
                  >
                    {item.colorBg.map((option) => (
                      <ToggleButton 
                        key={option.id} 
                        value={option.id}
                        sx={styles.colorToggleButton}
                      >
                        <Box 
                          sx={{...styles.colorCircle, 
                          backgroundImage: `url(${option.url})`
                          }}
                         />
                      </ToggleButton>
                    ))}
                  </ToggleButtonGroup>
                  <Box sx={styles.fickButtom}>
                    <Box className="fickIcon">
                      <FavoriteBorder sx={{fontSize: '1.8rem'}}  />
                      <Launch sx={{fontSize: '1.8rem'}} />
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
      <BackToTop totalPages={9}   />
    </Box>
  );
}