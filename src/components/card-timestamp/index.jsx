import PropTypes from "prop-types"
import styles from "./card-timestamp.module.css"
import { showFormattedDate } from "@/utils/index"

function CardTimestamp ({
  data
}) {
  const formattedDate = showFormattedDate(data)
  return (
    <div className={styles.cardTimestamp}>
      {formattedDate}
    </div>
  )
}

CardTimestamp.propTypes = {
  data: PropTypes.string
}

export default CardTimestamp
