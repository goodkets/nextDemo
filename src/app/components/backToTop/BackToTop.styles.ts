import { SxProps } from '@mui/material';

interface Styles {
  pageNumberStyles: SxProps;
  backToTopStyles: SxProps;
  horizontalLineStyle: SxProps;
}

export const styles: Styles = {
  // 页码样式
  pageNumberStyles: {
    position: 'fixed',
    right: '1.1rem',
    bottom: '5.53rem',
    zIndex: 61,
    width: '2.5rem',
    height: '2.5rem',
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.7)',
    boxShadow: '0.1rem 0.1rem 0.5rem 0rem rgba(126, 126, 126, 0.44)',
    color: '#26ABFF',
    fontSize: '0.7rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '0'
  },

  // 回到顶部按钮样式
  backToTopStyles: {
    width: '2.5rem',
    height: '2.5rem',
    color: '#26ABFF',
    fontSize: '4.0rem',
    background: 'rgba(255,255,255,0.7)',
    boxShadow: '0.1rem 0.1rem 0.5rem 0rem rgba(126, 126, 126, 0.44)',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    right: '1.1rem',
    bottom: '5.53rem',
    position: 'fixed',
    zIndex: 61
  },
  horizontalLineStyle: {
      width: '1.3rem',
      height: '1px',
      backgroundColor: '#26ABFF',
      margin: '0.15rem 0'
  }
};