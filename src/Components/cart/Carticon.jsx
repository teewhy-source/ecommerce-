import { useContext } from 'react';
import { Cartcontext } from '../../contex/Cart.context';
import './cart.styles.scss';
import Shoppingicon from '../../images/Shoppingicon.png';

const Carticon = () => {
  const { iscartopen, setiscartopen,cartcount } = useContext(Cartcontext);

  const toggleiscartopen = () => setiscartopen(!iscartopen);

  return (
    <div className='cart-icon-container' onClick={toggleiscartopen}>
      <img src={Shoppingicon} alt="Shopping Icon" className='shopping-icon' />
      <span className='item-count'>{cartcount}</span>
    </div>
  );
};

export default Carticon;
