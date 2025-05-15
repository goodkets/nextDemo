// app/components/BasicCardClient.tsx
'use client';

import { useState } from 'react';
import { Box, Card, Typography, ToggleButton, ToggleButtonGroup, Button } from "@mui/material";
// ... 其他导入保持不变

export default function BasicCardClient({ 
  initialData,
  initialColors 
}: {
  initialData: ProductData[];
  initialColors: SelectedColors;
}) {
  const [listData, setListData] = useState<ProductData[]>(initialData);
  const [selectedColors, setSelectedColors] = useState<SelectedColors>(initialColors);

  // ... 保留所有客户端交互逻辑

  return (
    // ... JSX 保持不变
  );
}