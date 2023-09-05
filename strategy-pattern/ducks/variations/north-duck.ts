import { BaseDuck } from './base-duck';
import { SilentQuackable } from '../shared/silent-quackable';

export class NorthDuck extends BaseDuck {
  constructor(private readonly notQuacker: SilentQuackable) {
    super();
  }
  quack() {
    return this.notQuacker.quack();
  }

  protected initLog() {
    console.log('Init NorthDuck');
  }
}
