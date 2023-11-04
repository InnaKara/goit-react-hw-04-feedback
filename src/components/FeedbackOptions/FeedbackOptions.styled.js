import { styled } from 'styled-components';

export const BtnContainer = styled.div`
  display: flex;
  gap: 60px;
  justify-content: center;
  margin-top: 30px;
`;

export const Btn = styled.button`
  border: none;
  background-color: #f4a1f4;
  border: 1px solid pink;

  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  width: 150px;
  font-size: 20px;

  &:hover {
    background-color: #f4a1f4;
    color: white;
  }
`;
