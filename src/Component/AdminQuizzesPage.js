import React, { useState } from "react";
import "../css/AdminQuizzesPage.css";
import { useNavigate } from "react-router-dom";
import { Button, ListGroup } from "react-bootstrap";
import Message from "./Message";
import Loader from "./Loader";
import AssignmentDashboard from "./AssignmentDashboard";

const QuizzesPage = () => {
  const navigate = useNavigate();

  const catId = '1';

  const [quizzes, setQuizzes] = useState([{
    quizId: 1,
    category: {
      title: 'Test category',
      catId: 1,
    },
    maxMarks: 100,
    numberOfQuestions: 10,
    title: 'Test Quiz',
    description: 'test description',
  }]);

  const addNewQuizHandler = () => {
    navigate("/AssignmentDashboard/addQuiz");
  };
  const deleteQuizHandler = (quiz) => {
    console.log('fdvfgf')
  };
  const updateQuizHandler = (quizTitle, quizId) => {
  };

  const questionsHandler = (quizTitle, quizId) => {
  };

  return (
    <div className="">
      <AssignmentDashboard></AssignmentDashboard>
      <div className="adminQuizzesPage__content">
        <h2>Quizzes</h2>
        {quizzes ? (
          quizzes.length === 0 ? (
            <Message>No quizzes are present. Try adding some quizzes.</Message>
          ) : (
            quizzes.map((quiz, index) => {
              if ((catId && quiz.category.catId == catId) || (catId == null))
                return (
                  <ListGroup
                    className="adminQuizzesPage__content--quizzesList"
                    key={index}
                  >
                    <ListGroup.Item className="align-items-start" action>
                      <div className="ms-2 me-auto">
                        <div className="fw-bold">{quiz.title}</div>
                        <p style={{ color: "grey" }}>{quiz.category.title}</p>
                        {<p className="my-3">{quiz.description}</p>}
                        <div className="adminQuizzesPage__content--ButtonsList">
                          <div
                            onClick={() =>
                              questionsHandler(quiz.title, quiz.quizId)
                            }
                            style={{
                              border: "1px solid grey",
                              width: "100px",
                              height: "35px",
                              padding: "1px",
                              textAlign: "center",
                              borderRadius: "5px",
                              color: "white",
                              backgroundColor: "rgb(68 177 49)",
                              margin: "0px 4px",
                            }}
                          >{`Questions`}</div>
                          <div
                            style={{
                              border: "1px solid grey",
                              width: "100px",
                              padding: "1px",
                              textAlign: "center",
                              borderRadius: "5px",
                              height: "35px",
                              margin: "0px 4px",
                            }}
                          >{`Marks : ${quiz.maxMarks}`}</div>
                          <div
                            style={{
                              border: "1px solid grey",
                              width: "100px",
                              padding: "1px",
                              textAlign: "center",
                              borderRadius: "5px",
                              height: "35px",
                              margin: "0px 4px",
                            }}
                          >{`${quiz.numberOfQuestions} Questions`}</div>
                          <div
                            onClick={() =>
                              updateQuizHandler(quiz.title, quiz.quizId)
                            }
                            style={{
                              border: "1px solid grey",
                              color: "white",
                              backgroundColor: "rgb(68 177 49)",
                              width: "100px",
                              padding: "1px",
                              textAlign: "center",
                              borderRadius: "5px",
                              height: "35px",
                              margin: "0px 4px",
                            }}
                          >{`Update`}</div>
                          <div
                            onClick={() => deleteQuizHandler(quiz)}
                            style={{
                              border: "1px solid grey",
                              color: "white",
                              backgroundColor: "#ff0b0bdb",
                              width: "100px",
                              padding: "2px",
                              textAlign: "center",
                              borderRadius: "5px",
                              height: "35px",
                              margin: "0px 4px",
                            }}
                          >{`Delete`}</div>
                        </div>
                      </div>
                      {/* <Badge bg="primary" pill></Badge> */}
                    </ListGroup.Item>
                  </ListGroup>
                );
            })
          )
        ) : (
          <Loader />
        )}
        <Button
            className="my-5 adminAddQuizPage__content--button"
            type="submit"
            variant="primary"
          onClick={addNewQuizHandler}
        >
          Add Quiz
        </Button>
      </div>
    </div>
  );
};

export default QuizzesPage;
