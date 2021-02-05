import React from 'react'
import { silentAuth } from './src/utils/auth'
import SimpleReactLightbox from 'simple-react-lightbox'

class SessionCheck extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
    }
  }

  handleCheckSession = () => {
    this.setState({ loading: false })
  }

  componentDidMount() {
    silentAuth(this.handleCheckSession)
  }

  render() {
    return (
      this.state.loading === false && (
        <React.Fragment>{this.props.children}</React.Fragment>
      )
    )
  }
}

export const wrapRootElement = ({ element }) => {
  return (
    <SessionCheck>
      <SimpleReactLightbox>{element}</SimpleReactLightbox>
    </SessionCheck>
  )
}
