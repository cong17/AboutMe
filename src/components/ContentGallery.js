import React, { Component } from 'react';
import CompntContentGallery from './CompntContentGallery';
import { connect } from 'react-redux';

class ContentGallery extends Component {

    makeScript = () => {
        const script = document.createElement("script");
        script.setAttribute("id", "renderImg");
        script.src = "/js/gallery.js";
        script.async = true;
        document.body.appendChild(script);
    }
    componentDidMount() {
        try {
            document.scripts.renderImg.remove();
            this.makeScript()
        } catch (error) {
            this.makeScript()
        }
    }
    componentDidUpdate() {
        try {
            document.scripts.renderImg.remove();
            this.makeScript()
        } catch (error) {
            this.makeScript()
        }
    }
    tangImg = () => {
        this.setState({
            numberImg: +this.state.numberImg + 10
        })

    }

    render() {
        return (
            <div>
                <div id="main" className="site-main">
                    {/* Page changer wrapper */}
                    <div className="pt-wrapper">
                        {/* Subpages */}
                        <div className="subpages" style={{ paddingTop: '70px' }}>
                            <section data-id="portfolio" data-title="Portfolio" className="pt-page pt-page-portfolio pt-page-current pt-page-relative">
                                <div className="section-inner custom-page-content">
                                    <div className="page-header">
                                        <h1 className="h1">Gallery</h1>
                                    </div>
                                </div></section>
                        </div>
                    </div>
                </div>
                <div className="gallery" id="gallery">

                    {[...Array(this.props.numberImageDisplay)].map((x, i) => {
                        const numberd = Math.floor(Math.random() * Math.floor(1000))
                        return (<CompntContentGallery key={i} href={`https://source.unsplash.com/random/girl,${numberd}`} />)
                    })}
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 center">
                        <div className="fw-col-inner">
                            <div onClick={() => this.props.loadMore()} className="btn btn-secondary" style={{ display: 'inline-block', marginTop: '-30px' }}>Load
                            Thêm</div>
                        </div>
                    </div>
                </div>



            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        numberImageDisplay: state.numberImageDisplay
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadMore: () => {
            dispatch({ type: "LOAD_MORE" })
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ContentGallery)