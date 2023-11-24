import PropTypes from "prop-types"

function Card ({
  children
}) {
  return (
    <article className="card">
      {children}
    </article>
  )
}

Card.propTypes = {
  children: PropTypes.node
}

export default Card
