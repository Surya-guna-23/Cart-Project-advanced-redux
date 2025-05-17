import { Uiactions } from "./UI_slice";
import { cartactions } from "./cart_slice";
export const fetchcartdata = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://test-8d16a-default-rtdb.firebaseio.com/.json"
      );
      if (!response.ok) {
        throw new Error("fecthing cart data failed ");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartdata = await fetchdata();
      dispatch(
        cartactions.replacecart({
          items: cartdata.items || [],
          itemquantity: cartdata.itemquantity,
        })
      );
    } catch (error) {
      dispatch(
        Uiactions.shownotification({
          status: "error",
          title: "Error!",
          message: "fecthing cart data failed!",
        })
      );
    }
  };
};
export const sendcartdata = (cart) => {
  return async (dispatch) => {
    dispatch(
      Uiactions.shownotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    try {
      const response = await fetch(
        "https://test-8d16a-default-rtdb.firebaseio.com/cart.json", // Better to store under "cart"
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            itemquantity: cart.itemquantity,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed");
      }

      dispatch(
        Uiactions.shownotification({
          status: "success",
          title: "Success!",
          message: "Cart successfully sent!",
        })
      );
    } catch (error) {
      dispatch(
        Uiactions.shownotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
