import { createStore } from  "https://unpkg.com/redux@4.0.5/es/redux.mjs"

const initialState = {
    buttonClicked: 'no',
    divVisible: 'no'
}

function rootReducer(state = initialState, action) {
    switch(action.type) {

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



store.subscribe()