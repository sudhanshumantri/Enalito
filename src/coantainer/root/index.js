import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
/**component and coantainer import */
import Header from '../../component/header';
import Dashboard from '../../component/dashboard/';
import Drawer from '../../component/drawer';

class Root extends Component {
    //create context and let child use it for user auth

    componentWillMount() {
        // const token = localStorage.getItem('AUTH_TOKEN');
        // const role = localStorage.getItem('ROLE');
        // if (token) {
        //     this.props.loadAuthToken(token);
        // }
        // if (role) {
        //     this.props.loadRole(role);
        // }
    }
    render() {
        //for auth routes
        const { token } = this.props;
        return (
            <div>
                {/* <Header /> */}
                <Drawer/>
                <BrowserRouter>
                    <Routes>
                        <Route  exact path="/" element={<Dashboard/>} />
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}
// const mapDispatchToProps = {
//     // loadAuthToken: loadAuthToken,
//     // loadRole: loadRole
// };
// const mapStateToProps = createStructuredSelector({
//     token: selectToken()
// });
export default (
    // connect(
    //     null,
    //     null
    // )
    (Root)
);
