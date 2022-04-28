import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Count from './Count';
import Count1 from './Count1';


const initialState={
  count:50
}

function reducer(state=initialState,action){
  switch(action.type){
    case "INCREMENT" :
      return{
        count:state.count+1
      };
      case "DECREMENT" :
        return{
          count:state.count-1
        };
        default :
        return state;
  }

}

const store = createStore(reducer);
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"DECREMENT"});

export default function App() {
  return (
    <Provider store={store}>
    <div style={{textAlign:"center"}}>
      <h1>app component</h1>
      <Count />
      <Count1 />
    </div>
    </Provider>
  )
}
