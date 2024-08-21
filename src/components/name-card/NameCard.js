import './NameCard.css';

export default function NameCard({ name = '', subtext, darkMode }) {
  return (
    <div className={'name-card' + (darkMode ? ' name-card-dark' : ' name-card-light')}>
      <div className="caption">
        <div className="name" style={{ fontWeight: 'bold' }}>
          {name}
        </div>
        <p className="roles">{subtext.join(' • ')}</p>
      </div>
    </div>
  );
}
