import PropTypes from "prop-types"
import styles from "./form.module.css"

function Form ({
  children,
  ...props
}) {
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  )
}

Form.propTypes = {
  children: PropTypes.node.isRequired
}

export default Form
