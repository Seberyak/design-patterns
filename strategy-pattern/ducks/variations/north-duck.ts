import { BaseDuck } from './base-duck';
import { IQuackable } from '../shared/interfaces';

export class NorthDuck extends BaseDuck {
  constructor(private readonly notQuacker: IQuackable) {
    super();
  }
  quack() {
    return this.notQuacker.quack();
  }

  protected initLog() {
    console.log('Init NorthDuck');
  }
}
