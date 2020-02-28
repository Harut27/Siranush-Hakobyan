import React, { Component, Fragment } from "react";
import "./style.scss";


class OpenPhoto extends Component {
    state = {
        showImgPopup: false
    };

    showImage = () => {
        document.body.style.overflow = "hidden";
        this.setState({ showImgPopup: true });
    };

    hideImage = (e) => {
        document.body.style.overflow = "auto";
        this.setState({ showImgPopup: false });
    };

    cancelEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    render() {
        const { showImgPopup } = this.state;
        const { src } = this.props;

        return(
            <Fragment>
                <img draggable={false} src={src} alt="" onClick={this.showImage} />
                {showImgPopup && (
                    <div className="container-image" onClick={this.hideImage}>
                        <div className="delete-icon" onClick={this.hideImage}>X</div>
                        <div className="imgWrapper" onClick={this.cancelEvent}>
                            <img draggable={false} src={src} alt=""/>
                        </div>
                    </div>
                )}
            </Fragment>
        );
    }
}

export default OpenPhoto;