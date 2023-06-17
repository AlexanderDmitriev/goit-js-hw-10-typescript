import React from 'react';
import { UpperList, Flag, Data } from './multiCard.styled';

interface ICard {
  name: { official: string };
  flags: string;
}

export const Multicard: React.FunctionComponent<ICard> = props => {
  const { name, flags } = props;
  return (
    <UpperList>
      <Flag src={flags} alt={name.official} height="16" />
      <Data>{name.official}</Data>
    </UpperList>
  );
};
