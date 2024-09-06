import { BsArrowUpShort } from "react-icons/bs";

const BackToTop = () => {
  return (
    <button
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="absolute right-10 top-10 flex w-full justify-end text-sm text-black text-opacity-80 hover:text-opacity-100 dark:text-white"
    >
      <div className="flex">
        <div className="flex items-center">
          <BsArrowUpShort className="text-xl" />
          Back to the top
        </div>
      </div>
    </button>
  );
};

export default BackToTop;
