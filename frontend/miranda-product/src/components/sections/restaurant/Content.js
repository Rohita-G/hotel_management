import React, { Component, Fragment } from 'react';
import Menuarea from './Menuarea';
import Restaurant from './Restaurant';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Restaurant />
                <Menuarea/>
            </Fragment>
        );
    }
}

export default Content;