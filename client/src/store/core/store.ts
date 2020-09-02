import { BehaviorSubject, Observable } from "rxjs";
import {
  pluck,
  distinctUntilChanged,
  shareReplay,
  tap,
  scan,
} from "rxjs/operators";

export abstract class Store<T> {
  private state$: BehaviorSubject<T>;

  protected constructor(public initialState: T) {
    this.state$ = new BehaviorSubject(initialState);
  }

  protected get state(): T {
    return this.state$.getValue();
  }

  protected set state(value: T) {
    this.state$.next(value);
  }

  public get $stream(): Observable<T> {
    return this.state$.asObservable().pipe(
      scan((acc, curr) => {
        return { ...acc, ...curr };
      }, this.initialState),
      shareReplay(),
      tap((state: T) =>
        console.log(`%c ${Store.name}`, "color: #ff5722", state)
      )
    );
  }

  public $select(selectors: string[]): Observable<any> {
    return this.$stream.pipe(distinctUntilChanged(), pluck(...selectors));
  }

  public push(prop: string, val: any): void {
    this.state = { ...this.state, [prop]: val };
  }

  public set(newstate: T): void {
    this.state = { ...this.state, ...newstate };
  }
}
