import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const colorStatus = clsx(isOnline ? css.online : css.offline);

  return (
    <>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={colorStatus}>{isOnline ? 'Online' : 'Offline'}</p>
    </>
  );
}
