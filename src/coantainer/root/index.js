import React, { Component } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
/**component and coantainer import */
import Header from '../../component/header';
import Dashboard from '../../component/dashboard/';
import Drawer from '../../component/drawer';
import Segments from '../../component/Segments/Segments'

class Root extends Component {
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
                    <Routes>
                        <Route exact path="/segments" element={<Segments/>}/>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default (
    (Root)
);
