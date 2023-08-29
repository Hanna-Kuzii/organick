export interface Good {
  id: number,
  category: string,
  name: string,
  image: string,
  priceNew: number,
  priceOld: number | null,
  rating: number,
  information: string,
  description: string,
  additional_info: string
}