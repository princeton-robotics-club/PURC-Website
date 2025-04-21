import './NameCard.css';

export default function NameCard({ name = '', subtext = [], darkMode = false }) {
  return (
    <div className={`name-card ${darkMode ? 'name-card-dark' : 'name-card-light'}`}>
      <div className="caption">
        <div className="name">{name}</div>
        <div className="roles">{Array.isArray(subtext) ? subtext.join(' • ') : subtext}</div>
      </div>
    </div>
  );
}
