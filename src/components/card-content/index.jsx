import styles from "./card-content.module.css"
import PropTypes from "prop-types"

function CardContent ({
  children
}) {
  return (
    <div className={styles.cardContent}>
      {children}
    </div>
  )
}

CardContent.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardContent
