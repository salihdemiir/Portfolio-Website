import { FaArrowRight } from "react-icons/fa";

function Button({ children, variant = "primary", href = "#", icon = true }) {
  return (
    <a href={href} className={`btn btn-${variant}`}>
      {children}
      {icon && <FaArrowRight />}
    </a>
  );
}

export default Button;