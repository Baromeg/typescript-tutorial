let hello: string = 'world'
hello = '3'

const getFullName = (name: string, surname: string): string => {
  return name + ' ' + surname
}

console.log(getFullName('true', 'sdfsd'))

interface User {
  name: string
  age?: number
  getMessage(): string
}

const user: User = {
  name: 'monster',
  age: 30,
  getMessage() {
    return 'Hello' + name
  }
}

const user2: User = {
  name: 'Balta',
  getMessage() {
    return 'Hello' + name
  }
}

console.log(user.getMessage())
