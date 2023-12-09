import React from "react";

function Question({ question, answer }) {
	return (
		<>
			<h2>{question}</h2>
			<p>{answer}</p>
		</>
	);
}

export default Question;
