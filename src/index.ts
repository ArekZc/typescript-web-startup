interface Clock {
  currentTime: Date
  tick(): void
  setTime(date: Date): Clock
}

interface ClockConstructor {
  new (hour: number, minute: number): Clock
}

class DigitalClock implements Clock {
  currentTime: Date

  constructor(hour: number, minute: number) {}

  tick() {
    console.log('beep beep')
  }

  setTime(date: Date) {
    return this
  }
}

let ctor: ClockConstructor = DigitalClock

const clock = new ctor(12, 12)

interface StringArray {
  [index: number]: string
}

const myArray: StringArray = ['Bob', 'Fred']


