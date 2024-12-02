import css from './Profile.module.css';
import clsx from 'clsx';

export default function Profile({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) {
  const secondaryText = clsx(css.name, css.text);

  return (
    <div className={css.mainWrapper}>
      <div>
        <img className={css.img} src={avatar} width={250} alt="User avatar" />
        <b className={css.name}>{username}</b>
        <p className={secondaryText}>{tag}</p>
        <p className={secondaryText}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span>Followers</span>
          <span className={css.var}>{followers}</span>
        </li>
        <li className={css.listItem}>
          <span>Views</span>
          <span className={css.var}>{views}</span>
        </li>
        <li className={css.listItem}>
          <span>Likes</span>
          <span className={css.var}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
