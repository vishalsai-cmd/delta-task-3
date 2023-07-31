import React, { Component } from "react";
export default class Quiz extends Component{
    constructor(props){
    super(props);
    this.state={
        email:"",
        question1:"",
        option1:"",
        option2:"",
        option3:"",
        answer1:"",
        question2:"",
        option4:"",
        option5:"",
        option6:"",
        answer2:"",
        question3:"",
        option7:"",
        option8:"",
        option9:"",
        answer3:""
    }
    this.handleSubmit=this.handleSubmit.bind(this)
}
handleSubmit(event){
    event.preventDefault();
    const {email,question1,option1,option2,option3,answer1,question2,option4,option5,option6,answer2,question3,option7,option8,option9,answer3}=this.state;
    fetch("http://localhost:5000/quiz-data",{
        method:"POST",
        crossDomain:true,
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Access-control-Allow-origin":"*",
        },
        body:JSON.stringify({
            email,
            question1,
            option1,
            option2,
            option3,
            answer1,
            question2,
            option4,
            option5,
            option6,
            answer2,
            question3,
            option7,
            option8,
            option9,
            answer3
        }),

    }).then((res) =>res.json())
   .then((data) =>{
        console.log(data,"userRegister");
        if(data.status=="ok")
        {
            window.localStorage.setItem("token2",data.data);
            /* window.location.href="./QuizChallenge"; */
        }
    })
    }
    render(){
        return(
        <div style={{marginLeft:50  }}>    
        <form onSubmit={this.handleSubmit}>
         <div>
            <input type="email" placeholder="enter email" onChange={(e) =>{this.setState({email:e.target.value})}}></input>
        </div>     
        <div>
            <h1>Question 1</h1>
            <input type="text" placeholder="enter question" style={{width:500}} onChange={(e) =>this.setState({question1:e.target.value})}></input>
            <h2>enter options</h2>
            <input type="text" placeholder="option1" style={{marginBottom:20}} onChange={(e) =>this.setState({option1:e.target.value})}></input>
            <br />
            <input type="text" placeholder="option2" style={{marginBottom:20}} onChange={(e) =>this.setState({option2:e.target.value})}></input>
            <br />
            <input type="text" placeholder="option3" style={{marginBottom:20}} onChange={(e) =>this.setState({option3:e.target.value})}></input>
            <br />
        </div>
        <div>
            <h1>Question 2</h1>
            <input type="text" placeholder="enter question" style={{width:500}} onChange={(e) =>this.setState({question2:e.target.value})}></input>
            <h2>enter options</h2>
            <input type="text" placeholder="option1" style={{marginBottom:20}} onChange={(e) =>this.setState({option4:e.target.value})}></input>
            <br />
            <input type="text" placeholder="option2" style={{marginBottom:20}} onChange={(e) =>this.setState({option5:e.target.value})}></input>
            <br />
            <input type="text" placeholder="option3" style={{marginBottom:20}} onChange={(e) =>this.setState({option6:e.target.value})}></input>
            <br />
        </div>
        <div>
            <h1>Question 3</h1>
            <input type="text" placeholder="enter question" style={{width:500}} onChange={(e) =>this.setState({question3:e.target.value})}></input>
            <h2>enter options</h2>
            <input type="text" placeholder="option1" style={{marginBottom:20}} onChange={(e) =>this.setState({option7:e.target.value})}></input>
            <br />
            <input type="text" placeholder="option2" style={{marginBottom:20}} onChange={(e) =>this.setState({option8:e.target.value})}></input>
            <br />
            <input type="text" placeholder="option3" style={{marginBottom:20}} onChange={(e) =>this.setState({option9cd :e.target.value})}></input>
            <br />
        </div>
        <button type="submit">create</button>
        </form>
        </div>
        )
    }
}

