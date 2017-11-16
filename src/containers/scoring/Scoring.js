import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Scoring from '../../components/scoring';

const mapStateToProps = state => ({
  scoring: state.game.scoring
});

export default connect(mapStateToProps, null)(Scoring);
