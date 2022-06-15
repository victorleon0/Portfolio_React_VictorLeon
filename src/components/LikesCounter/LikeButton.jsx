import { incrementarContador } from "../../redux/counter/like.counter.actions";
import { connect } from "react-redux";
import './LikeButton.scss' ;


const CounterButtons = (props) => {
    return (
      <div>
        <button className= "LikeButton" onClick={() => props.dispatch(incrementarContador())}>👍🏽</button>
        
      </div>
    )
  };
  export default connect ()(CounterButtons);