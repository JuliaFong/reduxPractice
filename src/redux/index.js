import { createStore } from  "https://unpkg.com/redux@4.0.5/es/redux.mjs"

const initialState = {
    buttonClicked: 'no',
    divVisible: 'no'
}

function rootReducer(state = initialState,
    action) {
    switch(action.type) {
    case "BUTTON_CLICKED":
        return Object.assign({}, state, {buttonClicked: 'yes'})
    case 'DIV_VISIBLE':
        return Object.assign({}, state, {divVisible: "yes"})
    default:
        return state
    }
    return state
}

const store = createStore(rootReducer)

const button = document.getElementById('my-button') 
button.addEventListener('click', function() {
    const buttonClickedAction = {
        type: 'BUTTON_CLICKED'
    }
    const divVisible = {
        type: 'DIS_VISIBLE'
    }
    store.dispatch(buttonClickedAction)
    store.dispatch(divVisible)
})

store.subscribe(function() {
    if (store.getState().divVisible === "yes") {
        const div = document.getElementById("my-div")
        div.style.display = "block"
    }
})


// three most important methods of redux
// store.dispatch()  => for dispatching action
// store.subscribe() => for listening to state changes
// store.getState() => for checking the state