import React from "react";
import { ACTIONS } from "./App";

export default function DigitButton({ operation, dispatch, className }) {
  return (
    <button
      className="button operations"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
}
