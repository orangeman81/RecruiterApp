import { Store } from "./store";
import { ajax, AjaxResponse } from "rxjs/ajax";
import { tap, take, map, filter } from "rxjs/operators";
import { Observable } from "rxjs";
import { DataState } from "../models/DataState";
import { DataShape } from "../../../../models/DataShape";

export class DataStore<T extends DataShape> extends Store<DataState<T>> {
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

  public $load(): Observable<unknown> {
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

    return $request;
  }

  public $find(id: string): Observable<T | unknown> {
    const $results = this.$select(["data"]).pipe(
      map((state) => state.find((e: T) => e._id === id))
    );

    return $results;
  }

  public $add(payload: T): Observable<T> {
    const $request = ajax({
      url: this.url,
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(payload),
    }).pipe(
      map((res: AjaxResponse) => {
        const newData: T[] = [...this.state.data, res.response] as T[];
        this.push("data", newData);
        return res.response;
      }),
      take(1)
    );

    return $request;
  }

  public $remove(id: string): Observable<unknown> {
    const newData = [...this.state.data.filter((item: T) => item._id != id)];

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

  public $update(id: string, payload: T): Observable<unknown> {
    const $request = ajax({
      url: this.url + id,
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(payload),
    }).pipe(
      map((res: AjaxResponse) => {
        const newData = this.state.data.map((item) => {
          if (item._id === id) {
            item = res.response;
          }
          return item;
        });
        this.push("data", newData);
        return res.response;
      }),
      take(1)
    );

    return $request;
  }
}
