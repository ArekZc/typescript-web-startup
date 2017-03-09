const isDone: boolean = false
const age: number = 10
const fullName: string = 'Arek Zając'
const what: undefined = undefined
const iNull: null = null
const unusable: void = undefined
const rawObject: object = {}

const obj: Object = {}
const count: Number = 12

const numbers: number[] = [1, 12]
const numbersGeneric: Array<number> = [1, 12]
const tuple: [string, number] = ['category', 12]

enum Color {Red, Green, Blue}
enum Shadows {Red = 1, Green = 2, Blue = 4}

let notSure: any = 4

function isActive(active: boolean): boolean {
  return active
}

let activable: (active: boolean) => boolean = isActive

function throwError(message: string): never {
  throw new Error(message)
}
