/* eslint-disable react/no-unknown-property */
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  // dispatch mantığı değişmiyor
  const dispatch = useDispatch();
  // abone mantığı değişmiyor
  const store = useSelector((store) => store.counterReducer);
  // console.log(store);
  // console.log(increase);
  // console.log(decrease);
  return (
    <div className="vh-100 vw-100 d-grid justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center gap-4">
        <button onClick={() => dispatch(decrease())} className="btn btn-danger">
          Azalt
        </button>
        <span className="lead fw-bold">{store.count}</span>
        <button
          onClick={() => dispatch(increase())}
          className="btn btn-success"
        >
          Arttır
        </button>
        <input
          type="number"
          className="w-25"
          onChange={(e) => dispatch(setCount(e.target.value))}
        />
      </div>
    </div>
  );
};

export default Counter;
