import { NextApiRequest, NextApiResponse } from 'next';
import mockData from '../mockData/data';

interface ListRequestBody {
  page?: number;
  pageSize?: number;
  color?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: '只支持 POST 请求' });
  }

  try {
    const { page = 1, pageSize = 5 } = req.body as ListRequestBody;
    
    // 模拟数据库查询延迟
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // 计算分页
    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const filteredData = mockData;
    // const paginatedData = filteredData.slice(start, end);
    const paginatedData = filteredData;
    return res.status(200).json({
      status: 200,
      data: {
        list: paginatedData,
        total: filteredData.length,
        page,
        pageSize,
        totalPages: Math.ceil(filteredData.length / pageSize)
      }
    });
  } catch (error) {
    console.error('获取列表数据失败:', error);
    return res.status(500).json({ message: '服务器内部错误' });
  }
}