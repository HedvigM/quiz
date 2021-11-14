import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

export const CurrentQuestion = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
    /* man kan välja om man vill att det skall heta store eller state...  */
  );

  /*  const quizSlice = useSelector((store) => store.quiz); */
  /* console.log(quizSlice);
  console.log(question); */

  const dispatch = useDispatch();
  /* dispatch some actions */

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>;
  }

  const onAnswerSubmit = (id, index) => {
    dispatch(
      quiz.actions.submitAnswer({
        questionId: id,
        answerIndex: index
      })
    );
    dispatch(quiz.actions.goToNextQuestion());
  };

  return (
    <Question>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item, index) => (
        <button
          type="button"
          key={item}
          onClick={() => onAnswerSubmit(question.id, index)}>
          {item}
        </button>
      ))}
    </Question>
  );
};

const Question = styled.div`
  height: 100vh;
  background-color: grey;
`;
