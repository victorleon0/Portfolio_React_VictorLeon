import {connect} from 'react-redux';
import './LikeView.scss'
const CounterView = (props) => {
  return (
    <div className="counterLike">
      <h5 className="titleLike">¿Te gusta esta página? Dame un like</h5>
      <h4 className="likes">{props.count} likes</h4>
    </div>
  )
};
const mapStateToProps = (state) => {
  const myObj = {
    count: state.counter.count,
  }
  return myObj;
};
export default connect(mapStateToProps)(CounterView);