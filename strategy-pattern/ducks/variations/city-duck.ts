import { BaseDuck } from './base-duck';
import { BeansEater } from '../shared/beans-eater';
import { NotFlier } from '../shared/not-flier';

export class CityDuck extends BaseDuck {
  constructor(
    private readonly beansEater: BeansEater,
    private readonly notFlier: NotFlier,
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
