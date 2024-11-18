
"use client";
import { useEffect, useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

function CountdownTimer() {
  // ------------------------variables--------------------------

const [duration, SetDuration] = useState<number | string>();
let [timeLeft, SetTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState<boolean>(false);
  const timer = useRef<any>(null);

  // ------------Time format --------------
   const timeFormat = (time: number): string => {
   const minutes = Math.floor(time / 60);
  const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  //------------Set Button---------------
  const setBtn = () => {
    if (typeof duration == "number" && duration > 0) {
      SetTimeLeft(timeLeft = duration);
    }
  };

  //-----------Start Button-------------
  const startBtn = () => {
    setIsActive(true);
  };

  useEffect(() => {
    if (isActive == true) {
      timer.current = setInterval(() => {
        if (timeLeft > 0) {
          SetTimeLeft(timeLeft = timeLeft - 1);
        } else {
          clearInterval(timer.current!);
        }
      }, 1000);
    } else {
      clearInterval(timer.current!);
    }
  }, [isActive]);

  //-----------Pause Button-------------
  const pauseBtn = () => {
    setIsActive(false);
  };

  //----------- Reset Button------------
  const resetBtn = () => {
    setIsActive(false);
    SetTimeLeft(0);
    SetDuration("");
  };

  return (
    <>
      <div className="h-[400px] w-2/3 py-8 sm:w-[600px] p-4 lg:w-[600px] bg-[lightpink] border-[2px] box-shadow-[0 0 10px 8px rgba(0, 0, 0, 0.5)] border-radius-[10px] rounded-[16px] text-black flex justify-center items-center flex-col p-4">

        <h1 className="text-[25px] sm:text-[35px] lg:text-[40px] font-[600] text-center">Countdown Timer</h1>

        <div className="h-[60px] w-full sm:w-[390px] lg:w-[500px] flex gap-[18px] mt-[10px] flex-col sm:flex-row items-center">
          <Input
            className="w-full sm:w-[300px] lg:w-[400px] text-[16px] py-2"
            placeholder="Enter duration in seconds"
            type="number"
            onChange={(e) => { SetDuration(Number(e.target.value)) }}
            value={duration}
          />
          <Button onClick={() => { setBtn() }}>Set</Button>
        </div>

        <div className="text-[50px] mt-8  sm:text-[70px] m-[10px] lg:text-[105px] fontFamily-['digital-7', sans-serif] font-[600] font-[400] mt-[20px]">
          {timeFormat(timeLeft)}
        </div>

        <div className="flex gap-[15px] sm:gap-[30px] m-[5px] flex-col sm:flex-row">
          <Button onClick={() => { startBtn() }}>Start</Button>
          <Button onClick={() => { pauseBtn() }}>Pause</Button>
          <Button onClick={() => { resetBtn() }}>Reset</Button>
        </div>

      </div>
    </>
  );
}

export default CountdownTimer;
