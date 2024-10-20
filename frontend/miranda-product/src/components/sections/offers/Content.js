import React, { Component, Fragment } from 'react';
import Offers from './Offers';
import Featureroom from './Featureroom';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Offers />
                <Featureroom />
            </Fragment>
        );
    }
}

export default Content;