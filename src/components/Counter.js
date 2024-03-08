import {connect, useDispatch, useSelector} from "react-redux";
import {inc, dec, rnd} from "../actions";

const Counter = () => {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={() => dispatch(inc())} className="btn btn-primary">
        Increment
      </button>
      <button onClick={() => dispatch(dec())} className="btn btn-danger">
        Decrement
      </button>
      <button onClick={() => dispatch(rnd())} className="btn btn-warning">
        Random
      </button>
    </div>
  )
}

// const mapStateToProps = (state) => {
//   return {
//     counter: state.value
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
//
// }
// export default connect(mapStateToProps, actions)(Counter);
export default Counter;