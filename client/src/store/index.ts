import { GlobalStore } from "./core/GlobalStore";

const AuthStore: GlobalStore = new GlobalStore(
  "http://localhost:3000/auth/"
);

// (async () => {
//   const stores: any[] = [AuthStore, RecordsStore];
//   await stores.forEach((s) => Object.freeze(s));
// })();

Object.freeze(AuthStore);

export { AuthStore };
