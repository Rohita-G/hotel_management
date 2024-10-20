import React, { Component } from 'react';
import gallery from '../../../data/gallery.json';
import $ from 'jquery';
import 'magnific-popup';

class Content extends Component {
    componentDidMount() {
        function popup() {
            $('.gallery-loop .popup-image').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true,
                },
                mainClass: 'mfp-fade',
            });
        }
        popup();
    }
    render() {
        return (
            <section className="gallery-wrappper pt-120 pb-120">
                <div className="container">
                    <div className="gallery-loop">
                        {gallery.map((item, i) => (
                            <div key={i} className="single-gallery-image">
                                <a rel={'external'} href={item.img} className="popup-image">
                                    <img src={process.env.PUBLIC_URL + "/" + item.img} alt="img" />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;