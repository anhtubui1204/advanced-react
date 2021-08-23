import React from 'react';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import { routes } from 'utils';
import { connect } from 'react-redux';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import * as actions from 'actions';

class App extends React.Component {
    renderButton() {
        if (this.props.auth) {
            return <button onClick={()=>this.props.changeAuth(false)}>Sign out</button>;
        } else {
            return <button onClick={()=>this.props.changeAuth(true)}>Sign in</button>;
        }
    }

    renderHeader() {
        return (
            <ul>
                <li>
                    <Link to={routes.home}>Home</Link>
                </li>
                <li>
                    <Link to={routes.post}>Post a comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    }

    render() {
        return (
            <Router>
                {this.renderHeader()}
                <Switch>
                    <Route exact path={routes.home} component={CommentList} />
                    <Route exact path={routes.post} component={CommentBox} />
                </Switch>
            </Router>
        )
    };
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps, actions)(App);
