import { AddIcon } from "@/assets/icon/add-icon";
import React from "react";
import { Button } from "./button";
import { RemoceIcon } from "@/assets/icon/remoce-icon";
interface Props {
  onIncrease: () => void;
  onDecrease: () => void;
  qty: number;
}
const QtyBtn = (props: Props) => {
  return (
    <div className="flex md:gap-8 gap-3 justify-center items-center">
      <button className="" onClick={props.onDecrease}>
        {props.qty === 1 ? (
          <Button
            variant="outline"
            className={
              "bg-[#F6F8FA] rounded-full md:w-[36px] md:h-[36px]  w-6 h-6 flex items-center justify-center"
            }
          >
            <RemoceIcon />
          </Button>
        ) : (
          <Button
            variant="outline"
            className={
              "bg-[#F6F8FA] rounded-full md:w-[36px] md:h-[36px]  w-6 h-6 flex items-center justify-center"
            }
          >
            <RemoceIcon />
          </Button>
        )}
      </button>
      <p>{props.qty}</p>
      <Button
        variant="primary"
        className={"rounded-full md:w-[36px] md:h-[36px]  w-6 h-6 flex items-center justify-center"}
        onClick={props.onIncrease}
      >
        <AddIcon />
      </Button>
    </div>
  );
};

export default QtyBtn;
