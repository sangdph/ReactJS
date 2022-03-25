import React from "react";
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  myChangeHandler = (event) =>{
      this.setState({username: event.target.value});
  }
  render() {
    let header = this.state.username;
    if(this.state.username){
        header = <h1>Hello {this.state.username}</h1>;
    }else{
        console.log('Sang yêu Nhi nhất trái đất');
        header = '';
    }
    return  <form>
                {header}
                <p>Enter your name: </p>
                <input type='text' onChange={this.myChangeHandler} />
            </form>;
  }
}

export default MyForm;
