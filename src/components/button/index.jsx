import PropTypes from "prop-types"
import styles from "./button.module.css"

const variantClasses = {
  primary: "btn-primary",
  secondary: "btn-secondary"
}

function Button ({
  text,
  variant,
  onClick,
  ...props
}) {
  return (
    <button
      className={styles.btn + " " + styles[variantClasses[variant]]}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func
}

export default Button
