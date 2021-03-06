import { BehaviorSubject, Observable } from "rxjs";
import { pluck, distinctUntilChanged, shareReplay, scan } from "rxjs/operators";

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
      shareReplay()
    );
  }

  public $select(selectors: string[]): Observable<any> {
    return this.$stream.pipe(distinctUntilChanged(), pluck(...selectors));
  }

  public push<K extends keyof T>(prop: K, val: unknown): void {
    this.state = { ...this.state, [prop]: val };
  }

  public set(newstate: T): void {
    this.state = { ...this.state, ...newstate };
  }
}
