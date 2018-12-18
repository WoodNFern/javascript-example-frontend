import * as React from 'react';
import {Button} from "reactstrap";
import './box.scss'

class BoxComponent extends React.Component {

    render() {
        return (
            <div>
                <h2>This is a simple box</h2>
                <Button></Button>
            </div>
        );
    }
}

export default BoxComponent;
