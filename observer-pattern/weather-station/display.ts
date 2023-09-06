import { IObservable, IObserver } from './interfaces';
import { faker } from '@faker-js/faker';

export class Display implements IObserver {
  protected temperature: {
    last: number;
    current: number;
  };
  protected interval: NodeJS.Timeout;

  constructor(
    protected readonly o: IObservable,
    protected readonly name = faker.internet.displayName(),
  ) {
    this.temperature = { current: null, last: null };
    this.interval = setInterval(() => {
      if (this.temperature.current === null) return;
      if (this.temperature.current !== this.temperature.last) {
        console.log('='.repeat(100));
        console.log(
          `${name} : Temperature is ${this.temperature.current} degrees.`,
        );
        console.log('='.repeat(100));
        this.temperature.last = this.temperature.current;
      }
    }, 10);
  }

  update(val: number): void {
    this.temperature.current = val;
  }

  public unsubscribe(): void {
    console.log(`${this.name} is unsubscribing...`);
    clearInterval(this.interval);
  }
}
