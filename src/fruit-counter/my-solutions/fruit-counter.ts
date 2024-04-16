type FruitShop = { [key: string]: number }

export const getFruitsCount = (array: string[]) =>
  array.reduce(
    (fruitShop: FruitShop, fruit: string) =>
      fruitShop[fruit] === undefined
        ? { ...fruitShop, [fruit]: 1 }
        : { ...fruitShop, [fruit]: fruitShop[fruit] + 1 },
    {}
  )
