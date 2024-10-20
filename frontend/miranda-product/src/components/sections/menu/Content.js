import React, { Component, Fragment } from 'react';
import Menuarea from './Menuarea';
import Roomgallery from '../home/Roomgallery';

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Menuarea />
                <Roomgallery/>
            </Fragment>
        );
    }
}

export default Content;