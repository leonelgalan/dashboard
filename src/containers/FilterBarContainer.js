import { connect } from 'react-redux';

import { changeFilter } from '../actions';
import FilterBar from '../components/FilterBar';

const mapStateToProps = (state, ownProps) => ({ ...state.settings, ...ownProps });

const mapDispatchToProps = (dispatch) => ({
  onChangeLetter: (letter) => dispatch(changeFilter({ letter })),
  onChangeOptions: (options) => dispatch(changeFilter({ options })),
  onChangeText: (text) => dispatch(changeFilter({ text })),
  onChangeYes: (yes) => dispatch(changeFilter({ yes })),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBar);
