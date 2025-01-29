import './FaceCard.css';

function FaceCard(props) {
  const { darkMode, name = '', subtext = [], image = null } = props;

  return (
    <div className={'face-card' + (darkMode ? ' face-card-dark' : ' face-card-light')}>
      <div
        className="face"
        style={{
          backgroundImage: 'url(' + image + ')',
          backgroundSize: 'cover',
          backgroundColor: image ? null : '#888',
        }}
      />
      <div className="caption">
        <div style={{ fontWeight: 'bold' }}>{name}</div>
        {subtext.map((text, index) => (
          <div key={index} className="title">
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FaceCard;
