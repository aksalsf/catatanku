import PropTypes from "prop-types"
import styles from "./card-title.module.css"

function CardTitle ({
  text
}) {
  return (
    <h3 className={styles.cardTitle}>
      {text}
    </h3>
  )
}

CardTitle.propTypes = {
  text: PropTypes.string.isRequired
}

export default CardTitle
