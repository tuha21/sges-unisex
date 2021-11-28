import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sges from "./component/guest/Sges";
import AdminPage from "./component/admin/AdminPage";
import "./css/guestpage/guestpage.css";
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route path="/sges">
                            <Sges />
                        </Route>
                        <Route path="/admin">
                            <AdminPage />
                        </Route>
                    </Switch>
                    
                </Router>
                
            </div>
        );
    }
}
