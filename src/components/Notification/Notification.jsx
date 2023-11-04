import { Info, WrapperMessage } from './Notification.styled';

export const Notification = ({ message }) => (
  <WrapperMessage>
    <Info>{message}</Info>
  </WrapperMessage>
);
