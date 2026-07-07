import { baseButtonStyle, sizeStyles, variantStyles } from "./buttonStyle";
import type { ButtonProps } from "./type";

const Button = ({
    size = "md",
    variant = "primary",
    type = "button",
    content,
    onClick,
    disabled = false,
    className = "",
    styles = {},
}: ButtonProps) => (
    <button
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`${baseButtonStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        style={styles}
    >
        {content}
    </button>
);

export default Button;
