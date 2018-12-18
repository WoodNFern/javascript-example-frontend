export default (state = {}, action) => {
    console.log("Action: %o", action);
    console.log("State: %o", state)
    return state;
}