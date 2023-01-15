import s from './styles.module.css';

export default function PageLoader() {
  return (
    <div className={s.loading}>
      <div className="spinner" />
    </div>
  );
}
