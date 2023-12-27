import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";
import { useDarkMode } from "../context/DarkModeContext";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  return (
    <ButtonIcon onClick={toggleDarkMode}>
      {isDarkMode ? (
        <>
          <span>Light Mode </span> <HiOutlineSun />{" "}
        </>
      ) : (
        <>
          <span>Dark Mode </span>
          <HiOutlineMoon />
        </>
      )}
    </ButtonIcon>
  );
}

export default DarkModeToggle;
