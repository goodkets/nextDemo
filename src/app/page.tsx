// 'use client'
// import { useState, useEffect } from 'react';
// import { Box, Card, Typography, ToggleButton, ToggleButtonGroup, Button} from "@mui/material";
// import { ViewAgenda, GridViewSharp, FavoriteBorder, Launch } from '@mui/icons-material';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';  
// import 'swiper/css';
// import 'swiper/css/pagination';
// import { styles } from './styles/BasicCard.styles';
// import Image from 'next/image';
// import { getListAll } from '@/app/api/list';
// import { ProductData, SelectedColors } from './types/product';
// import BackToTop from '@/app/components/backToTop/BackToTop';

// export default function BasicCard() {
//   const [listData, setListData] = useState<ProductData[]>([]);
//   const [selectedColors, setSelectedColors] = useState<SelectedColors>({});
//   // 预加载图片
//   const preloadImages = async (data: ProductData[]) => {
//     const imagePromises = data.flatMap((item) => 
//       item.swiperData
//         .find(data => data.id === selectedColors[item.id])?.images
//         .map(slide => {
//           return new Promise((resolve, reject) => {
//             const img = new Image();
//             img.src = slide.url ? slide.url.trim() : '';
            
//             const timer = setTimeout(() => {
//               reject(new Error('Image load timeout'));
//             }, 3000); 

//             img.onload = () => {
//               clearTimeout(timer);
//               resolve(null);
//             };
            
//             img.onerror = () => {
//               clearTimeout(timer);
//               // 失败后重试一次
//               const retryImg = new Image();
//               retryImg.src = slide.url ? slide.url.trim() : '';
//               retryImg.onload = resolve;
//               retryImg.onerror = reject;
//             };
//           });
//         }) || []
//     );

//     return Promise.allSettled(imagePromises);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await getListAll();
//         if(response.status === 200) {
//           const { list } = response.data;
//           setListData(list);
//           const initialColors: SelectedColors = {};
//           list.forEach(item => {
//             if (item.colorBg.length > 0) {
//               initialColors[item.id] = item.colorBg[0].id;
//             }
//           });
//           setSelectedColors(initialColors);
  
//           // 预加载前三个卡片的图片
//           const visibleCards = list.slice(0, 3);
//           await preloadImages(visibleCards);
  
//           //加载剩余图片
//           requestIdleCallback(() => {
//             const remainingCards = list.slice(3);
//             preloadImages(remainingCards);
//           });
//         }        
//       } catch (error) {
//         console.error('获取数据失败:', error);
//       }
//     };
    
//     fetchData();
//   }, []);

//   const handleChange = (cardId: number, newColorId: number | null) => {
//     if (newColorId !== null) {
//       setSelectedColors(prev => ({
//         ...prev,
//         [cardId]: newColorId
//       }));
//     }
//   };

//   return (
//     <Box sx={styles.container} >
//       <Box sx={styles.header}>
//         <Box sx={styles.filterButton}>
//           <Box sx={styles.tocIcon} />
//           <p style={styles.filterText}>Filtrar & Ordenar por:</p>
//         </Box>
//         <Box sx={styles.viewButtons}>
//           <ViewAgenda sx={{ color: '#26ABFF' }} />
//           <GridViewSharp sx={{ color: '#333' }} />
//         </Box>
//       </Box>
//       <Box sx={styles.contentContainer} id="contentContainer">
//         {listData.map((item) => (
//           <Card key={item.id} sx={styles.card} >
//             <Box sx={styles.productContainer}>
//               <Swiper
//                 spaceBetween={10}
//                 slidesPerView={1}
//                 resistanceRatio={0}
//                 pagination={{
//                   type: 'fraction',
//                   el: '.swiper-pagination',
//                   formatFractionCurrent: (number) => number,
//                   formatFractionTotal: (number) => number,
//                 }}
//                 modules={[Pagination]}
//                 className='swiperContainer'
//               >
//                 {item.swiperData.find(data => data.id === selectedColors[item.id])?.images.map((slide) => (
//                   <SwiperSlide key={slide.id}>
//                     <Image
//                       className='swiperImage'
//                       src={slide.url ? slide.url.trim() : ''}
//                       alt={''}
//                       width={800}
//                       height={800}
//                       quality={100}
//                       priority={true} 
//                       loading='eager'
//                       placeholder='blur'
//                       blurDataURL={slide.url? slide.url.trim() : ''}
//                       style={{
//                         objectFit: slide.fitStyle,
//                       }}
//                     />
//                   </SwiperSlide>
//                 ))}
//                 <div className='swiper-pagination'></div>
//               </Swiper>
//             </Box>
//             <Box sx={styles.flick}>
//               <Box sx={styles.flickContainer}>
//                 <Typography className="price" component="div">
//                   {item.money} €
//                 </Typography>
//                 <Typography className="product-code" variant="body2" component="div">
//                   {item.model}
//                 </Typography>
//                 <Box>
//                   <ToggleButtonGroup
//                     value={selectedColors[item.id]}
//                     exclusive
//                     onChange={(event, newColorId) => handleChange(item.id, newColorId)}
//                     sx={styles.colorToggleGroup}
//                   >
//                     {item.colorBg.map((option) => (
//                       <ToggleButton 
//                         key={option.id} 
//                         value={option.id}
//                         sx={styles.colorToggleButton}
//                       >
//                         <Box 
//                           sx={{
//                             ...styles.colorCircle, 
//                             backgroundImage: `url(${option.url})`,
//                             background: option.url,
//                           }}
//                         />
//                       </ToggleButton>
//                     ))}
//                   </ToggleButtonGroup>
//                   <Box sx={styles.fickButtom}>
//                     <Box className="fickIcon">
//                       <FavoriteBorder sx={{fontSize: '1.8rem'}} />
//                       <Launch sx={{fontSize: '1.8rem'}} />
//                     </Box>
//                     <Box>
//                       <Button className='btn' variant="contained">View Details</Button>
//                     </Box>  
//                   </Box>
//                 </Box>
//               </Box>
//             </Box>
//           </Card>
//         ))}
//       </Box>
//       <BackToTop totalPages={listData.length}  />
//     </Box>
//   );
// }


import {  SelectedColors, ProductData } from '@/app/types/product';
import BasicCardClient from '@/app/components/BasicCardClient/BasicCardClient';
import { getListAll } from '@/app/api/list';

async function getData() {
  try {
    const response = await getListAll();
    if (response.status === 200) {
      return response.data.list;
    }
  } catch (error) {
    console.error('Error in getData:', error); // 捕获并输出错误信息
  }
  return [];
}

export default async function BasicCard() {
  const listData = await getData();
  const initialColors: SelectedColors = {};
  
  listData.forEach((item: ProductData) => {
    if (item.colorBg.length > 0) {
      initialColors[item.id] = item.colorBg[0].id;
    }
  });
  return <BasicCardClient initialData={listData} initialColors={initialColors} />;
}