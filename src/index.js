import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Comment from "./components/Comment";

const App = () => {
  return (
    <div className="ui container comments">
      <Comment
        image={faker.image.avatar()}
        authorName={faker.internet.userName()}
        postedTime={new Date().toDateString()}
        commentMsg={faker.lorem.sentence()}
      />

      <Comment
        image={faker.image.avatar()}
        authorName={faker.internet.userName()}
        postedTime={new Date().toDateString()}
        commentMsg={faker.lorem.sentence()}
      />

      <Comment
        image={faker.image.avatar()}
        authorName={faker.internet.userName()}
        postedTime={new Date().toDateString()}
        commentMsg={faker.lorem.sentence()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
