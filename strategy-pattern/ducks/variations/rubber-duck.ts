import { NotEater } from '../shared/not-eater';
import { BaseDuck } from './base-duck';
import { NotFlier } from '../shared/not-flier';

export class RubberDuck extends BaseDuck {
  constructor(
    protected readonly notFlier: NotFlier,
    protected readonly notEater: NotEater,
  ) {
    super();
  }
  public fly() {
    this.notFlier.fly();
  }
  public eat() {
    this.notEater.eat();
  }

  public quack() {
    console.log('quacks like rubber duck...');
  }

  protected initLog() {
    console.log('Initialized Rubber Duck');
  }
}
