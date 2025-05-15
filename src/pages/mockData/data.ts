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
    model: string;
    money: string;
    colorBg: colorBg[];
    swiperData: ColorOption[];
}


const mockData: ProductData[] = [
    {
      id: 1,
      model: 'S43131',
      money: '36.95',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png'
        },
        {
          id: 2,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(92, 3, 35), rgb(92, 3, 35))'
        },
        {
          id: 4,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(165, 42, 42))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-abed9c1935ea599b294015fef5393d54.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-abed9c1935ea599b294015fef5393d54.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-abed9c1935ea599b294015fef5393d54.jpg',
              fitStyle:'contain'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-2718ed76db82db606d923602e4991ae8.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-2718ed76db82db606d923602e4991ae8.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-2718ed76db82db606d923602e4991ae8.jpg',
              fitStyle: 'contain',
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-33eb9fa460547086882a58beea165b53.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-33eb9fa460547086882a58beea165b53.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-33eb9fa460547086882a58beea165b53.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-d80eb871653506689fdd7362574a2e94.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-d80eb871653506689fdd7362574a2e94.jpg',
              fitStyle: 'contain',
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-d80eb871653506689fdd7362574a2e94.jpg',
              fitStyle: 'contain'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      model: 'S43132',
      money: '42.95',
      colorBg: [
        {
          id: 1,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 2,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(101, 87, 66), rgb(49, 49, 49))'
        },
        {
          id: 3,
          url: '	https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        }
        ,
        {
          id: 4,
          url: 'linear-gradient(rgb(220, 220, 220), rgb(154, 122, 63))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: '	https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-r6tz4bqfh3.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-r6tz4bqfh3.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-r6tz4bqfh3.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-GQJf0gO20d.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-GQJf0gO20d.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-GQJf0gO20d.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-5ab1628075f09777fbbce163f5c72562.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-5ab1628075f09777fbbce163f5c72562.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: '	https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-5ab1628075f09777fbbce163f5c72562.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-i8RWbDNU4C.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-i8RWbDNU4C.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-i8RWbDNU4C.jpg',
              fitStyle: 'contain'
            }
          ]   
        }
      ]
    },
    {
      id: 3,
      model: 'S43133',
      money: '36.95',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/5c523101cdfc80928ff71dd3179cc987.jpg?inline'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(246, 246, 203))'
        },
        {
          id: 4,
          url:'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 5,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(255, 192, 203), rgb(0, 0, 255))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-GsI71BPZNI.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-3d58163620301e3922959f2e84d3c516.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url:'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 5,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-4e78d6a0e7590671a7f1f02ffe937cab.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            }
          ]
        }   
      ]
    },
    {
      id: 4,
      model: 'S43543',
      money: '12.34',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png'
        },
        {
          id: 2,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(92, 3, 35), rgb(92, 3, 35))'
        },
        {
          id: 4,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(165, 42, 42))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-abed9c1935ea599b294015fef5393d54.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-abed9c1935ea599b294015fef5393d54.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-abed9c1935ea599b294015fef5393d54.jpg',
              fitStyle:'contain'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-2718ed76db82db606d923602e4991ae8.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-2718ed76db82db606d923602e4991ae8.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-2718ed76db82db606d923602e4991ae8.jpg',
              fitStyle: 'contain',
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-33eb9fa460547086882a58beea165b53.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-33eb9fa460547086882a58beea165b53.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-33eb9fa460547086882a58beea165b53.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-d80eb871653506689fdd7362574a2e94.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-d80eb871653506689fdd7362574a2e94.jpg',
              fitStyle: 'contain',
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-d80eb871653506689fdd7362574a2e94.jpg',
              fitStyle: 'contain'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      model: 'S4567',
      money: '23,41',
      colorBg: [
        {
          id: 1,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 2,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(101, 87, 66), rgb(49, 49, 49))'
        },
        {
          id: 3,
          url: '	https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        }
        ,
        {
          id: 4,
          url: 'linear-gradient(rgb(220, 220, 220), rgb(154, 122, 63))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: '	https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-r6tz4bqfh3.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-r6tz4bqfh3.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-r6tz4bqfh3.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-GQJf0gO20d.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-GQJf0gO20d.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-GQJf0gO20d.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-5ab1628075f09777fbbce163f5c72562.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-5ab1628075f09777fbbce163f5c72562.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: '	https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-5ab1628075f09777fbbce163f5c72562.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/1-model-image-5914-1563790641.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-1-i8RWbDNU4C.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-2-i8RWbDNU4C.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5914/middle-3-i8RWbDNU4C.jpg',
              fitStyle: 'contain'
            }
          ]   
        }
      ]
    },
    {
      id: 6,
      model: 'S43133',
      money: '36.95',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/5c523101cdfc80928ff71dd3179cc987.jpg?inline'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(246, 246, 203))'
        },
        {
          id: 4,
          url:'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 5,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(255, 192, 203), rgb(0, 0, 255))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-GsI71BPZNI.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-3d58163620301e3922959f2e84d3c516.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url:'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 5,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-4e78d6a0e7590671a7f1f02ffe937cab.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            }
          ]
        }   
      ]
    },
    {
      id: 7,
      model: 'S43133',
      money: '36.95',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/5c523101cdfc80928ff71dd3179cc987.jpg?inline'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(246, 246, 203))'
        },
        {
          id: 4,
          url:'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 5,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(255, 192, 203), rgb(0, 0, 255))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-GsI71BPZNI.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-3d58163620301e3922959f2e84d3c516.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url:'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 5,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-4e78d6a0e7590671a7f1f02ffe937cab.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            }
          ]
        }   
      ]
    },
    {
      id: 8,
      model: 'S43133',
      money: '36.95',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/5c523101cdfc80928ff71dd3179cc987.jpg?inline'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(246, 246, 203))'
        },
        {
          id: 4,
          url:'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 5,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(255, 192, 203), rgb(0, 0, 255))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-GsI71BPZNI.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-3d58163620301e3922959f2e84d3c516.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url:'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 5,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-4e78d6a0e7590671a7f1f02ffe937cab.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            }
          ]
        }   
      ]
    },
    {
      id: 9,
      model: 'S43543',
      money: '12.34',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png'
        },
        {
          id: 2,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(92, 3, 35), rgb(92, 3, 35))'
        },
        {
          id: 4,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(165, 42, 42))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-abed9c1935ea599b294015fef5393d54.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-abed9c1935ea599b294015fef5393d54.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-abed9c1935ea599b294015fef5393d54.jpg',
              fitStyle:'contain'
            }
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-2718ed76db82db606d923602e4991ae8.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-2718ed76db82db606d923602e4991ae8.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-2718ed76db82db606d923602e4991ae8.jpg',
              fitStyle: 'contain',
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-33eb9fa460547086882a58beea165b53.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-33eb9fa460547086882a58beea165b53.jpg',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-33eb9fa460547086882a58beea165b53.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-1-d80eb871653506689fdd7362574a2e94.webp',
              fitStyle: 'contain'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-2-d80eb871653506689fdd7362574a2e94.jpg',
              fitStyle: 'contain',
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/10291/middle-3-d80eb871653506689fdd7362574a2e94.jpg',
              fitStyle: 'contain'
            }
          ]
        }
      ]
    },
    {
      id: 10,
      model: 'S43133',
      money: '36.95',
      colorBg: [
        {
          id: 1,
          url: 'https://df5apg8r0m634.cloudfront.net/images/5c523101cdfc80928ff71dd3179cc987.jpg?inline'
        },
        {
          id: 2,
          url: 'https://df5apg8r0m634.cloudfront.net/images/e2e229733483885b0d0b83c2946eb75c.png?inline'
        },
        {
          id: 3,
          url: 'linear-gradient(rgb(165, 42, 42), rgb(246, 246, 203))'
        },
        {
          id: 4,
          url:'linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0))'
        },
        {
          id: 5,
          url: 'linear-gradient(rgb(0, 0, 0), rgb(255, 192, 203), rgb(0, 0, 255))'
        }
      ],
      swiperData: [
        {
          id: 1,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-145ab1bb9fffb5ba4cfbd986a9a4e455.webp',
              fitStyle: 'contain'
            },
          ]
        },
        {
          id: 2,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-GsI71BPZNI.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-GsI71BPZNI.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 3,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-3d58163620301e3922959f2e84d3c516.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url:'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-3d58163620301e3922959f2e84d3c516.jpg',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 4,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-R8D84Nx9w9.webp',
              fitStyle: 'contain'
            }
          ]
        },
        {
          id: 5,
          images: [
            {
              id: 1,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/1-model-248d8cb898160aa7ea5c2d380339cddc.webp',
              fitStyle: 'cover'
            },
            {
              id: 2,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-1-4e78d6a0e7590671a7f1f02ffe937cab.webp',
              fitStyle: 'contain'
            },
            {
              id: 3,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-2-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            },
            {
              id: 4,
              url: 'https://df5apg8r0m634.cloudfront.net/p/5661/middle-3-4e78d6a0e7590671a7f1f02ffe937cab.jpg',
              fitStyle: 'contain'
            }
          ]
        }   
      ]
    },
  ];
  export default mockData;