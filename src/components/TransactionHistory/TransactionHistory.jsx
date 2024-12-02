import clsx from 'clsx';
import TransactionHistoryList from '../TransactionHistoryList/TransactionHistoryList.jsx';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr className={css.tr}>
            <th className={css.tr}>Type</th>
            <th className={css.tr}>Amount</th>
            <th className={css.tr}>Currency</th>
          </tr>
        </thead>

        <thead className={css.thead}>
          {items.map(item => (
            <tr className={css.trList} key={item.id}>
              <TransactionHistoryList
                type={item.type}
                amount={item.amount}
                currency={item.currency}
              />
            </tr>
          ))}
        </thead>
      </table>
    </>
  );
}
