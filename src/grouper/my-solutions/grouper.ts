type Name = string
type Age = number

export type Group = Record<Age, Name[]>

export interface Person {
  name: Name
  age: Age
}

export const grouper = (people: Person[]) =>
  people.reduce(
    (group: Group, person: Person) =>
      !group[person.age]
        ? { ...group, [person.age]: [person.name] }
        : { ...group, [person.age]: [...group[person.age], person.name] },
    {}
  )
