import { AuthState } from "../models/AuthState";
import { Store } from './store';

export class GlobalStore extends Store<AuthState> {
  constructor(public url: string) {
    super({ user: {}, loggedIn: false, message: "Store instantiated" });
  }
}
