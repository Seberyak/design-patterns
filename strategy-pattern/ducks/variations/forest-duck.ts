import { BaseDuck } from './base-duck';
import { BeansEater } from '../shared/beans-eater';

export class ForestDuck extends BaseDuck {
  constructor(private readonly beansEater: BeansEater) {
    super();
  }

  protected initLog() {
    console.log('Initialized Forest Duck');
  }

  eat() {
    return this.beansEater.eat();
  }
}
