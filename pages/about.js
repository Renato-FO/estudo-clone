
import React from 'react'

/* const About = () => {
   const message = 'hello world'
   return React.createElement('h1', null, 'I am generating this with create Element')
} */

/* function About (){
    return (
        <h1>Hello</h1>
    )
} */

class About extends React.Component {
    render() {
        return (
            <h1>hello i'm class component</h1>
        )
    }
}

export default About;