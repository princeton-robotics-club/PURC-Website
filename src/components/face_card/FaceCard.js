import "./FaceCard.css";

function FaceCard(props) {
  const {
    darkMode,
    name = "",
    subtext = [],
    image = null,
    gradYear = "",
    major = "",
    disableOverlay = false, //disabling the popup for the faculty advisors
  } = props;

  return (
    <div
      className={
        "face-card" + (darkMode ? " face-card-dark" : " face-card-light")
      }
    >
      <div className="face-container">
        <div
          className="face"
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundColor: image ? null : "#888",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/*popup feature only renders only if disableOverlay is off*/}
        {!disableOverlay && (
          <div className="face-overlay">
            {gradYear && <div>{gradYear}</div>}
            {major && <div>{major}</div>}
          </div>
        )}

        <div className="caption">
          <div style={{ fontWeight: "bold" }}>{name}</div>
          {subtext.map((text, index) => (
            <div key={index} className="title">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaceCard;
