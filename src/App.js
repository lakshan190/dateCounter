import React from "react";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function ReloadButton() {
  window.location.reload();
}

function Counter() {
  // step is one day
  const [step, setStep] = useState(1);
  // count is there to multiply the number of days or steps
  const [count, setCount] = useState(0);

  const [date, setDate] = useState(Date.now());

  const msSecondsDay = 24 * 60 * 60 * 1000;

  const currDate = Date.now();

  function increaseStep() {
    setStep((s) => s + 1);
  }

  function decreaseStep() {
    if (step > 1) {
      setStep((s) => s - 1);
    }
  }

  function increaseCount() {
    setCount((c) => c + 1);
    setDate(date + msSecondsDay * step);
  }

  function decreaseCount() {
    setCount((c) => c - 1);
    setDate(date - msSecondsDay * step);
  }

  const dateCompare = date - currDate;
  const daysCount = Math.ceil(dateCompare / (1000 * 3600 * 24));

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const theDate = new Date(date);
  const theDay = theDate.getDay();
  const theDayOfMonth = theDate.getDate();
  const theMonth = theDate.getMonth();
  const theYear = theDate.getFullYear();

  return (
    <>
      <div className="container">
        <div className="inline-container">
          <button onClick={decreaseStep}>-</button>
          <p>Step: {step} </p>
          <button onClick={increaseStep}>+</button>
        </div>
      </div>
      <div className="container">
        <div className="inline-container">
          <button onClick={decreaseCount}>-</button>
          <p>Count: {count}</p>
          <button onClick={increaseCount}>+</button>
        </div>
      </div>

      <p>
        <span>
          {daysCount === 0 && "Today"}
          {daysCount < 0 && `${Math.abs(daysCount)} Days ago from today `}
          {daysCount > 0 && `${Math.abs(daysCount)} Days from today `}
        </span>{" "}
        is{" "}
        {`${daysOfWeek[theDay]} ${months[theMonth]} ${theDayOfMonth} ${theYear}`}
      </p>

      <div>
        <button onClick={ReloadButton}>Reset</button>
      </div>
    </>
  );
}

// {new Date(date).toLocaleDateString()}
