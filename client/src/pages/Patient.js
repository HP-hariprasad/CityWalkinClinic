import React,{Component} from 'react'
import Navbar from '../components/Navbar'

class Patient extends Component{
    render(){
        return(
            <div>
                <Navbar />
                <p>I am a Patient</p>
            </div>
        )
    }
}

export default Patient