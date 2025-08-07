import React, { useRef, useState } from "react";

import Card from "../../card/Card";
import FaceCard from "../../face_card/FaceCard";
import NameCard from "../../name-card/NameCard";
import "../Generic.css";
import "./alumni.css";
import { memberData } from "./memberData";
import { adminData } from "./adminData";

function Alumni(props) {
  const {
    // eslint-disable-next-line
    darkMode,
  } = props;

  const years = [
    //previous years are a work in progress...
    // "2017 - 2018",
    // "2018 - 2019",
    // "2019 - 2020",
    // "2020 - 2021",
    // "2021 - 2022",
    "Show All",
    "2022 - 2023",
    "2023 - 2024",
    "2024 - 2025",
  ];

  // selectYear for past MEMBERS
  const [selectYearMember, setSelectYearMember] = useState("Show All");

  // selectYear for past ADMIN
  const [selectYearAdmin, setSelectYearAdmin] = useState("Show All");

  // useState for past MEMBERS
  const [alumni, setAlumni] = useState(memberData);

  // useState for past ADMINS
  const [admin, setAdmin] = useState(adminData);

  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  // handleSearch for past MEMBERS
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);

    if (query === "") {
      setAlumni(memberData);
      return;
    }
    const filtered = memberData.filter(
      (alumnus) =>
        alumnus.name.toLowerCase().includes(query) ||
        (alumnus.roles &&
          alumnus.roles.some((role) => role.toLowerCase().includes(query)))
    );
    setAlumni(filtered);
  };

  // handleSearch for past ADMINS
  const handleSearchAdmin = (e) => {
    const query = e.target.value.toLowerCase().trim();
    setSearchQuery(query);

    if (query === "") {
      setAdmin(adminData);
      return;
    }
    const filtered = adminData.filter(
      (alumnus) =>
        alumnus.name.toLowerCase().includes(query) ||
        (alumnus.roles &&
          alumnus.roles.some((role) => role.toLowerCase().includes(query)))
    );
    setAdmin(filtered);
  };

  const clearSearch = () => {
    setSearchQuery("");
    setAlumni(memberData);
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
      searchInputRef.current.focus();
    }
  };

  return (
    <>
      <div className="body-bg">
        <div className="join-bg-img" />
        <section className="article-centered">
          <div
            className={
              "title-blob" +
              (darkMode ? " title-blob-dark" : " title-blob-light")
            }
          >
            PURC ALUMNI{" "}
          </div>

          {/*SECTION FOR ADMIN*/}
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={
              "text-box text-box-padded-not-below" +
              (darkMode ? " text-box-dark" : " text-box-light")
            }
          >
            <div className="centered-heading">
              Former Club Admins
              <div className="input-container">
                <input
                  className={
                    "search " + (darkMode ? "search-dark" : "search-light")
                  }
                  placeholder="Type a name or role to search... "
                  onChange={handleSearchAdmin}
                  value={searchQuery}
                />
              </div>
            </div>

            <div className="centered-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  paddingBottom: 30,
                }}
              >
                <label
                  htmlFor="year-select"
                  style={{
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: darkMode ? "#f0f0f0" : "#333",
                  }}
                >
                  Select Year:
                </label>
                <select
                  id="year-select"
                  value={selectYearAdmin}
                  onChange={(e) => setSelectYearAdmin(e.target.value)}
                  className={`year-select ${
                    darkMode ? "year-select-dark" : "year-select-light"
                  }`}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    width: "200px",
                    cursor: "pointer",
                    outline: "none",
                    border: darkMode ? "1px solid #555" : "1px solid #ddd",
                    backgroundColor: darkMode
                      ? "rgba(40, 40, 40, 0.8)"
                      : "rgba(250, 250, 250, 0.8)",
                    color: darkMode ? "#f0f0f0" : "#333",
                    // fontFamily: "Poppins",
                    alignItems: "center",
                  }}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
              <div className="adminFaceCards">
                {admin
                  .filter(
                    (alumunus) =>
                      selectYearAdmin === "Show All" ||
                      alumunus.years.includes(selectYearAdmin)
                  )
                  .map((alumnus, index) => {
                    return (
                      <FaceCard
                        name={alumnus.name}
                        subtext={alumnus.roles}
                        darkMode={darkMode}
                        image={alumnus.image}
                        gradYear={alumnus.gradYear}
                        major={alumnus.major}
                        key={`alumnus-${index}`}
                      />
                    );
                  })}
              </div>
            </div>
          </Card>

          {/*SECTION FOR TECH LEADS*/}
          <Card
            darkMode={darkMode}
            pathString="/about#alumni"
            className={
              "text-box text-box-padded-not-below" +
              (darkMode ? " text-box-dark" : " text-box-light")
            }
          >
            <div className="centered-heading">
              Former Club Tech Leads
              <div className="input-container">
                <input
                  className={
                    "search " + (darkMode ? "search-dark" : "search-light")
                  }
                  placeholder="Type a name or team to search... "
                  onChange={handleSearch}
                  value={searchQuery}
                />
              </div>
            </div>
            <div className="centered-container">
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  alignItems: "center",
                  paddingBottom: 30,
                }}
              >
                <label
                  htmlFor="year-select"
                  style={{
                    marginBottom: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: darkMode ? "#f0f0f0" : "#333",
                  }}
                >
                  Select Year:
                </label>
                <select
                  id="year-select"
                  value={selectYearMember}
                  onChange={(e) => setSelectYearMember(e.target.value)}
                  className={`year-select ${
                    darkMode ? "year-select-dark" : "year-select-light"
                  }`}
                  style={{
                    padding: "10px 15px",
                    borderRadius: "8px",
                    fontSize: "14px",
                    width: "200px",
                    cursor: "pointer",
                    outline: "none",
                    border: darkMode ? "1px solid #555" : "1px solid #ddd",
                    backgroundColor: darkMode
                      ? "rgba(40, 40, 40, 0.8)"
                      : "rgba(250, 250, 250, 0.8)",
                    color: darkMode ? "#f0f0f0" : "#333",
                    // fontFamily: "Poppins",
                    alignItems: "center",
                  }}
                >
                  {years.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div className="memberFaceCards">
                {alumni
                  .filter(
                    (alumunus) =>
                      selectYearMember === "Show All" ||
                      alumunus.years.includes(selectYearMember)
                  )
                  .map((alumnus, index) => {
                    return (
                      <FaceCard
                        name={alumnus.name}
                        subtext={alumnus.roles}
                        darkMode={darkMode}
                        key={`alumus-${index}`}
                        image={alumnus.image}
                        gradYear={alumnus.gradYear}
                        major={alumnus.major}
                      />
                    );
                  })}
              </div>
            </div>
          </Card>
        </section>
      </div>
    </>
  );
}

export default Alumni;
