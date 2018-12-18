import * as React from 'react';
import { connect } from 'react-redux';

import { simpleAction } from '../../actions/simpleAction'
import {Button} from "reactstrap";
import './Box.scss'

class BoxComponent extends React.Component {

    constructor(props) {
        super(props);
        this.fireAction = this.fireAction.bind(this);
    }

    fireAction() {
        const payload = 'This is a simple payload.';
        this.props.fireSimpleAction(payload);
    }

    render() {
        return (
            <div className="box_component">
                <h2>This is a simple box</h2>
                <Button onClick={this.fireAction}>Click me!</Button>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ...state
})

const mapDispatchToProps = dispatch => ({
    fireSimpleAction: (payload) => dispatch(simpleAction(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(BoxComponent);
