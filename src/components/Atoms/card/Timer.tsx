import { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../Button";
import { Label } from "../Lbel";

// タイマーの長さ
const TIMER_LENGTH = { work: 1 * 60, break: 5 * 60 } as const;
type TIMER_LENGTH = typeof TIMER_LENGTH[keyof typeof TIMER_LENGTH];

// タイマーモード
type TimerMode = "work" | "break";

interface State {
  timeLeft: number;
  isTimerOn: boolean;
  timerMode: TimerMode;
}

// タイマーのカウントのsetInterbalのID
let timerCountInterbal = 0;

const secondToMMSS = (second: number) => {
  const MM =
    second >= 10 * 60
      ? Math.floor(second / 60).toString()
      : second >= 1 * 60
      ? "0" + Math.floor(second / 60).toString()
      : "00";
  const SS = second % 60 >= 10 ? second % 60 : "0" + (second % 60);
  return MM + ":" + SS;
};

export const Timer = () => {
  const [state, setState] = useState<State>({
    timeLeft: TIMER_LENGTH.work,
    isTimerOn: false,
    timerMode: "work",
  });

  useEffect(() => {
    return () => {
      clearInterval(timerCountInterbal);
    };
  }, []);

  const onButtonClick = () => {
    setState((state) => {
      clearInterval(timerCountInterbal);
      if (state.isTimerOn) {
        return {
          ...state,
          timerLeft: TIMER_LENGTH.work,
          timerMode: "work",
          isTimerOn: false,
        };
      }
      timerCountInterbal = window.setInterval(() => {
        timerCount();
      }, 1000);
      return { ...state, isTimerOn: true };
    });
  };

  const timerCount = () => {
    setState((state) => {
      if (state.timeLeft <= 0) {
        state = toggleTimerMode(state);
      }
      return { ...state, timeLeft: state.timeLeft - 1 };
    });
  };

  const toggleTimerMode = (state: State): State => {
    const timeLeft =
      state.timerMode === "work" ? TIMER_LENGTH.break : TIMER_LENGTH.work;
    const timerMode = state.timerMode === "work" ? "break" : "work";
    return {
      ...state,
      timeLeft: timeLeft,
      timerMode: timerMode,
    };
  };

  return (
    <>
      <SContainer>
        <Label>Pomodoro Timer</Label>
        <SP>{secondToMMSS(state.timeLeft)}</SP>
        <Button onClick={onButtonClick}>
          {state.isTimerOn ? "STOP" : "START"}
        </Button>
        <SP>{state.timerMode === "work" ? "WORK" : "BREAK"}</SP>
      </SContainer>
    </>
  );
};
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const SP = styled.p`
  color: grey;
  font-weight: bold;
  font-size: 20px;
`;
