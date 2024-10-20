import React, { Component, Fragment } from 'react';
import Aboutpage from './Aboutpage';
import Corefeature from './Corefeature';
import Counter from './Counter';
import Blogpost from './Blogpost';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Aboutpage />
                <Corefeature />
                <Counter />
                <Blogpost />
            </Fragment>
        );
    }
}

export default Content;