import { connect } from 'react-redux';

import SelectedLetter from '../components/SelectedLetter';

const mapStateToProps = (state) => ({ letter: state.settings.letter });

export default connect(mapStateToProps)(SelectedLetter);
