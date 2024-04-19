type Name = string
type Age = number

export interface Person {
  name: Name
  age: Age
}

export type Group = Record<Age, Name[]>

export const grouper = (people: Person[]) => {
  return people
}
