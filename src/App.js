import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, Fragment } from "react";
import { Uiactions } from "./store/UI_slice";
import { sendcartdata, fetchcartdata } from "./store/cart-action";
import Notification from "./components/UI/Notification";
let isinitial = true;
function App() {
  const showcart = useSelector((state) => state.ui.iscartvisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchcartdata());
  }, [dispatch]),
    useEffect(() => {
      if (isinitial) {
        isinitial = false;
        return;
      }
      if (cart.changed) {
        dispatch(sendcartdata(cart));
      }
    }, [cart, dispatch]);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showcart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
