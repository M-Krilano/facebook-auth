//import { AsyncStorage } from "react-native";
import { applyMiddleware, compose, createStore } from "redux";
//import { autoRehydrate, persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "../reducers";

const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk)
    //autoRehydrate()
  )
);

export default store;
