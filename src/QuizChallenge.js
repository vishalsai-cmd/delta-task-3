import React,{Component} from "react";
export default class Quizchallenge extends Component {
    constructor(props){
        super(props);
        this.state={
            quizData:"",
        }
    }
    componentDidMount()
    {
        fetch("http://localhost:5000/challenge-quiz",{
            method:"POST",
            crossDomain:true,
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json",
                "Access-control-Allow-origin":"*",
            },
            body:JSON.stringify({
                /* token2:window.localStorage.getItem("token2"), */
                token1:window.localStorage.getItem("token1"),
            })

        }).then((res) =>res.json())
        .then((data) =>{
            console.log(data,"quizData");
            this.setState({quizData:data.data});
        })
    }
    render(){
        return(
            <div style={{marginLeft:30}}>
            <form>
                <h1>{this.state.quizData.question1}</h1>
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option1}</label>
                <br />
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option2}</label>
                <br />
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option3}</label>
                <br />
                <h1>{this.state.quizData.question2}</h1>
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option4}</label>
                <br />
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option5}</label>
                <br />
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option6}</label>
                <br />
                <h1>{this.state.quizData.question3}</h1>
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option7}</label>
                <br />
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option8}</label>
                <br />
                <input type="radio" style={{marginBottom:20}}></input>
                <label>{this.state.quizData.option9}</label>
                <br />
                <a href="./Score">Submit</a>
            </form>
          </div>
        )
    }
}