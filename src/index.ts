abstract class Animal {
  public spiece: string

  public move(distance: number): void {
    console.log(`Animal moved by ${distance}m`)
  }
}

class Pet extends Animal {
  public name: string

  constructor(name: string) {
    super()
    this.name = name
  }
}

new Pet('jurek').name
