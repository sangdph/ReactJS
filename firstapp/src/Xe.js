import React from 'react'
class Xe extends React.Component{
    constructor(props){
        console.log('constructor', props.colorCar);
        super(props);
        this.state = {
            colorCar: props.colorCar,
            value: props.value,
        }
    }

    // static getDerivedStateFromProps(props, state){
    //     console.log('getDerivedStateFromProps: ', props.colorCar);
    //     return { colorCar: props.colorCar};
    // }
    render(){
        console.log('render', this.props.colorCar);
        return <h2 style={{color : this.state.colorCar}}> Chào, tôi là chiếc xe màu {this.state.value} nè! </h2>
    }
    
    componentDidMount(){
        console.log('componentDidMount: ', this.props.colorCar);
        setTimeout(()=>{
            this.setState({colorCar: 'yellow'});
            console.log('componentDidMount đã thay đổi thành màu vàng: ', this.props.colorCar);
        },5000)
    }
}

export default Xe;