import React from "react";

const IconButton = ({
  icon,
  otherClasses,
}: {
  icon: React.ReactNode;
  otherClasses?: string;
}) => {
  return (
    <button
      className={`shadow-[inset_0_0_0_2px_#616467] text-black  px-3 py-3 rounded-full tracking-widest uppercase font-bold bg-transparent hover:bg-[#616467] hover:text-white dark:text-neutral-200 transition duration-200  ${otherClasses}`}
    >
      {icon}
    </button>
  );
};

export default IconButton;
