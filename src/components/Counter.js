import {connect} from "react-redux";
import * as actions from "../actions";

const Counter = ({counter, inc, dec, rnd}) => {
  return (
    <div className="jumbotron">
      <h1>{counter}</h1>
      <button onClick={inc} className="btn btn-primary">
        Increment
      </button>
      <button onClick={dec} className="btn btn-danger">
        Decrement
      </button>
      <button onClick={rnd} className="btn btn-warning">
        Random
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    counter: state.value
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actions, dispatch);
//
// }
export default connect(mapStateToProps, actions)(Counter);