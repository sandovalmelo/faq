import React from "react";
import "./Question.scss";

function Question({ question, answer }) {
	return (
		<>
			<h2 className="question-title">{question}</h2>
			<p className="question-answer">{answer}</p>
		</>
	);
}

export default Question;
