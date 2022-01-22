import React from "react";
import { ACTIONS } from "./App";

export default function DigitButton({ digit, dispatch }) {
  return (
    <button
      className="button"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  );
}
