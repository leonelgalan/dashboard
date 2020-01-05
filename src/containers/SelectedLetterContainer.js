import { urlParams } from '../filter';
import withQueryParams from '../lib/useQueryParamHelper';
import SelectedLetter from '../components/SelectedLetter';

const mapParamsToProps = ({ letter }) => ({ letter });

export default withQueryParams(urlParams, mapParamsToProps)(SelectedLetter);
