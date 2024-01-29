import { forwardRef, useImperativeHandle, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classes from './CartModal.module.css';

import Cart from './Cart.jsx';
import CartIcon from './CartIcon.js';

const CartModal = forwardRef(function Modal({ title, actions }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
      close: () => {
        dialog.current.close();
      }
    };
  });

  const handleCloseOnOutsideClick = (event) => {
    if (event.target === dialog.current) {
      dialog.current.close();
    }
  };

  useEffect(() => {
    const currentDialog = dialog.current;
    if (currentDialog) {
      currentDialog.addEventListener('click', handleCloseOnOutsideClick);
    }
    return () => {
      // Clean up
      if (currentDialog) {
        currentDialog.removeEventListener('click', handleCloseOnOutsideClick);
      }
    };
  }, []);

  return createPortal(
    <dialog className={classes.modal} ref={dialog}>
      <div className={classes.flex}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <h2>{title}</h2>
      </div>
      <Cart />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;