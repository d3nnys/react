import css from './TransactionHistoryList.module.css';

export default function TransactionHistoryList({ type, amount, currency }) {
  return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
  );
}
