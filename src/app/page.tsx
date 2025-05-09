import * as React from 'react';
import { Box, Card, Typography } from "@mui/joy";
import { Toc, ViewAgenda, GridViewSharp } from '@mui/icons-material';
import { styles } from './styles/BasicCard.styles';

export default function BasicCard() {
  return (
    <Box sx={styles.container}>
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
            <Typography>卡片 {item}</Typography>
            <Typography level="body-sm">
              这是一个示例卡片内容，你可以在这里放置任何内容。
            </Typography>
          </Card>
        ))}
      </Box>
    </Box>
  );
}