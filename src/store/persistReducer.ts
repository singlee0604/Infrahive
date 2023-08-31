import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "techcom-casino-v1",
  storage,
  whitelist: ["auth", "menu"],
};

const persist = (reducers: any) => persistReducer(persistConfig, reducers);

export default persist;
