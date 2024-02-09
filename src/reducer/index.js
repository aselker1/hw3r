import {createStore} from "redux";
import reducer from "./action/reducer";

const store = createStore(reducer);

export default store;