import React from 'react';

class UserClass extends React.Component{
 constructor(props){
  super(props);
  // best place to create state varables
   this.state={
    //big old obj contains all the state varavles
    count:0,
   };
 }
  //why we write super(props) (h.w)
 componentDidMount(){
    //called after the rendering is complete 
    // to make api calls
   // this is hsred among this class 
    // this.timer = setInterval(() =>{
    //               console.log("calling timeout");
    //               },1000);
 }

 componentWillUnmount(){
    //cleanupCode
  
    // clearInterval(this.timer);/
    console.log("unmount timeout");
 }
  
    render(){ //return some jsx


        return (

            <div className="user-card-class"> 
            <button onClick={()=>{
                this.setState({
                    count: this.state.count+1
             })
            }}>ckick me</button>
            <p>count:{this.state.count}</p>
            <h1>Name: {this.props.name}</h1>
            </div>
        )
    }
}

export default UserClass;