import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

import setAuthToken from '../utils/setAuthToken';
import { connect } from 'react-redux';
const axios = require('axios');

class QuizBoard extends Component {

	state = {
		score: 0
	}

	componentDidMount(){
		const { jwt } = localStorage;
    setAuthToken(jwt)
    axios.get('/questions')
    .then((res) => {
      if(res.data.success){
        this.props.dispatch({ type: "ADD_QUESTIONS", payload: res.data.questions[0].questions });
      	// this.props.history.push('/');
    		// this.setState({ data: [...res.data.questions[0].questions] })
    		// console.log("state set")
      }
    })
    .catch(function (error) {
      // console.log(error, "catch error");
    });
	}

	// alphabetical order
	alpha = (num) => {
		switch(num){
			case 0 : 
			return "A";
			case 1 : 
			return "B";
			case 2 : 
			return "C";
			case 3 : 
			return "D";
		}
	} 

	handleChange = (e) => {
		const { name, value } = e.target;
		console.log(value,"check point 01");
		this.setState({[name]: value}); 
	}

	handleSubmit = (e, id) => {
		e.preventDefault();
		console.dir(id,"testing ");
		// console.log(id, e,"handleSubmit fired");
	
	}

	render() {
		const questions = this.props.questions;
		// console.log(questions,"testing.......................")
		return (
			<div style={{paddingBottom: "20px"}}>
					{
						!questions ? null :
							questions.map((ques, index) => (
								<div className="quiz-card" key={index} data-id={ques._id}>
								{
									Object.keys(ques).join().trim().split(",").map((v,i) =>  (
											v === "question" ? 
												<Link to="/quiz/question" className="nav-link" style={{color:"white"}}><p style={{padding: "20px 0"}} key={i} >{ques[v].toUpperCase()}</p></Link>
											: "" 
									))
								}
								</div>
							))
					}
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "map state quix...");
	return { questions: state.questions.data };
}
export default connect(mapStateToProps)(QuizBoard);
