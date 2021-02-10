class Animal {
  public name: string;

  public constructor(theName: string) {
    this.name = theName;
  }

  public move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

//////
class SomeAnimal {
  #name: string;
  constructor(theName: string) {
    this.#name = theName;
  }
}

new SomeAnimal("Cat").#name;

/////
class AnyAnimal {
  private name: string;

  constructor(theName: string) {
    this.name = theName;
  }
}

new AnyAnimal("Cat").name;

/////