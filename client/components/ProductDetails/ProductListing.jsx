import { ProductContainer } from './styles/StyledProductListings';
import Image from 'next/image';

const ProductListings = (props) => {
  return (
    <div>
      <ProductContainer>
        <h1>{props.title}</h1>
        <img src={props.image} alt={props.title} />
      </ProductContainer>
    </div>
  );
};

export default ProductListings;
