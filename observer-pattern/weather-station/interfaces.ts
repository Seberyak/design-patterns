export interface IObserver {
  update(...args: any[]): void;
  unsubscribe(): void;
}

export interface IObservable {
  register(o: IObserver): void;
  unregister(o: IObserver): void;
  notify(): void;
}
