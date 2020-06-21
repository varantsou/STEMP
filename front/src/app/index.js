import { connect } from 'react-redux';
import { setYear } from 'app/common/actions/pageActions';

import App from './component.js';

function mapStateToProps(state) {
    return {
        user: state.user,
        page: state.page
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setYear: year => dispatch(setYear(year))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
