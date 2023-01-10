import React from "react";
import Heading from "./Heading";
import DictionaryCard from "./DictionaryCard";
import emojipedia from "../emojipedia";

function createCard(emojipedia) {
  return (
    <DictionaryCard
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      emojiName={emojipedia.name}
      emojiMeaning={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <Heading />
      <dl className="dictionary">{emojipedia.map(createCard)}</dl>
    </div>
  );
}

export default App;
