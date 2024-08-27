/* eslint-disable react/jsx-key */
import { Router } from "next/router";
import { useEffect, useState } from "react";
import { api } from "~/trpc/react";

export function MovieDetailsComment({ userId, movieId }) {
  const comments = api.movie.getMovieComment.useQuery({ movieId: movieId });
  const [comment, setComment] = useState("");
  const [parrent, setParrent] = useState("");
  const [parrentName, setParrentName] = useState("");
  const [isReply, setIsReply] = useState(false);

  const handleComment = api.user.createComment.useMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isReply) {
      handleComment.mutate({
        movieId: movieId,
        userId: userId,
        comment: comment,
        parrent: parrent,
      });
    } else {
      handleComment.mutate({
        movieId: movieId,
        userId: userId,
        comment: comment,
      });
    }

    // Reset the form and states after submitting the comment
    setComment("");
    setIsReply(false);
    setParrent("");
    setParrentName("");
  };

  return (
    <div className="py-8 antialiased">
      <div className="mx-auto max-w-full px-4">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-900 lg:text-2xl">
            Discussion
          </h2>
        </div>
        <div className="m-4 max-w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
          {comments.data?.list.map((data) => {
            return (
              <>
                <div className="flex items-center border-b border-gray-200 p-4">
                  <img
                    src={data.main.userAvatar}
                    alt="Avatar"
                    className="mr-4 h-12 w-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">
                      {data.main.userName}
                    </h2>
                  </div>
                  <button
                    className="ml-7"
                    onClick={() => [
                      setParrentName(data.main.userName),
                      setParrent(data.main.commentId),
                      setIsReply(true),
                    ]}
                  >
                    reply
                  </button>
                </div>
                <div className="p-4">
                  <p className="m-2 text-gray-700">{data.main.comment}</p>
                  <div className="m-4 scale-95 items-center border-l border-gray-200 p-4">
                    {data.reply.map((rep) => {
                      return (
                        <div className="my-4">
                          <div className="flex">
                            <img
                              src={rep.userAvatar}
                              alt="Avatar"
                              className="mr-4 h-12 w-12 rounded-full"
                            />
                            <div>
                              <h2 className="my-2 text-lg font-semibold">
                                {rep.userName}
                              </h2>
                            </div>
                          </div>
                          <p className="m-2 text-gray-700">{rep.comment}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <form className="mb-7" onSubmit={handleSubmit}>
          <div className="mb-4 rounded-lg rounded-t-lg border border-gray-200 bg-white px-4 py-2">
            {isReply && <p>Replying to: {parrentName}</p>}
            <textarea
              id="comment"
              className="w-full border-0 px-0 text-sm text-gray-900 focus:outline-none focus:ring-0"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => {
              setIsReply(false);
            }}
            className="inline-flex items-center justify-center rounded-lg bg-[#F5F5F5] px-4 py-2.5 text-center text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow hover:bg-red-300"
          >
            clear reply
          </button>
          <button
            type="submit"
            className="ml-5 inline-flex items-center justify-center rounded-lg bg-[#F5F5F5] px-4 py-2.5 text-center text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow hover:bg-gray-50"
          >
            Post comment
          </button>
        </form>
      </div>
    </div>
  );
}
