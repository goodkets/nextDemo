
import { Card, CardContent, CardCover, Typography, ButtonGroup, Button } from '@mui/joy';
import Image from "next/image";

// 模拟商品数据，这里可以添加更多数据
const products = [
  { id: 1, name: '商品 1', price: 100, image: 'https://df5apg8r0m634.cloudfront.net/p/11791/middle-1-160ae393d89a3db77893d552f041e1c0.webp' },
  { id: 2, name: '商品 2', price: 200, image: 'https://df5apg8r0m634.cloudfront.net/p/11791/middle-1-160ae393d89a3db77893d552f041e1c0.webp' },
  { id: 1, name: '商品 1', price: 100, image: 'https://df5apg8r0m634.cloudfront.net/p/11791/middle-1-160ae393d89a3db77893d552f041e1c0.webp' },
  { id: 2, name: '商品 2', price: 200, image: 'https://df5apg8r0m634.cloudfront.net/p/11791/middle-1-160ae393d89a3db77893d552f041e1c0.webp' },
  { id: 1, name: '商品 1', price: 100, image: 'https://df5apg8r0m634.cloudfront.net/p/11791/middle-1-160ae393d89a3db77893d552f041e1c0.webp' },
  { id: 2, name: '商品 2', price: 200, image: 'https://df5apg8r0m634.cloudfront.net/p/11791/middle-1-160ae393d89a3db77893d552f041e1c0.webp' },
  // 可以添加更多商品
];

export default function Home() {
  return (
    <div style={{
      height: '100vh',
      overflowY: 'scroll',
      scrollSnapType: 'y mandatory',
    }}>
      {products.map((product) => (
        <Card
          key={product.id}
          variant="outlined"
          sx={{
            width: '100%',
            height: '100vh',
            scrollSnapAlign: 'start',
            boxSizing: 'border-box',
          }}
        >
          <CardCover>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'cover' }}
            />
          </CardCover>
          <CardContent>
            <Typography level="h3" textColor="neutral.800">
              {product.name}
            </Typography>
            <Typography textColor="neutral.600">
              价格: ¥{product.price}
            </Typography>
            <ButtonGroup>
              <Button variant="solid" color="primary">
                立即购买
              </Button>
              <Button variant="outlined" color="primary">
                加入购物车
              </Button>
            </ButtonGroup>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
