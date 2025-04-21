import React from "react";
import { Link } from "react-router-dom";
import Card from "../../card/Card";
import "../Generic.css";
import "./outreach.css";

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
          STEM education. We are always looking for new opportunities to engage
          with the community and share our passion for robotics and technology.
          If you are interested in partnering with us or have an idea for an
          outreach event, please contact us.
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
              "outreach-logo outreach-logo-bgc" +
              (darkMode ? " outreach-logo-dark" : " outreach-logo-light")
            }
            to="https://www.wearebgc.org/"
            title="Black Girls Code"
          />
          <div>
            <div className="supp-info-text supp-info-text-e-quad">
              In October 2024, we (alongside Princeton’s National Society of
              Black Engineers and Princeton’s Society of Women Engineers) had
              the honor of welcoming the CEO of Black Girls Code, Cristina
              Mancini, to Richardson Auditorium for a speaker event. This
              speaker event was the inaugural event of PURC's DEI Initiative,
              our latest contribution to our mission of making the world of STEM
              and robotics accessible and welcome to members of every community.
              Afterwards, we hosted a reception where attendees (including some
              nearby high school students!) were able to speak with Mancini
              one-on-one. We are grateful to Mancini and her team at BGC, as
              well as SWE, NSBE, and the many Princeton
              organizations/departments who made this event possible!!
            </div>
          </div>
          <div className="img-outreach-event" id="img-bgc-event" />
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
              "outreach-logo outreach-logo-sts" +
              (darkMode ? " outreach-logo-dark" : " outreach-logo-light")
            }
            to="https://www.stemtosternrowing.org/"
            title="STEM To Stern"
          />
          <div>
            <div className="supp-info-text supp-info-text-e-quad">
              Throughout 2024–2025, we collaborated with STEM to Stern to host
              robotics workshops for kids! Our PacBot, Tinker, and Droid teams
              walked through a variety of activities, from learning about
              obstacle avoidance to building working lightsabers. We had a lot
              of fun at these sessions and are looking forward to more in the
              coming years!
            </div>
          </div>
          <div
            className="img-outreach-event img-sts-event"
            id="img-sts-event"
          />
        </Card>

        {/* <Card
          darkMode={darkMode}
          className={
            "text-box full-width" +
            (darkMode ? " text-box-dark" : " text-box-light")
          }
        >
          <Link
            className={
              "outreach-logo outreach-logo-ppl" +
              (darkMode ? " outreach-logo-dark" : " outreach-logo-light")
            }
            to="https://princetonlibrary.org/"
            title="Princeton Public Library"
          />
          <div>
            <div className="supp-info-text supp-info-text-e-quad">
              Princeton Public Library is a vibrant community resource dedicated
              to fostering a love of learning and reading. With an extensive
              collection of books, digital media, and educational programs, the
              library offers a space for individuals of all ages to explore new
              ideas and expand their knowledge. As a non-profit institution,
              Princeton Public Library also hosts cultural events, workshops,
              and activities, making it a hub for creativity, connection, and
              lifelong learning in the Princeton area.
            </div>
          </div>
          <div
            className="img-outreach-event"
            id="img-princeton-library-event"
          />
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
              "outreach-logo outreach-logo-camden" +
              (darkMode ? " outreach-logo-dark" : " outreach-logo-light")
            }
            to="https://www.camdencountylibrary.org/riletta-l-cream-ferry-avenue-branch"
            title="Camden Ferry Library"
          />
          <div>
            <div className="supp-info-text supp-info-text-e-quad">
              Camden Ferry Library serves as a community hub, offering a wide
              range of resources, programs, and services to support learning and
              personal growth. With a focus on literacy and education, the
              library provides access to books, digital media, and educational
              workshops. As a vital part of the Camden community, it also hosts
              events that bring people together and encourage a love for reading
              and lifelong learning.
            </div>
          </div>
          <div className="img-outreach-event" id="img-camden-library-event" />
        </Card> */}
      </section>
    </div>
  );
}

export default Outreach;
