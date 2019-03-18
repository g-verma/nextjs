import React from 'react'
import 'isomorphic-unfetch'
import Layout from '../components/MyLayout.js'

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://api.github.com/repos/zeit/next.js')
    const data = await res.json()
    
    console.log('json data',data);
    return { stars: data.stargazers_count }
}

  render () {
    return (
      <div>
        <Layout>
            <p><strong> Next.js has {this.props.stars} Stars </strong></p>
            <p>A great feature of this homepage is that the highlighted items are neatly presented for all to see. </p>
            <p>You’ll also notice the simple but attractive scrolling slideshow at the top, which helps give visitors additional information without adding clutter.</p>
        </Layout>
      </div>
    )
  }
}