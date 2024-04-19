type Name = string
type Age = number

export interface Person {
  name: Name
  age: Age
}

export type Group = Record<Age, Name[]>

export const grouper = (people: Person[]) => {
  const group = people.reduce((group: Group, person: Person) => {
    if (!group[person.age]) return { ...group, [person.age]: [person.name] }
    else return { ...group, [person.age]: [...group[person.age], person.name] }
  }, {})

  return group
}
