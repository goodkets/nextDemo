// 图片适配方式类型
export type FitStyle = 'cover' | 'contain';

// 基础 ID 类型
type WithId = {
  readonly id: number;
};

// 基础 URL 类型
type WithUrl = {
  readonly url: string;
};

// 产品图片类型
export type ProductImage = WithId & WithUrl & {
  readonly fitStyle: FitStyle;
};

// 颜色选项类型
export type ColorOption = WithId & {
  readonly images: ReadonlyArray<ProductImage>;
};

// 颜色背景类型
export type ColorBg = WithId & WithUrl;

// 产品基础信息类型
type ProductBase = {
  readonly model: string;
  readonly alt: string;
  readonly money: string;
};

// 产品数据类型
export type ProductData = ProductBase & WithId & {
  readonly colorBg: ReadonlyArray<ColorBg>;
  readonly swiperData: ReadonlyArray<ColorOption>;
};

// 选中颜色映射类型
export type SelectedColors = Record<number, number>;

// 颜色选择事件处理器类型
export type ColorChangeHandler = (cardId: number, newColorId: number | null) => void;

