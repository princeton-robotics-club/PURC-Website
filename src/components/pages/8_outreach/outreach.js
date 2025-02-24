import React from "react";
import { Link } from "react-router-dom";
import Card from "../../card/Card";
import '../Generic.css';
import './outreach.css';

function Outreach(props) {
  const { darkMode } = props;

  return (
    <div className="body-bg">
      <div
        className={
          "supp-bg-img" +
          (darkMode ? " supp-bg-img-dark" : " supp-bg-img-light")
        }
      />
      <section className="article-centered">
        <div
          className={
            "title-blob" + (darkMode ? " title-blob-dark" : " title-blob-light")
          }
        >
          {" "}
          OUTREACH{" "}
        </div>

        <Card
          darkMode={darkMode}
          className={
            "text-box text-box-padded" +
            (darkMode ? " text-box-dark" : " text-box-light")
          }
        >
          Through the years, the club has been involved in various outreach
          efforts. We have hosted workshops for local students, participated in
            community events, and collaborated with other organizations to promote
            STEM education. We are always looking for new opportunities to
            engage with the community and share our passion for robotics and
            technology. If you are interested in partnering with us or have an
            idea for an outreach event, please contact us.
        </Card>

        <Card
          darkMode={darkMode}
          className={
            "text-box full-width" +
            (darkMode ? " text-box-dark" : " text-box-light")
          }
        >
          <Link
            className={
              "outreach-logo-bgc" +
              (darkMode ? " outreach-logo-bgc-dark" : " outreach-logo-bgc-light")
            }
            to="https://www.wearebgc.org/"
            title="Black Girls Code"
          />
          <div>
            <div className="supp-info-text supp-info-text-e-quad">
                Black Girls Code is a non-profit organization that aims to
                increase interest and participation in computer science among young women and girls of color.
                They provide workshops, hackathons, and other events to teach coding and technology skills.
            </div>
          </div>
          <div className="img-bgc-speaker-event" />
        </Card>
      </section>
    </div>
  );
}

export default Outreach;
