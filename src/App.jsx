import { useState, useCallback } from "react";
import { QUESTIONS } from "./data/questions";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import "./index.css";

// Pages
const PAGE = { LANDING: "landing", QUIZ: "quiz", RESULTS: "results" };

export default function App() {
  const [page, setPage] = useState(PAGE.LANDING);
  const [userInfo, setUserInfo] = useState(null);
  const [answers, setAnswers] = useState([]);

  const handleStart = useCallback((info) => {
    setUserInfo(info);
    setAnswers([]);
    setPage(PAGE.QUIZ);
  }, []);

  const handleFinish = useCallback((finalAnswers) => {
    setAnswers(finalAnswers);
    setPage(PAGE.RESULTS);
  }, []);

  const handleRetry = useCallback(() => {
    setPage(PAGE.LANDING);
  }, []);

  return (
    <>
      {page === PAGE.LANDING && (
        <LandingPage onStart={handleStart} />
      )}
      {page === PAGE.QUIZ && (
        <QuizPage
          questions={QUESTIONS}
          userInfo={userInfo}
          onFinish={handleFinish}
        />
      )}
      {page === PAGE.RESULTS && (
        <ResultsPage
          answers={answers}
          questions={QUESTIONS}
          userInfo={userInfo}
          onRetry={handleRetry}
        />
      )}
    </>
  );
}
