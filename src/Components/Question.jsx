import React from "react";
import "./Question.scss";

function Question({ question, answer, id, open, setOpen }) {
	function handleClick() {
		setOpen(id === open ? "null" : id);
	}

	return (
		<div className="question">
			<div className="question-box" onClick={handleClick}>
				<h2 className="question-title">{question}</h2>
				<span>
					<img
						src={id === open ? "./../images/icon-minus.svg" : "./../images/icon-plus.svg"}
						alt="Toggle Icon"
					/>
				</span>
			</div>
			<p className={`question-answer ${id === open ? "open" : ""}`}>{answer}</p>
		</div>
	);
}

export default Question;
