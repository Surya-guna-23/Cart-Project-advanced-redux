import classes from "./CartButton.module.css";
import { Uiactions } from "../../store/UI_slice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const cartquantity = useSelector((state) => state.cart.itemquantity);
  const dispatch = useDispatch();
  const togglehandler = () => {
    dispatch(Uiactions.toggle());
  };
  return (
    <button className={classes.button} onClick={togglehandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartquantity}</span>
    </button>
  );
};

export default CartButton;
