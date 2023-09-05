import { BaseDuck } from './base-duck';
import { IEatable, IFlyable } from '../shared/interfaces';

export class CityDuck extends BaseDuck {
  constructor(
    private readonly beansEater: IEatable,
    private readonly notFlier: IFlyable,
  ) {
    super();
  }
  eat() {
    this.beansEater.eat();
  }
  fly() {
    this.notFlier.fly();
  }

  protected initLog() {
    console.log('Initialized City Duck');
  }
}
