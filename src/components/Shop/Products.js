import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_product = [
  {
    id: "item1",
    price: 6,
    title: "first item",
    description: "this is the first item",
  },
  {
    id: "item2",
    price: 5,
    title: "second item",
    description: "this is the second item",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_product.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
