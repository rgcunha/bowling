import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { manualRoll } from '../../modules/bowling';
import ScoreSelect from '../../components/actions/score-select';

const mapStateToProps = state => ({
  turn: state.bowling.turn
});

const mapDispatchToProps = dispatch => bindActionCreators({
  onManualRoll: manualRoll
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ScoreSelect);
