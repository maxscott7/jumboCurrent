import {Link} from "react-router-dom";
import {Button, Card} from "react-bootstrap";
import Rating from "./Rating";
import {useContext} from "react";
import {Store} from "../Store";

function Product(props) {
    const {product } = props;
    const {state, dispatch: cxtDispatch} = useContext(Store);
    const addToCartHandler = () => {
        cxtDispatch({type:'CART_ADD_ITEM', payload: {...product, quantity: 1},
        });
    };

    return (<Card>
        <Link to={`/product/${product.slug}`}>
            <img src={product.image} className="card-img-top" alt={product.name}/>
        </Link>
        <Card.Body>
            <Link to={`/product/${product.slug}`}>
                <Card.Title>{product.name}</Card.Title>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews} />
            <Card.Text>${product.price}</Card.Text>
            <Button onClick={addToCartHandler} variant='primary'>
                Add to Cart
            </Button>
        </Card.Body>
    </Card>);
}

export default Product;