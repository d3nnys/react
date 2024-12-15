import css from './Feedback.module.css';

export default function Feedback({
  totalFeedback,
  totalPositiveFeedbacks,
  value: { good, neutral, bad },
}) {
  return (
    <ul className={css.wrapper}>
      <li>
        <p>Good: {good}</p>
      </li>
      <li>
        <p>Neutral: {neutral}</p>
      </li>
      <li>
        <p>Bad: {bad}</p>
      </li>
      <li>
        <p>Total: {totalFeedback}</p>
      </li>
      <li>
        <p>Positive: {totalPositiveFeedbacks}%</p>
      </li>
    </ul>
  );
}
