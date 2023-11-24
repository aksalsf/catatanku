import PropTypes from "prop-types"

function AppSection ({
  title,
  variant,
  children,
  hidden
}) {
  if (hidden) {
    return null
  }
  if (variant === "header") {
    return (
      <header className="app-section app-header">
        <h1 className="app-title">
          {title}
        </h1>
        {children}
      </header>
    )
  }
  if (variant === "section") {
    return (
      <section className="app-section">
        <h2>
          {title}
        </h2>
        {children}
      </section>
    )
  }
  return null
}

AppSection.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["header", "section"]),
  children: PropTypes.node,
  hidden: PropTypes.bool
}

export default AppSection
