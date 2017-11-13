import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { roll } from '../../modules/bowling';
import RollButton from '../../components/actions/roll-button';

const mapStateToProps = state => ({
  inProgress: state.bowling.turn.inProgress
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onRoll: roll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RollButton);
