export const getFruitsCount = (array: string[]) => {
  type FruitShop = { [key: string]: number }

  return array.reduce((fruitShop: FruitShop, fruit: string) => {
    if (fruitShop[fruit] === undefined) {
      return { ...fruitShop, [fruit]: 1 }
    } else {
      return { ...fruitShop, [fruit]: fruitShop[fruit] + 1 }
    }
  }, {})
}
