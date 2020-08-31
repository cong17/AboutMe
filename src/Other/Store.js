import { createStore } from "redux"





const DataInitialState = {

    home: {},
    resume: {},
    gallery: {},
    numberImageDisplay: 15

}

const allReducer = (state = DataInitialState, action) => {
    switch (action.type) {
        case "UPDATE_DATA_ALL":
            return { ...state, home: action.data.home, resume: action.data.resume, gallery: action.data.gallery, }
        case "LOAD_MORE":
            return { ...state, numberImageDisplay: state.numberImageDisplay + 10 }
        default:
            return state
    }
}



const store = createStore(allReducer);

console.log(store.getState())
export default store;

