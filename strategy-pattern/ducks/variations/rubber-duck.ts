import { BaseDuck } from './base-duck';
import { IEatable, IFlyable } from '../shared/interfaces';

export class RubberDuck extends BaseDuck {
  constructor(
    protected readonly notFlier: IFlyable,
    protected readonly notEater: IEatable,
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
