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
    padding: '0 0.5rem',
    backgroundColor: 'white',
    alignItems: 'center',
  },
  filterButton: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
    padding: '0 0.3rem',
    border: '1px solid #707070',
    borderRadius: '4px',
  },
  filterText: {
    fontSize: '0.8rem',
    fontWeight: '800',
    color: '#121a24',
    marginLeft: '0.1rem',
    fontFamily: '"Roboto-Regular",Helvetica,Arial,sans-serif',
  },
  tocIcon: {
    transform: 'rotate(180deg)',
    backgroundSize: '100%',
    fontSize: '1.8rem',
    color: '#4B4953'
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
    height: 'calc(100vh - 3.7rem)',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    transition: 'transform 0.2s ease',
  },

  // 5. 产品展示区域
  productContainer: {
    position: 'absolute',
    zIndex: 1,
    height: '655px',
    width: '100%',
    backgroundColor: '#ccc'
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
    borderRadius: '16px',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: '6px 16px',
    '& .price': {
      fontSize: '18px',
      fontWeight: 600,
      fontFamily: 'Roboto-Medium, sans-serif',
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
    width: '1.3rem',
    height: '1.3rem',
    borderRadius: '50%',
    border: 'none',
    transition: 'background-color 0.2s ease'
  }
};