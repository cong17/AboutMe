import React from 'react';
import Footer from './Footer';
import ScrollToTop from './SrollToTop'
import Container from './Container';
import { data } from '../Other/Connectdb';
import { connect } from 'react-redux';
class App extends React.Component {

  componentDidMount() {
    data.on("value", (values) => {
      const dataSendToStore = {
        "home": values.val().home,
        "resume": values.val().resume,
        "gallery": values.val().gallery
      }
      console.log(dataSendToStore);
      this.props.UpdateData(dataSendToStore)

    })
  }
  render() {
    return (
      <div>
        <Container></Container>
        <Footer></Footer>
        <ScrollToTop></ScrollToTop>
      </div >

    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    prop: state.prop
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    UpdateData: (data) => {
      console.log(data);
      dispatch({ type: "UPDATE_DATA_ALL", data })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
