import LuckyN from "./LuckyN";
import { sum } from "./utils";
import BoxGrid from "./BoxGrid";
import Lucky7 from "./Lucky7";
import Jocs from "./jocs";
import Usernameform from "./username";
import Bettersignup from "./bettersignup";
import Shoppinglistform from "./shoopinglistform";
import Shoppinglist from "./shoppinglist";
// function lessThan4(dice) {
//   return sum(dice) < 4;
// }

// function allSameValue(dice) {
//   return dice.every((v) => v === dice[0]);
// }

function App() {
  return (
    <>
      {/* <BoxGrid /> */}
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      /> */}
      {/* <Lucky7/>
      <Jocs/>
      <Jocs/>
      <Jocs/> */}
      {/* <Usernameform 
      /> */}
      {/* <Bettersignup/> */}
      <Shoppinglistform/>
      <Shoppinglist/> 
    </>
  );
}

export default App;
