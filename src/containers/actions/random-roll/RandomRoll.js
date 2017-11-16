import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { processRandomRoll } from '../../../modules/game';
import RandomRoll from '../../../components/actions/random-roll';

const mapDispatchToProps = dispatch => bindActionCreators({
  onRoll: processRandomRoll
}, dispatch);

export default connect(null, mapDispatchToProps)(RandomRoll);
