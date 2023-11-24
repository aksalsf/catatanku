import PropTypes from "prop-types"
import styles from "./text-input-character-counter.module.css"

function TextInputCharacterCounter ({
  count,
  limit
}) {
  return (
    <div className={styles.inputCounter}>
      {count}/{limit} karakter
    </div>
  )
}

TextInputCharacterCounter.propTypes = {
  count: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired
}

export default TextInputCharacterCounter
