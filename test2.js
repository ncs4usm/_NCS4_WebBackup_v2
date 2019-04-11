const logger = store => next => action => {
    console.log('dispatching', action)
    let result = next(action)
    console.log('next state', store.getState())
    return result
}

let store = () => {
    this.state = 'happy';

    this.getState = () => {
        return this.state;
    }
}
let act = 'wow';
let next = thing => {
    console.log(thing);
}

logger(store)(next)(action);