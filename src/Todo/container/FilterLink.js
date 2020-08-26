import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  // onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
  onClick: bindActionCreators(setVisibilityFilter, dispatch)
})

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link)

export default FilterLink
