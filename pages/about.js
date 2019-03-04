import { Component } from "react";
import Layout from '../components/MyLayout.js'

class AboutPage extends Component {
  static getInitialProps() {
    const isServer = typeof window === "undefined";
    return { isServer };
  }

  render() {
    return (
      <Layout>
          <p>
           This page is served on --  
            <strong> {this.props.isServer ? "server" : "client"} side</strong>.
          </p>
          <p> <strong> Note: </strong> Just reload to see the Server Side Rendered page. </p>
      </Layout>
    );
  }
}

export default AboutPage;