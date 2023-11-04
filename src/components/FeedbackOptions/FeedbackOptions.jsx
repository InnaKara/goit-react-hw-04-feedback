import { Btn, BtnContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  // ['good', 'neutral', 'bad'];
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
