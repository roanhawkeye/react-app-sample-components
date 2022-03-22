import React from "react";
import ReactDOM from "react-dom";

import CommentDetail from "./CommentDetail";

import { faker } from "@faker-js/faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        avatar={faker.image.avatar()}
        content="Nice blog post!"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        avatar={faker.image.avatar()}
        content="Some nice blog"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yestarday at 5:00PM"
        avatar={faker.image.avatar()}
        content="No comments"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
