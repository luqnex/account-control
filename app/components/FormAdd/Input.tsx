interface InputProps {
  name: string;
  placeholder: string;
}

export const Input = ({ name, placeholder }: InputProps) => {
  return (
    <input
      name={name}
      placeholder={placeholder}
      className="border border-[black]/[.4] rounded-[0.4rem] px-3 py-2"
    />
  );
};
