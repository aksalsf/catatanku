import PropTypes from "prop-types"

function AppHeaderAction ({ children }) {
  return (
    <div className="app-header-action">
      {children}
    </div>
  )
}

AppHeaderAction.propTypes = {
  children: PropTypes.node
}

export default AppHeaderAction
