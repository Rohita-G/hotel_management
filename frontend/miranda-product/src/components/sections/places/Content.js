import React, { Component } from 'react';
import Placesbox from './Placesbox';
import Placesmap from './Placesmap';

class Content extends Component {
    render() {
        return (
            <section className="places-wrapper pt-120 pb-120">
                <div className="container">
                    <Placesmap />
                    <Placesbox/>
                </div>
            </section>
        );
    }
}

export default Content;