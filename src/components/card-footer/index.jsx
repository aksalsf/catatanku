import PropTypes from "prop-types"
import styles from "./card-footer.module.css"

function CardFooter ({ children }) {
  return (
    <div className={styles.cardFooter}>
      {children}
    </div>
  )
}

CardFooter.propTypes = {
  children: PropTypes.node.isRequired
}

export default CardFooter
