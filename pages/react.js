import React from 'react'
import Layout from '../components/MyLayout.js'

export default class ReactPage extends React.Component {
    constructor(props) 
    { 
        super(props); 
        this.state = { hello : "World! " }; 
    } 
  
    componentWillMount() 
    { 
        console.log("componentWillMount(1) -- ", this.state.hello ); 
    } 
  
    componentDidMount() 
    { 
        console.log("componentDidMount(2) -- ", this.state.hello); 
    } 
  
    changeState = () => 
    { 
        this.setState({ hello : " Yahooo" }); 
    } 
  
    render() 
    { 
        return ( 
            <Layout>
                <div> 
                    <h1> State:   { this.state.hello }</h1> 
                    <h2><a onClick={this.changeState}>Press Here!</a></h2> 
                </div>
            </Layout>
            ); 
    } 
  
    shouldComponentUpdate(nextProps, nextState) 
    { 
        console.log("shouldComponentUpdate(3) -- ", this.state.hello); 
        return true; 
    } 
  
    componentWillUpdate() 
    { 
        console.log("componentWillUpdate(4) -- ", this.state.hello); 
        
    } 
  
    componentDidUpdate() 
    { 
        console.log("componentDidUpdate(5) -- ", this.state.hello); 
    } 
}

