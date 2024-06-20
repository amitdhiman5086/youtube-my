import React from "react";
import Comment from "./Comment";

const commentData = [
  {
    name: "Amit Kumar",
    text: "This is 0 Level",
    replies: [
      {
        name: "Amit Kumar",
        text: "This is 1 Level",
        replies: [],
      },
      {
        name: "Amit Kumar",
        text: "This is 1 Level",
        replies: [
          {
            name: "Amit Kumar",
            text: "This is 2 Level",
            replies: [],
          },
          {
            name: "Amit Kumar",
            text: "This is 2 Level",
            replies: [
              {
                name: "Amit Kumar",
                text: "This is 3 Level",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Amit Kumar",
    text: "This is 0 Level",
    replies: [ {
        name: "Amit Kumar",
        text: "This is 1 Level",
        replies: [
          {
            name: "Amit Kumar",
            text: "This is 2 Level",
            replies: [ {
                name: "Amit Kumar",
                text: "This is 1 Level",
                replies: [
                  {
                    name: "Amit Kumar",
                    text: "This is 2 Level",
                    replies: [],
                  },
                  {
                    name: "Amit Kumar",
                    text: "This is 2 Level",
                    replies: [
                      {
                        name: "Amit Kumar",
                        text: "This is 3 Level",
                        replies: [],
                      },
                    ],
                  },
                ],
              },],
          },
          {
            name: "Amit Kumar",
            text: "This is 2 Level",
            replies: [
              {
                name: "Amit Kumar",
                text: "This is 3 Level",
                replies: [],
              },
            ],
          },
        ],
      },],
  },
  {
    name: "Amit Kumar",
    text: "This is 0 Level",
    replies: [],
  },
  {
    name: "Amit Kumar",
    text: "This is 0 Level",
    replies: [],
  },
  {
    name: "Amit Kumar",
    text: "This is 0 Level",
    replies: [],
  },
  {
    name: "Amit Kumar",
    text: "This is 0 Level",
    replies: [],
  },
];

const CommentList = ({ comment }) => {
  return comment.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-5 border border-black">
        <CommentList key={comment+comment.replies}  comment={comment.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="font-bold text-3xl">Comments : </h1>
      <CommentList comment={commentData} />
    </div>
  );
};

export default CommentContainer;
