
import style from './FeedbackOptions.module.css';

export default function FeedbackOptions ({ options, onLeaveFeedback }) {
	return (
		<>
			{options.map((option) => (
				<button key={option} type="button" className={style.button} name={option} onClick={() => onLeaveFeedback(option)}>
					{option}
				</button>
			))}
		</>
	);
};
