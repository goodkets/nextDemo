import { NextApiRequest, NextApiResponse } from 'next';
import mockData from '../mockData/data';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '只支持 POST 请求' });
  }

  try {
    // 模拟数据库查询延迟
    await new Promise(resolve => setTimeout(resolve, 500));

    return res.status(200).json({
      status: 200,
      data: {
        list: mockData,
      }
    });
  } catch (error) {
    console.error('获取列表数据失败:', error);
    return res.status(500).json({ message: '服务器内部错误' });
  }
}