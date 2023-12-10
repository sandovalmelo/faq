import React, { useEffect, useRef, useState } from "react";
import Question from "./Question";
import "./QuestionContainer.scss";

const questions = [
	{
		id: 1,
		question: "What is Frontend Mentor, and how will it help me?",
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
	},
	{
		id: 2,
		question: "Is Frontend Mentor free?",
		answer:
			"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
	},
	{
		id: 3,
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!"
	},
	{
		id: 4,
		question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members."
	}
];

function QuestionsContainer() {
	const [open, setOpen] = useState(null);
	const ref = useRef(null);

	useEffect(function () {
		function handleClick(event) {
			if (ref.current && !ref.current.contains(event.target)) setOpen(null);
		}

		document.addEventListener("click", handleClick);

		return () => document.removeEventListener("click", handleClick);
	}, []);

	return (
		<div className="question-container" ref={ref}>
			<div>
				<span>
					<img src="./../images/icon-star.svg" alt="Star icon" />
				</span>
				<h1>FAQs</h1>
			</div>
			{questions.map((item) => (
				<Question
					question={item.question}
					answer={item.answer}
					id={item.id}
					key={item.id}
					open={open}
					setOpen={setOpen}
				/>
			))}
		</div>
	);
}

export default QuestionsContainer;
