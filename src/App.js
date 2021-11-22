import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Sges from "./component/guest/Sges";
import AdminPage from "./component/admin/AdminPage";
import './css/guestpage/guestpage.css'
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Route path="/sges">
                        <Sges />
                    </Route>
                    <Route path="/admin">
                        <AdminPage />
                    </Route>
                </Router>
            </div>
        );
    }
}
