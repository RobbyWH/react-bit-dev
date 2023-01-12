import { Accordion } from "@robbywh/cross-platform.base-ui.react.accordion";
import {Item} from '@robbywh/cross-platform.api.accordion';

function App() {
  const colorsList = [
    ['Red', '01'],
    ['Blue', '02'],
    ['Green', '03'],
  ].map(color => new Item(color[0], color[1]).toObject());

  return (
    <Accordion elementList={colorsList} />
  );
}

export default App;