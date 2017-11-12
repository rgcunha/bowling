import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Scoring from '../../components/scoring';

const mapStateToProps = state => ({
  scoring: state.bowling.scoring
});

export default connect(mapStateToProps, null)(Scoring);
