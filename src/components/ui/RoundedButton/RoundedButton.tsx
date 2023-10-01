
interface RoundedButtonProps {
  label: string;
  onClick: () => void;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({ label, onClick }) => {
  return (
    <button className="bg-blue-700 dark:bg-lime-400 cursor-pointer rounded-full py-2 dark:text-white" onClick={onClick}>{label}</button>
  );
};

export default RoundedButton;
