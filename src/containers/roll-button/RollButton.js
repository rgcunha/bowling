import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { roll } from '../../modules/bowling';
import RollButton from '../../components/actions/roll-button';

const mapDispatchToProps = dispatch => bindActionCreators({
  onRoll: roll
}, dispatch);

export default connect(null, mapDispatchToProps)(RollButton);
