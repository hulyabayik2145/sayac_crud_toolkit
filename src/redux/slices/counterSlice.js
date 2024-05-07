/*
hem reducerları hem aksiyonları farklı bir dosya oluşturmak yerine createSlice method yardımıyla tek nir noktada tanımlayacağız
? slice oluşturma: 
* import { createSlice } from "@reduxjs/toolkit"
* gerekli parametreleri tanımlamalıyız
-- gerekli parametreler
* name : slice ismi tipi string
* initialState:  başlangıç state i> obje şeklinde tanımlarız, obje olması zorunlu değildir.
* reducers: aksiyonların görevleirni tanımladığımız fonksiyonları tanımlarız


*/

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { count: 0, isDarkTheme: true },
    //state in nasıl değişeceğine karar veren fonksiyonlar
    reducers: {
        increase: (state, action) => {
            state.count++;
        },
        decrease: (state, action) => {
            state.count--;
        },

        setCount: (state, action) => {
            state.count = action.payload;
        },
        toggleTheme: (state) => {
            state.isDarkTheme = !state.isDarkTheme;
        }

    },
});
// counter slicenin oluşturduğu reducer ı store de kullanmak için export ettik
export default counterSlice.reducer;


//counter slicenin oluşturğuğu aksiyonları  bileşenlerde kullanmak için export ettik..aşağıdaki hali dağıtılmış halidir.
export const { increase, decrease, setCount, toggleTheme } = counterSlice.actions;
//buda diğer yöntem
//export const actions = counterSlice.actions;