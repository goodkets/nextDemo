interface ProductImage {
    id: number;
    url: string;
    fitStyle: 'cover' | 'contain';
}
interface ColorOption {
    id: number;
    images: ProductImage[];
} 
interface colorBg {
    id: number;
    url: string;
}
interface ProductData {
    id: number;
    alt: string;
    money: string;
    colorBg: colorBg[];
    swiperData: ColorOption[];
}

const mockData: ProductData[] = [
    {
      id: 1,
      alt: 'S43131',
      money: '36.95￥',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/blue-background.png'
        },
        {
          id: 3,
          url: 'https://df5apg8r0m634.cloudfront.net/images/skyblue-background.png'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: "https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp",
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: "https://df5apg8r0m634.cloudfront.net/p/11791/middle-2-160ae393d89a3db77893d552f041e1c0.jpg",
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: "https://df5apg8r0m634.cloudfront.net/p/11791/middle-2-160ae393d89a3db77893d552f041e1c0.jpg",
              fitStyle: 'cover'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: "https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp",
              fitStyle: 'cover'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      alt: 'S43132',
      money: '42.95￥',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/blue-background.png'
        },
        {
          id: 3,
          url: 'https://df5apg8r0m634.cloudfront.net/images/skyblue-background.png'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: "https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp",
              fitStyle: 'cover'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: "https://df5apg8r0m634.cloudfront.net/p/11791/middle-2-160ae393d89a3db77893d552f041e1c0.jpg",
              fitStyle: 'contain'
            }
          ]
        }
      ]
    }
  ];
  export default mockData;