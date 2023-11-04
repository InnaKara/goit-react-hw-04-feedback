import { H2Title, SectionEl } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <SectionEl>
      <H2Title>{title}</H2Title>
      {children}
    </SectionEl>
  );
};
