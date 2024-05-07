import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
    tasks: [

        {
            "title": "redux-toolkit öğren",
            "author": "hülya",
            "assigned_to": "ahmet",
            "end_date": "2024-05-07",
            "id": "4666ceaf-79d8-47c7-bc35-36fcbd720622"
        },
        {
            "title": "headere düzenle",
            "author": "hülya",
            "assigned_to": "veli",
            "end_date": "2024-05-16",
            "id": "a5e2d7c0-3142-4483-89f0-be25182e5878"
        },
        {
            "title": "SEO optimizasyonu",
            "author": "hülya",
            "assigned_to": "aaa",
            "end_date": "2024-05-31",
            "id": "96e99c47-0eff-4185-a858-d7af14543fb3"
        }
    ]

};

const crudSlice = createSlice({
    name: "crud",
    initialState,
    reducers: {
        addTask: (state, action) => {
            //? a) todo ya id ekle
            action.payload.id = v4();

            //? b) veriyi task lerin arasında ekle
            state.tasks.push(action.payload)


        },
        deleteTask: (state, action) => {
            //? a) id si payload ile gelen elemanı silme işlemi
            // state.tasks = state.tasks.filter(item => item.id !== action.payload)
            //? 1. yöntem  
            // const filtred = state.tasks.filter((task) => task.id !== action.payload);
            // state.tasks = filtred;
            //?2. yöntem
            //? a)silinecek elemanı bul
            const index = state.tasks.findIndex((i) => i.id === action.payload);
            //? a)diziden elemanı kaldır
            state.tasks.splice(index, 1)

        },

        editTask: (state, action) => {
            //? güncel verileine sahip olduğumuz elamanın dizideki halini güncelleme
            //? a) önce elamanın sırasını buluyoruz
            const index = state.tasks.findIndex((i) => i.id === action.payload.id);
            //? b) güncelleme işlemi
            state.tasks.splice(index, 1, action.payload);

        },
    },
});

//? reducer ı store export et
export default crudSlice.reducer;

//? aksiyonları kullanmak için export
export const { addTask, deleteTask, editTask } = crudSlice.actions;