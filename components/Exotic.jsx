
import './Exotic.css';
import product_fruits from '../Assets/Exoticfruits'; 
import product_vegetables from '../Assets/Exoticvegetables';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';


const Exotic = () => {
    const {addToCart}=useContext(ShopContext);
    return (
        <>
            <div className="exotic">
                <h1>EXOTIC FRUITS</h1>
                <hr />
                <div className="exotic_item">
                    {product_fruits.map((item) => (
                        <div key={item.id} className="item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-name">
                                {item.name}
                            </div>
                            <div className="item-prices">
                                <div className="item-price-new">
                                    Rs {item.new_price}
                                </div>
                                <div className="item-price-old">
                                    Rs {item.old_price}
                                </div>
                            </div>
                            <div>
                                <button onClick={()=>{addToCart(product_fruits.id)}}>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="exotic">
                <h1>EXOTIC VEGETABLES</h1>
                <hr />
                <div className="exotic_item">
                    {product_vegetables.map((item) => (
                        <div key={item.id} className="item">
                            <img src={item.image} alt={item.name} />
                            <div className="item-name">
                                {item.name}
                            </div>
                            <div className="item-prices">
                                <div className="item-price-new">
                                    Rs {item.new_price}
                                </div>
                                <div className="item-price-old">
                                    Rs {item.old_price}
                                </div>
                            </div>
                            <div>
                                <button>Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Exotic;
