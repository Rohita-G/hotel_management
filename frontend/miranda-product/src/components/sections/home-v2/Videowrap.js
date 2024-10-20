import React, { Component } from 'react';
import $ from 'jquery';
import 'magnific-popup';

class Videowrap extends Component {
    componentDidMount() {
        function popup() {
            $('.popup-video').magnificPopup({
                type: 'iframe'
            });
        }
        popup();
    }
    render() {
        return (
            <section className="video-wrap full-section" style={{ backgroundImage: "url(" + process.env.PUBLIC_URL + "/assets/img/bg/05.jpg)" }}>
                <a rel={'external'} href="https://www.youtube.com/embed/EEJFMdfraVY" className="popup-video">
                    <img src={process.env.PUBLIC_URL + "/assets/img/icon/07.png"} alt="" />
                </a>
            </section>
        );
    }
}

export default Videowrap;