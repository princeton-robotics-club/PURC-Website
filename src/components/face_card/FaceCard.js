import './FaceCard.css';

function FaceCard(props) {

  const {
    darkMode,
    name = '',
    subtext = []
  } = props;

  return (
    <div className={'face-card' + (darkMode ? ' face-card-dark' : ' face-card-light')}>
      <div className='face'/>
      <div className='caption'>
        <div style={{fontWeight: 'bold'}}>
          {name}
        </div>
        {subtext.join('\n')}
      </div>
    </div>
  );
}

export default FaceCard;