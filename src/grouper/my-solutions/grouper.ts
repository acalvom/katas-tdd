type Name = string
type Age = number

export interface Person {
  name: Name
  age: Age
}

export type Group = Record<Age, Name[]>

export const grouper = (people: Person[]) => {
  const group = people.reduce((group: Group, person: Person) => {
    return { ...group, [person.age]: [person.name] }
  }, {})
  return group
}
