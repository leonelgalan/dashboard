import React from 'react';
import { useQueryParams } from 'use-query-params';

const withQueryParams = (paramConfigMap, mapParamsToProps) => (WrappedComponent) => {
  const Component = (props) => {
    const [query, setQuery] = useQueryParams(paramConfigMap);
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...mapParamsToProps(query, setQuery)} {...props} />;
  };
  Component.displayName = `withQueryParams(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;
  return Component;
};

export default withQueryParams;
