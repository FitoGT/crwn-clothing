const INITAL_STATE = {
    hidden:true
}

const cartReducer = (state = INITAL_STATE, action ) =>{
    switch(action.type){
        case 'TOGGLE_CART_HIDDEN':
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state
    }
}

export default cartReducer