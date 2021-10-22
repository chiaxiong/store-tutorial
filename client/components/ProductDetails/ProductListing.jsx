
const ProductListings = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={props.image} alt={props.title} />
    </div>
  );
};

export default ProductListings;
