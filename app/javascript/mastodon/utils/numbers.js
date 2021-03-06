import React, { Fragment } from 'react';
import { FormattedNumber } from 'react-intl';

export const shortNumberFormat = number => {
  if (number < 1000) {
    return <FormattedNumber value={number} />;
  } else if (number < 10000) {
    return <Fragment><FormattedNumber value={number / 1000} maximumFractionDigits={1} />K</Fragment>;
  } else if (number < 1000000) {
    return <Fragment><FormattedNumber value={number / 1000} maximumFractionDigits={0} />K</Fragment>;
  } else if (number < 10000000) {
    return <Fragment><FormattedNumber value={number / 1000000} maximumFractionDigits={1} />M</Fragment>;
  } else {
    return <Fragment><FormattedNumber value={number / 1000000} maximumFractionDigits={0} />M</Fragment>;
  }
};
