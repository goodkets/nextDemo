import type { NextApiRequest, NextApiResponse } from 'next';
import mockData from '@/pages/mockData/data';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const data = mockData;
    // // 修改为通过背景图ID筛选
    // const { bgId } = req.body;
    
    // if (bgId) {
    //   const filteredData = data.map(product => {
    //     // 找到对应的背景图对象
    //     const selectedBg = product.colorBg.find(bg => bg.id === bgId);
    //     if (selectedBg) {
    //       // 找到对应的颜色选项
    //       return {
    //         ...product,
    //         colors: product.colors.filter(c => c.id === bgId)
    //       };
    //     }
    //     return product;
    //   });
    //   res.status(200).json(filteredData);
    // } else {
      // 否则返回所有数据
      res.status(200).json(data);
    // }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}