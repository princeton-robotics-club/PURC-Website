import './NameCard.css';

export default function NameCard({ name = '', subtext, darkMode }) {
  return (
    <div className={'name-card' + (darkMode ? ' name-card-dark' : ' name-card-light')}>
      <div className="caption">
        <div className="alum-name" style={{ fontWeight: 'bold' }}>
          {name}
        </div>
        <p className="alum-roles">{subtext.join(' • ')}</p>
      </div>
    </div>
  );
}
