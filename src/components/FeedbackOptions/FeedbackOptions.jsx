import { Btn, BtnContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <BtnContainer>
      {options.map(option => (
        <Btn type="button" key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Btn>
      ))}
    </BtnContainer>
  );
};
