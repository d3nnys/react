import { useEffect, useState } from 'react';
import Description from '../Description/Description.jsx';
import css from './App.module.css';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';

export default function App() {
  const [clicks, setClicks] = useState(() => {
    const savedClicks = localStorage.getItem('click-count');

    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    localStorage.setItem('click-count', JSON.stringify(clicks));
  }, [clicks]);

  const updateClicks = key => {
    setClicks({
      ...clicks,
      [key]: clicks[key] + 1,
    });
  };

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;

  const totalPositiveFeedbacks = Math.round(
    (clicks.good / totalFeedback) * 100
  );

  const resetClicks = () => {
    setClicks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <section className={css.page}>
      <div className={css.wrapper}>
        <Description />
        <Options
          clicks={updateClicks}
          total={totalFeedback}
          onClick={resetClicks}
        />
        {totalFeedback > 0 ? (
          <Feedback
            value={clicks}
            totalFeedback={totalFeedback}
            totalPositiveFeedbacks={totalPositiveFeedbacks}
          />
        ) : (
          <Notification />
        )}
      </div>
    </section>
  );
}
