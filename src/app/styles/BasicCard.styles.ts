import { SxProps } from '@mui/joy/styles/types';

interface Styles {
  container: SxProps;
  header: SxProps;
  filterButton: SxProps;
  filterText: React.CSSProperties;
  viewButtons: SxProps;
  contentContainer: SxProps;
  card: SxProps;
  tocIcon: { 
    transform: string;
    backgroundSize: string;
    fontSize: string;
    color: string;
  };
}

export const styles: Styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    overflow: 'hidden',
    backgroundColor: '#f4f4f4',
  },
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
  viewButtons: {
    display: 'flex',
    padding: '0 0.2rem',
    gap: '0.8rem'
  },
  contentContainer: {
    flex: 1,
    overflow: 'auto',
    scrollSnapType: 'y mandatory',
    '&::-webkit-scrollbar': {
      display: 'none' 
    },
    scrollbarWidth: 'none', 
    msOverflowStyle: 'none', 
    '&': {
      msOverflowStyle: 'none', 
      scrollbarWidth: 'none' 
    }
  },
  card: {
    border:'none',
    padding: '0 2px',
    height: 'calc(100vh - 3.7rem)',
    scrollSnapAlign: 'start',
    scrollSnapStop: 'always',
    transition: 'transform 0.2s ease',
  },
  tocIcon: {
    transform: 'rotate(180deg)',
    backgroundSize: '100%',
    fontSize: '1.8rem',
    color: '#4B4953'
  }
};