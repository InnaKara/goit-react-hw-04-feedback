import { Reviews, ReviewsEl } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Reviews>
      <ReviewsEl>Good: {good}</ReviewsEl>
      <ReviewsEl>Neutral: {neutral}</ReviewsEl>
      <ReviewsEl>Bad: {bad}</ReviewsEl>
      <ReviewsEl>Total: {total}</ReviewsEl>
      <ReviewsEl>Positive feedback: {positivePercentage}%</ReviewsEl>
    </Reviews>
  );
};
