import React from 'react'
class Xe extends React.Component{
    render(){
        console.log('Xe:', this.props.colorCar);
        return <h2 style={{color : this.props.colorCar}}> Chào, tôi là chiếc xe màu {this.props.value} nè! </h2>
    }
}

export default Xe;