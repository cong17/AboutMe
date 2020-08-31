import React, { Component } from 'react';
import { connect } from 'react-redux';


class ContentResume extends Component {
  genDataSkill = () => {

    if (this.props.dataResume.skill.content) {
      if (!this.props.dataResume.skill.content)
        return ""
      else
        return this.props.dataResume.skill.content.map((value, key) => {
          return (
            <p key={key}>- {value} </p>
          )
        })
    }
  }
  // 
  genDataProject = () => {
    return this.props.dataResume.project.map((value, key) => {
      return (
        <div key={key} className="timeline-item">
          <h4 className="item-title">{value.title}</h4>
          <span className="item-period">{value.time}</span>
          <span className="item-small">{value.location}</span>
          {value.content.map((valueContent, key) => <p key={key}>{valueContent}</p>)}
          <a href={value.sourceCode}><i className="fa fa-github" /> Source Code </a>
          <a href={value.linkProduct}><i className="fa fa-globe" /> Sản phẩm</a>
        </div>
      )
    })
  }

  render() {
    return (
      <div id="main" className="site-main">
        {/* Page changer wrapper */}
        <div className="pt-wrapper">
          {/* Subpages */}
          <div className="subpages" style={{ paddingTop: '70px' }}>
            <section data-id="resume" data-title="Resume" className="pt-page pt-page-resume pt-page-current pt-page-relative">
              <div className="section-inner custom-page-content">
                <div className="page-header">
                  <h2 className="section-title">Thông tin</h2>
                </div>
                <div className="page-content">
                  <div className="fw-page-builder-content">
                    <section className="fw-main-row">
                      <div className="fw-container">
                        <div className="row">
                          <div className="col-xs-12 col-sm-6">
                            <div className="fw-col-inner">
                              <div className="block-title fw-timeline-title">
                                <h3>{this.props.dataResume.hv.title}</h3>
                              </div>
                              <div className="timeline" id="timeline-5f4b2483199d8">
                                <div className="timeline-item">
                                  <h4 className="item-title">
                                    {this.props.dataResume.hv.name}
                                  </h4>
                                  <span className="item-period">{this.props.dataResume.hv.time}</span>
                                  <span className="item-small">{this.props.dataResume.hv.location}</span>
                                  <p>
                                    {this.props.dataResume.hv.content}
                                  </p>
                                </div>
                              </div>
                              <div className="fw-divider-space" style={{ paddingTop: '30px' }} />
                            </div>
                            <div className="fw-col-inner">
                              <div className="block-title fw-timeline-title">
                                <h3>{this.props.dataResume.skill.title}</h3>
                              </div>
                              <div className="timeline">
                                <div className="timeline-item">
                                  {this.genDataSkill()}
                                </div>
                              </div>
                              <div className="fw-divider-space" style={{ paddingTop: '30px' }} />
                            </div>
                          </div>
                          <div className="col-xs-12 col-sm-6">
                            <div className="fw-col-inner">
                              <div className="block-title fw-timeline-title">
                                <h3>Dự Án</h3>
                              </div>
                              <div className="timeline" >

                                {this.genDataProject()}
                              </div>
                              <div className="fw-divider-space" style={{ paddingTop: '30px' }} />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-xs-12 col-sm-12 center">
                            <div className="fw-col-inner">
                              <a href={this.props.linkcv} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">View Resume PDF</a>
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
      </div>

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataResume: state.resume,
    linkcv: state.home.linkcv
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return

}
export default connect(mapStateToProps, mapDispatchToProps)(ContentResume)