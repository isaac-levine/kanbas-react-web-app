import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";

function Assignment4() {
  return (
    <div>
      <h1>Assignment 4</h1>
      <Add a={1} b={2} />
      <ClickEvent />
      <PassingDataOnEvent />
      <PassingFunctions />
    </div>
  );
}

export default Assignment4;
