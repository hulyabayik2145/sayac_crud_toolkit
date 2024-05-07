import { configureStore } from "@reduxjs/toolkit";

//reducer ları import ettik
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

//configure-createStore farklaro
// varsayılan olarak thunk sayılı gelir
// verilen reducerları otomatik olarak birleştirir.
// devtools eklentisini destekler.
export default configureStore({
    reducer: { counterReducer, crudReducer },
})