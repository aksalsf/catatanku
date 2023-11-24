import PropTypes from "prop-types"
import styles from "./form-group.module.css"

function FormGroup ({
  children,
  label,
  name,
  ...props
}) {
  return (
    <div className={styles.formGroup} {...props}>
      {label && (
        <label htmlFor={name}>
          {label}
        </label>
      )}
      {children}
    </div>
  )
}

FormGroup.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
  name: PropTypes.string
}

export default FormGroup
