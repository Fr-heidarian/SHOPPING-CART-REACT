import { useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { closeModal } from "../features/modal/modalSlice";

export default function Modal() {
  const dispatch = useDispatch();

  return (
    <div class="modal-style">
      <div class="modal-content">
        Are you sure you want to empty cart?
        <div class="buttons-container-modal">
          <button
            class="modal-agree"
            onClick={() => {
              dispatch(clearCart()); dispatch(closeModal());
            }}
          >
            YES
          </button>
          <button class="modal-disagree" onClick={() => dispatch(closeModal())}>
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
