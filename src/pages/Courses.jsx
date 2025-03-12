import React from "react";
import Container from "../components/Container";
import styled from "styled-components";
import { useNavigate } from "react-router";

export const COURSES = [
  {
    id: 1,
    courseName: "React 17 Morning",
    dateOfFinish: "2025-02-28",
    description: "9:00/11:00",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/png/1740719457000%D0%94%D0%B8%D0%B7%D0%B0%D0%B9%D0%BD%20%D0%B1%D0%B5%D0%B7%20%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F.png",
  },
  {
    id: 2,
    courseName: "JS 17 - DAY",
    dateOfFinish: "2025-01-13",
    description: "JavaScript, HTML, CSS",
    imageLink: "https://peaksoftlms.s3.amazonaws.com/IT-prod.webp",
  },
  {
    id: 3,
    courseName: "React 16 Evening",
    dateOfFinish: "2024-09-17",
    description: "18:00/20:00",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/173622532039924282418-63a54bede68da.jpg",
  },
  {
    id: 4,
    courseName: "JS 17 - Morning",
    dateOfFinish: "2024-08-25",
    description: "Introduction to Javascript",
    imageLink:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpgta8UVTzXLRy-48RzGIiyoOkqStpozFO_g&s",
  },
  {
    id: 5,
    courseName: "JS 16 Evening",
    dateOfFinish: "2024-08-25",
    description: "01.10.2024 - 18:00 \\ 20:00",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1727761680205javascript-series.jpg",
  },
  {
    id: 6,
    courseName: "sessions JS-14",
    dateOfFinish: "2024-12-04",
    description: "PRACTICE LESSONS",
    imageLink: "https://peaksoftlms.s3.amazonaws.com/IT-prod.webp",
  },
  {
    id: 7,
    courseName: "Java 15",
    dateOfFinish: "2024-12-04",
    description: "Java core first stage",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1719826723447MasterClass-Java.mukhammed.jpg",
  },
  {
    id: 8,
    courseName: "JS-14 REACT LESSONS",
    dateOfFinish: "2024-09-05",
    description: "JS-14 REACT Lessons",
    imageLink:
      "https://peaksoftlms.s3.amazonaws.com/jpg/1719745184591React.jpg",
  },
];

function Courses() {
  const navigate = useNavigate();
  return (
    <Container>
      <h1
        style={{
          color: "black",
          marginTop: "-1px",
          paddingTop: "30px",
          paddingLeft: "30px",
          fontSize: "40px",
        }}
      >
        Мои курсы
      </h1>
      <DecriptionContainer>
        {COURSES.map((items, id) => (
          <StyledCard key={id}>
            <Image
              src={items.imageLink}
              onClick={() => navigate(`${items.id}`)}
            />
            <StyledDivTag>
              <StyledDate>{items.courseName}</StyledDate>

              <StyledDate>{items.dateOfFinish}</StyledDate>
            </StyledDivTag>

            <p>{items.description}</p>
          </StyledCard>
        ))}
      </DecriptionContainer>
    </Container>
  );
}

const StyledDivTag = styled.div`
  margin-top: 10px;
  display: flex;
  column-gap: 20px;
`;
const StyledDate = styled.p`
  color: #211f1f;
  font-size: 1.1rem;
  font-weight: 300;
  display: flex;
`;

const StyledCard = styled.div`
  margin-left: 20px;
  width: 300px;
  height: 305px;
  background-color: white;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 1px -1px,
    rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 6px;
  overflow: hidden;
  padding: 12px;
  box-sizing: border-box;
  cursor: pointer;
`;

const Image = styled.img`
  height: 146px;
  width: 100%;
  object-fit: cover;
  border-radius: 6px;
`;

const DecriptionContainer = styled.div`
  background-color: #f2f2f2;
  padding: 20px 16px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-content: center;
`;

const SubDescription = styled.p`
  font-weight: 400;
  font-size: 12px;
  color: #c7c2c2;
  margin-top: 10px;
  padding-left: 16px;
  padding-right: 16px;
`;

export default Courses;
