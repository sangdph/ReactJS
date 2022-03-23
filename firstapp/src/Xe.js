import React from 'react'
class Xe extends React.Component{
    constructor(props){
        console.log('Xe constructor', props);
        super(props);
        this.state = {
            colorCar: props.colorCar,
            value: props.value,
        }
    }
    render(){
        console.log('Xe:', this.props.colorCar);
        return <h2 style={{color : this.state.colorCar}}> Chào, tôi là chiếc xe màu {this.state.value} nè! </h2>
    }
}

export default Xe;