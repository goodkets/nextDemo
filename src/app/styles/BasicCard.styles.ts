import { SxProps } from '@mui/material/styles';

interface Styles {
  // 1. 最外层容器
  container: SxProps;
  
  // 2. 头部区域
  header: SxProps;
  filterButton: SxProps;
  filterText: React.CSSProperties;
  tocIcon: SxProps;
  viewButtons: SxProps;
  
  // 3. 内容区域
  contentContainer: SxProps;
  
  // 4. 卡片相关
  card: SxProps;
  
  // 5. 产品展示区域
  productContainer: SxProps;
  
  // 6. 底部信息区域
  flick: SxProps;
  flickContainer: SxProps;
  
  // 7. 颜色选择相关
  colorToggleGroup: SxProps;
  colorToggleButton: SxProps;
  colorCircle: SxProps;
  // 8. 尺寸选择相关
  fickButtom: SxProps;
}

export const styles: Styles = {
  // 1. 最外层容器
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#f4f4f4',
  },

  // 2. 头部区域及其子元素
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    height: '3.6rem',
    padding: '0 0.6rem',
    fontFamily: '"Roboto-Regular",Helvetica,Arial,sans-serif',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    flexShrink:0,
    backgroundColor: '#fff',
    borderRadius: '4px',
    border: '1px solid #707070',
    padding: '0.2rem 0.5rem'
  },
  filterText: {
    fontWeight: 'bolder',
    color: '#121a24',
    marginLeft: '0.5rem',
    // fontFamily: '"Roboto-Regular",Helvetica,Arial,sans-serif',
  },
  tocIcon: {
    width: '16px',
    height: '21px',
    background: 'url("https://df5apg8r0m634.cloudfront.net/images/2024/0731/a696671b6c8e7e9d93f0eccfb873a102.webp") no-repeat center center',
    backgroundSize: '100%' 
    // transform: 'rotate(180deg)',
    // backgroundSize: '100%',
    // fontSize: '1.8rem',
    // color: '#4B4953'
  },
  viewButtons: {
    display: 'flex',
    padding: '0 0.2rem',
    gap: '0.8rem'
  },

  // 3. 内容区域
  contentContainer: {
    flex: 1,
    overflow: 'auto',
    scrollSnapType: 'y mandatory',
    '&::-webkit-scrollbar': {
      display: 'none'
    },
    scrollbarWidth: 'none',
    msOverflowStyle: 'none',
  },

  // 4. 卡片样式
  card: {
    position: 'relative',
    border: 'none',
    height: 'calc(100vh - 3.6rem)',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    transition: 'transform 0.2s ease',
  },

  // 5. 产品展示区域
  productContainer: {
    position: 'absolute',
    zIndex: 1,
    height: 'calc(100vh - 11.5rem)',
    width: '100%',
    backgroundColor: 'rgb(247, 249, 250)' ,
    '& .swiperContainer': {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    '& .swiperImage': {
      maxWidth: 'unset',
      width: '100%',
      backgroundColor: 'rgb(247, 249, 250)'
    },
    '&  .swiper-pagination': {
        position: 'absolute',
        top: '10px',
        right: '10px',
        width: 'auto',
        left: 'auto',
        color: '#fff',
        background: 'rgba(0,0,0,0.3)',
        padding: '4px 8px',
        borderRadius: '12px',
        fontSize: '12px',
        height: '20px',
    }
  },

  // 6. 底部信息区域
  flick: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    zIndex: 2,
    height: '145px',
    width: '100%',
    padding: '0px 0.1rem',
    overflow: 'hidden',
  },
  flickContainer: {
    width: '100%',
    height: '100%',
    borderRadius: '16px 16px 0 0',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '6px 16px',
    '& .price': {
      fontSize: '18px',
      fontWeight: 600,
      fontFamily: 'Roboto-Medium',
      color: 'rgb(18, 26, 36)',
    },
    '& .product-code': {
      fontSize: '14px',
      fontWeight: 'bold',
      fontFamily: 'Roboto-Medium, sans-serif',
      color: 'rgb(18, 26, 36)'
    }
  },

  // 7. 颜色选择器相关
  colorToggleGroup: {
    gap: '8px',
    marginTop: '10px',
    '& .MuiToggleButton-root': {
      border: 'none',
      borderRadius: '50%',
      padding: '4px',
      width: '2.0rem',
      height: '2.0rem',
      '&.Mui-selected': {
        backgroundColor: 'transparent',
      },
      '&:hover': {
        backgroundColor: 'transparent',
      },
      '& .MuiTouchRipple-root': {
        display: 'none'
      }
    }
  },
  colorToggleButton: {
    '&.Mui-selected': {
      padding: '2px',
      border: '1px solid #26ABFF',
    }
  },
  colorCircle: {
    width: '1.4rem',
    height: '1.4rem',
    borderRadius: '50%',
    border: 'none',
    transition: 'background-color 0.2s ease',
  },
  fickButtom: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& .fickIcon' : {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between',
      gap: '1.2rem',
      marginLeft:"-1px",
      marginTop: '7px',
      fontSize: '0.45rem',
      verticalAlign: 'middle',
      fontWeight: 'bold',
      color: 'rgb(50, 51, 51)'
    },
    '& .btn' : {
      backgroundColor:"rgb(38, 171, 255)",
      fontSize: '1.0rem',
      fontWeight: 'bold',
      color: 'rgb(255, 255, 255)s',
      fontFamily: "'Roboto-Regular', Helvetica, Arial, sans-serif",
      width: '10.6rem',
      height: '2.3rem',
      textTransform: 'none'
    }
  },
};