import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);

  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-around mt-10">
      <div>
        <button
          className="rounded bg-green-500 text-white px-5 py-3"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
      <div>
        <button
          className="rounded bg-violet-500 text-white px-5 py-3"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by amount
        </button>
      </div>
      <div className="font-extrabold">{count}</div>
      <div>
        <button
          className="rounded bg-red-500 text-white px-5 py-3"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
