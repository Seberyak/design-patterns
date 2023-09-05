import { RubberDuck } from './rubber-duck';
import { IEatable, IFlyable, IQuackable } from '../shared/interfaces';

export class BrokenRubberDuck extends RubberDuck {
  constructor(
    protected readonly notFlier: IFlyable,
    protected readonly notEater: IEatable,
    protected readonly silentQuackable: IQuackable,
  ) {
    super(notFlier, notEater);
  }

  protected initLog() {
    super.initLog();
    console.log('Broke...');
  }

  public quack() {
    return this.silentQuackable.quack();
  }
}
