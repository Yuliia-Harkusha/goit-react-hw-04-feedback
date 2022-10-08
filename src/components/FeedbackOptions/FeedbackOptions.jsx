import React from 'react';
import PropTypes from 'prop-types';
import { GiCoffeeCup } from 'react-icons/gi';
import {
  FeedbackBlock,
  FeedbackItem,
  OptionBtn,
} from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackBlock>
      {options.map(option => {
        return (
          <FeedbackItem key={option}>
            <GiCoffeeCup />
            <OptionBtn
              onClick={() => onLeaveFeedback(option)}
              name={option}
              type="button"
            >
              {option}
            </OptionBtn>
          </FeedbackItem>
        );
      })}
    </FeedbackBlock>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array,
};
