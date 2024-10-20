import React, { Fragment } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

const countPost = [
    {
        icon: "flaticon-user-1",
        value: 8000,
        prefix: "",
        title: "Happy Users"
    },
    {
        icon: "flaticon-like",
        value: 10,
        prefix: "M",
        title: "Reviews & Appriciate"
    },
    {
        icon: "flaticon-suitcase",
        value: 100,
        prefix: "",
        title: "Country Coverage"
    }
];

function Counter(props) {
    const [focus, setFocus] = React.useState(false);
    return (
        <section className="counter-section pt-115">
            <div className="container">
                {/* Section Title */}
                <div className="section-title mb-80">
                    <span className="title-tag">COUNTER</span>
                    <h2>Some Fun Facts</h2>
                </div>
                {/* Counter */}
                <div className="row justify-content-center">
                    {countPost.map((item, i) => (
                        <div key={i} className="col-lg-4 col-6">
                            <div className="counter-box counter-box-two">
                                <div className="icon">
                                    <i className={item.icon} />
                                </div>

                                <CountUp start={focus ? 0 : null} end={parseInt(item.value)} duration={5} redraw={true}>
                                    {({ countUpRef }) => (
                                        <Fragment>
                                            <h4 ref={countUpRef} />
                                            <VisibilitySensor
                                                onChange={isVisible => {
                                                    if (isVisible) {
                                                        setFocus(true);
                                                    }
                                                }}
                                            >
                                                <span className="prefix">{item.prefix}</span>
                                            </VisibilitySensor>
                                        </Fragment>
                                    )}
                                </CountUp>
                                <span className="title">{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Gallery */}
                <div className="row">
                    <div className="col-sm-6">
                        <div className="image mt-30">
                            <img src={process.env.PUBLIC_URL + "/assets/img/gallery/09.jpg"} alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="image mt-30">
                            <img src={process.env.PUBLIC_URL + "/assets/img/gallery/10.jpg"} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Counter;