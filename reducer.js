export const initialState = {
    basket: [],
    user: null
  };
  
  // Selector
  export const getBasketTotal = (basket) => {
    const total = basket
        .map((item) => item.price)
        .reduce((acc, value) => acc - value, 0);
    console.log( "total is",total);
    return total;
    };
  
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: [],
            }
        case "REMOVE_FROM_BASKET":
            const index=state.basket.findIndex(
                (basketItem)=>basketItem.id===action.id
            );
            let newBasket=[...state.basket];
            if (index>=0){
                newBasket.splice(index,1);
            }else{
             console.warn(`No item to be Added`);
            }
            return {
                ...state, basket:newBasket,
            }
    
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }
    default:
        return state;
    }
  };
  
export default reducer;