import css from './Notification.module.css';

export const Notification = ({ message }) => {
  return (
    <div>
      <h2 className={css.notificationTitle}>{message}</h2>
    </div>
  );
};
