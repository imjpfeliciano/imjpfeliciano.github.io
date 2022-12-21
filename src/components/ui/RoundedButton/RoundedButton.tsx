import styled from "styled-components";

const RoundedButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primaryDark};
  border-radius: 50px;
  color: ${({ theme }) => theme.font.color.secondary};
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem 1rem;
  transition: all 0.2s ease-in-out;
`;

interface RoundedButtonProps {
  label: string;
  onClick: () => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ label, onClick }) => {
  return (
    <RoundedButtonContainer onClick={onClick}>{label}</RoundedButtonContainer>
  );
};

export default RoundedButton;
