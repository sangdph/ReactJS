import React from "react";
class Xe extends React.Component {
  constructor(props) {
    console.log("constructor", props.colorCar);
    super(props);
    this.state = {
      colorCar: props.colorCar,
      value: props.value,
    };
    this.sang1 = this.sang1.bind(this);
  }

  //Cần phải có bind trong constructor
  sang1() {
    console.log("sang 1: ", this);
    setTimeout(() => {
      this.setState({ colorCar: "yellow" });
    }, 1000);
  }

  sang2 = (a) => {
    //console.log('sang2 nè', this);
    console.log("sang2 a: ", a);
  };

  sang3 = (a) => {
    //console.log('sang2 nè', this);
    console.log("sang3 a: ", a);
  };
  // static getDerivedStateFromProps(props, state){
  //     console.log('getDerivedStateFromProps: ', props.colorCar);
  //     return { colorCar: props.colorCar};
  // }
  render() {
    console.log("render", this.props.colorCar);
    const sang1 = (
      <h3
        onClick={this.sang1}
        style={{ color: this.state.colorCar, cursor: "cursor" }}
      >
        Chào, tôi là chiếc xe màu 1 {this.state.value} nè!
      </h3>
    );

    const sang2 = (
      <h3
        onClick={() => this.sang2("sangyeunhi")}
        style={{ color: this.state.colorCar, cursor: "cursor" }}
      >
        Chào, tôi là chiếc xe màu 2 {this.state.value} nè!
      </h3>
    );

    const sang3 = (
      <h3
        onClick={this.sang3.bind(this, "sangyeunhi")}
        style={{ color: this.state.colorCar, cursor: "cursor" }}
      >
        Chào, tôi là chiếc xe màu 3 {this.state.value} nè!
      </h3>
    );
    return <div>{sang1}{sang2}{sang3}</div>;
  }

  // componentDidMount(){
  //     console.log('componentDidMount: ', this.props.colorCar);
  //     setTimeout(()=>{
  //         this.setState({colorCar: 'yellow'});
  //         console.log('componentDidMount đã thay đổi thành màu vàng: ', this.props.colorCar);
  //     },5000)
  // }
}

export default Xe;
