import React, { Component } from 'react';
import { connect } from "react-redux"
class ContentIndex extends Component {
  currentYear = () => {
    return new Date().getFullYear();

  }
  render() {
    return (
      <div id="main" className="site-main">
        {/* Page changer wrapper */}
        <div className="pt-wrapper">
          {/* Subpages */}
          <div className="subpages" style={{ paddingTop: '70px' }}>
            <section data-id="home" data-title="Home" className="pt-page pt-page-home pt-page-current pt-page-relative">
              <div className="section-inner start-page-content">
                <div className="page-header">
                  <div className="row">
                    <div className="col-sm-4 col-md-4 col-lg-4">
                      <div className="photo">
                        <a href="https://fb.com/congkxtb95">
                          <img src="images/avatar.png" alt="Avatar" style={{ borderRadius: '50%' }} />
                        </a>
                      </div>
                    </div>
                    <div className="col-sm-8 col-md-8 col-lg-8">
                      <div className="title-block">
                        <h2>{this.props.dataHome.fullName}</h2>
                        <div className="text-rotation">
                          Web development </div>
                      </div>
                      <div className="social-links">
                        <a href={this.props.dataHome.linkGit} target="_blank" rel="noopener noreferrer" title="Twitter">
                          <i className="fa fa-github" />
                        </a>
                        <a href={this.props.dataHome.linkfb} target="_blank" rel="noopener noreferrer" title="Facebook">
                          <i className="fa fa-facebook" />
                        </a>
                        <a href={this.props.dataHome.linkskype} target="_blank" rel="noopener noreferrer" title="Instagram">
                          <i className="fa fa-skype" />
                        </a>
                        <a href={this.props.dataHome.linkLinkind} target="_blank" rel="noopener noreferrer" title="LinkedIn">
                          <i className="fa fa-linkedin" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="page-content">
                  <div className="fw-page-builder-content">
                    <section className="fw-main-row">
                      <div className="fw-container">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="fw-col-inner" >
                              <div className="block-title">
                                <h3>About<span> Me</span></h3>
                              </div>
                              <p>
                                {this.props.dataHome.aboutMe}</p>
                              <a href={this.props.dataHome.linkcv} target="_blank" rel="noopener noreferrer" className=" btn btn-secondary">View Resume PDF</a>
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="fw-col-inner">
                              <div className="info-list">
                                <ul className="fw-info-list info-list">
                                  <li>
                                    <span className="title">Tuổi</span>
                                    <span className="value"> {this.currentYear() - this.props.dataHome.age} </span>
                                  </li>
                                  <li>
                                    <span className="title">Địa chỉ</span>
                                    <span className="value">{this.props.dataHome.address}</span>
                                  </li>
                                  <li>
                                    <span className="title">E-mail</span>
                                    <span className="value"><a href="mailto:congkxtb98.mail@gmail.com" target="_self">{this.props.dataHome.email}
                                    </a>
                                    </span>
                                  </li>
                                  <li>
                                    <span className="title">Số điện thoại</span>
                                    <span className="value">
                                      {this.props.dataHome.phone}
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div >
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataHome: state.home
  }
}

export default connect(mapStateToProps)(ContentIndex)
