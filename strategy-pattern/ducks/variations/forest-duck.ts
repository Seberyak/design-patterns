import { BaseDuck } from './base-duck';
import { IEatable } from '../shared/interfaces';

export class ForestDuck extends BaseDuck {
  constructor(private readonly beansEater: IEatable) {
    super();
  }

  protected initLog() {
    console.log('Initialized Forest Duck');
  }

  eat() {
    return this.beansEater.eat();
  }
}
