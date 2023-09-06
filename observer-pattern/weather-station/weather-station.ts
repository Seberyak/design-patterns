import { IObservable, IObserver } from './interfaces';
import { faker } from '@faker-js/faker';

export class WeatherStation implements IObservable {
  protected observers: IObserver[] = [];
  protected interval: NodeJS.Timeout;
  constructor() {
    this.interval = setInterval(() => {
      if (this.observers.length === 0) {
        console.log('No observers left. Stopping...');
        clearInterval(this.interval);
        return;
      }
      const temperature = faker.number.float({
        max: 50,
        min: 0,
        precision: 0.1,
      });
      this.notify(temperature);
    }, 1000);
  }
  notify(...args: any[]): void {
    this.observers.forEach((observer) => observer.update(args));
  }

  register(o: IObserver): void {
    this.observers.push(o);
  }

  unregister(o: IObserver): void {
    this.observers = this.observers.filter((observer) => observer !== o);
    o.unsubscribe();
  }
}
