import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware } from 'redux'
import evenLists from './reducers'
import App from './components/App'
import ReduxThunk from 'redux-thunk';



//let store = createStore(evenLists)

//Applying redux-thunk 

const store = createStore(evenLists,applyMiddleware(ReduxThunk));


render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
