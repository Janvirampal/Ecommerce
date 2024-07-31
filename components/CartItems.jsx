import { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import removeicon from '../Assets/removeicon.png';

const CartItems = () => {
    const { product_fruits, CartItems, removeCart } = useContext(ShopContext);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {product_fruits.map((e) => {
                if (CartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className='cartitems-format'>
                            <img src={e.image} className='carticon-product-icon' alt={e.name} />
                            <p>{e.name}</p>
                            <p>${e.new_price.toFixed(2)}</p>
                            <button className='cartitems-quantiy'>{CartItems[e.id]}</button>
                            <p>${(e.new_price * CartItems[e.id]).toFixed(2)}</p>
                            <img 
                                src={removeicon} 
                                onClick={() => removeCart(e.id)} 
                                alt="remove" 
                                className='remove-icon'
                            />
                        </div>
                    );
                }
                return null; 
            })}
        </div>
    );
};

export default CartItems;
