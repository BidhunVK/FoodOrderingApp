import { createContext, useReducer } from "react";

const [cart, cartDispatch] = useReducer(cartReducer, { items: [] });

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    //... update the state to add a meal item
    state.items.push(action.item);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items]

    if(existingCartItemIndex > -1){

        const existingItem = state.items[existingCartItemIndex];

        const updatedItem = {
            ...existingItem,
            quantity :  existingItem.quantity + 1
        };
        updatedItems[existingCartItemIndex] = updatedItem;
    }else {
        updatedItems.push({...action.item , quantity : 1 });
    }
    return {...state , items : updatedItems};
  }

  if (action.type === "REMOVE_ITEM") {
    // .... remove an item from the state
  }

  return state;
}

export function CartContextProvider({ children }) {
  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContext;
