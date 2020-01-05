import { urlParams } from '../filter';
import withQueryParams from '../lib/useQueryParamHelper';
import FilterBar from '../components/FilterBar';

const mapParamsToProps = (query, setQuery) => {
  const { letter, options, text, yes } = query;
  return (
    {
      letter,
      options,
      text,
      yes,
      onChangeLetter: (value) => setQuery({ ...query, letter: value }),
      onChangeOptions: (value) => setQuery({ ...query, options: value }),
      onChangeText: (value) => setQuery({ ...query, text: value }),
      onChangeYes: (value) => setQuery({ ...query, yes: value }),
    }
  );
};

export default withQueryParams(urlParams, mapParamsToProps)(FilterBar);
