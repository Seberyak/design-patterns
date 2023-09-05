import { IDuck } from '../shared/interfaces';

export abstract class BaseDuck implements IDuck {
  protected initLog() {
    console.log('Initialized BaseDuck');
  }
  constructor() {
    this.initLog();
  }
  eat(): void {
    console.log('default behavior: eat');
  }

  fly(): void {
    console.log('default behavior: fly');
  }

  quack(): void {
    console.log('default behavior: quack');
  }
}
