import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import GameStatus from '../../components/game-status';

const mapStateToProps = state => ({
  inProgress: state.game.inProgress
});

export default connect(mapStateToProps, null)(GameStatus);
