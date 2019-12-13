import React from 'react'
import PropTypes from 'prop-types'
import { ResourcePageTemplate } from '../../templates/resource-page'

const ResourcePagePreview = ({ entry, widgetFor }) => (
  <ResourcePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ResourcePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ResourcePagePreview