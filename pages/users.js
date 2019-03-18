import React from 'react'
import 'isomorphic-unfetch'
import Layout from '../components/MyLayout.js'

export default class Index extends React.Component {
  static async getInitialProps () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json();
    console.log(data);
    return { users: data }
}
  render () {
    return (
        <div>
        <Layout>
          <p>User List</p>
          {this.props.users.map(u => (
            <li> { u.name } </li> 
          ))}
          
        </Layout>
      </div>
    )
  }
}