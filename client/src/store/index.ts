import { DataStore } from "./core/DataStore";
import { GlobalStore } from "./core/GlobalStore";
import { Record } from "../../../models/record";

const AuthStore: GlobalStore = new GlobalStore(
  "http://localhost:3000/records/"
);

const RecordsStore: DataStore<Record> = new DataStore<Record>(
  {
    data: [],
    loaded: false,
    pagination: {
        page: 0,
        total: 0
    }
  },
  "http://localhost:3000/records/"
);

(async () => {
  const stores: any[] = [AuthStore, RecordsStore];
  await stores.forEach((s) => Object.freeze(s));
})();

export { RecordsStore, AuthStore };
