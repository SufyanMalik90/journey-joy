import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  varient: "btn_dark_green";
};

const Button = ({ type, title, icon, varient }: ButtonProps) => {
  return (
    <button
      className="flex justify-center rounded-full border px-4 py-2.5 gap-2 bg-green-900 px-8 py-4 text-white transition-all hover:bg-black"
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24} />}
      <label className="whitespace-nowrap font-bold">{title}</label>
    </button>
  );
};

export default Button;
