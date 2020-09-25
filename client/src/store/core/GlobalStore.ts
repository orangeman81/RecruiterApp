import { ajax, AjaxResponse } from "rxjs/ajax";
import { map, take, tap } from "rxjs/operators";
import { AuthState } from "../models/AuthState";
import { CredentialsDTO } from "../../../../models/auth";
import { Store } from "./store";
import { Observable } from "rxjs";

export class GlobalStore extends Store<AuthState> {
  constructor(public url: string) {
    super({ user: {}, loggedIn: false, message: "Store instantiated" });
  }

  private headers = {
    "Content-Type": "application/json",
  };

  public $login(credentials: CredentialsDTO): Observable<AjaxResponse> {
    const $request = ajax({
      url: this.url + "signin",
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(credentials),
    }).pipe(
      map((res: AjaxResponse) => res.response),
      tap((res: any) => {
        this.set({
          user: res["user"],
          loggedIn: true,
          message: "user loggedin",
        });
        console.log(this.state);
        localStorage.setItem("token", res["accessToken"]);
      }),
      take(1)
    );

    return $request;
  }
}
