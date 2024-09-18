import TextExpander from "./component/TextExpander";

function App() {
  return (
    <>
      {/* <h1>hello</h1> */}
      <TextExpander>
        Space is vast, with trillions of stars and galaxies. It's a place of
        mystery and wonder, where we can send probes to explore planets and
        asteroids. Space holds endless possibilities for discovery and
        adventure.
      </TextExpander>
      <TextExpander
        collapsedWords={20}
        expandButtonText="Show text"
        collapsedButtonText="collapse text"
        buttonColor="text-orange-500"
      >
        In space, gravity is weak, allowing astronauts to float in microgravity.
        The vacuum of space means no air to breathe or sound to carry. But there
        are dangers like radiation and debris.
      </TextExpander>
      {" "}
      <TextExpander className="border-2 border-slate-200 bg-slate-300 text-justify p-3">
        Exploring space requires advanced technology like rockets, satellites,
        and telescopes. Humans have ventured to the moon and beyond, pushing the
        boundaries of our knowledge. Space is still largely uncharted territory,
        waiting for us to unravel its secrets.
      </TextExpander>
    </>
  );
}

export default App;
