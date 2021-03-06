import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'found/lib/Link'
import { branch, compose, mapProps, renderComponent } from 'recompose'

const NavigationItem = styled(Link)`
  width: 100%;
  padding: 12px 24px;
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;
  color: ${props => props.theme.color.text}
`

NavigationItem.propTypes = {
  onClick: PropTypes.func,
  closeNavigation: PropTypes.func,
}

NavigationItem.defaultProps = {
  onClick: null,
}

const enhance = compose(
  branch(
    ({ onClick }) => !!onClick,
    renderComponent(NavigationItem.withComponent('div')),
  ),
  mapProps(({ onClick, closeNavigation, ...others }) => ({
    ...others,
    onClick: (event) => {
      if (onClick) onClick(event)
      closeNavigation()
    },
  })),
)

export default enhance(NavigationItem)
