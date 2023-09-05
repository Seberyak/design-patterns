import { BaseDuck } from './base-duck';

export class DefaultDuck extends BaseDuck {
  protected initLog() {
    console.log('Initialized DefaultDuck');
  }
}
