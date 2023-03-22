interface HeaderProps {
  name: string;
}

export const Header = ({ name = "Usuário" }: HeaderProps) => {
  return (
    <div className="w-[calc(100%-15rem)] h-[4rem] bg-black-01 absolute right-0 top-0 px-10 flex items-center justify-between">
      <h1 className="text-white text-[1.4rem] font-bold">Olá, {name}</h1>
      <button>teste</button>
    </div>
  );
};
