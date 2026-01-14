
export type ColorOption = {
  name: string;
  hex: string;
};

export type SizeOption = 'S' | 'M' | 'L';

export interface ProductState {
  selectedColor: ColorOption;
  selectedSize: SizeOption;
  quantity: number;
}
