import { Store } from "./store";
import { ajax } from "rxjs/ajax";
import { tap, take, map, filter } from "rxjs/operators";
import { Observable } from "rxjs";
import { DataState } from "../models/DataState";

export class DataStore<T> extends Store<DataState<T>> {
  private headers = {
    "Content-Type": "application/json",
  };

  constructor(
    initialState: DataState<T>,
    public url: string,
    public name: string
  ) {
    super(initialState);
  }

  public $load(): Observable<T[]> {
    const $request = ajax.getJSON(this.url).pipe(
      filter(() => !this.state.loaded),
      tap((res: unknown) => {
        this.set({
          data: res as T[],
          loaded: true,
        });
      }),
      take(1)
    );

    return $request as Observable<T[]>;
  }

  public $add(payload: T): Observable<T> {
    const $request = ajax({
      url: this.url,
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload),
    }).pipe(
      map((res: any) => {
        const newData = [...this.state.data, res.response];
        this.push("data", newData);
        return res as T;
      }),
      take(1)
    );

    return $request;
  }

  public $remove(id: string): Observable<unknown> {
    const newData = [...this.state.data.filter((item: any) => item._id != id)];

    const $request = ajax({
      url: this.url + id,
      method: "DELETE",
      headers: this.headers,
    }).pipe(
      tap(() => {
        this.push("data", newData);
      }),
      take(1)
    );

    return $request;
  }

  public $update(id: string, payload: unknown): Observable<unknown> {
    const $request = ajax({
      url: this.url + `/update/${id}`,
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(payload),
    }).pipe(
      map((res: any) => {
        const newData = [
          ...this.state.data.map((item: any) =>
            item._id === id ? (item = res.response) : null
          ),
        ];
        this.push("data", newData);
        return res;
      }),
      take(1)
    );

    return $request;
  }
}
