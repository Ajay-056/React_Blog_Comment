import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import Comment from "./components/Comment";
import ApprovalCard from "./components/ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          image={faker.image.avatar()}
          authorName={faker.internet.userName()}
          postedTime={new Date().toDateString()}
          commentMsg={faker.lorem.words()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          image={faker.image.avatar()}
          authorName={faker.internet.userName()}
          postedTime={new Date().toDateString()}
          commentMsg={faker.lorem.words()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <Comment
          image={faker.image.avatar()}
          authorName={faker.internet.userName()}
          postedTime={new Date().toDateString()}
          commentMsg={faker.lorem.words()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
