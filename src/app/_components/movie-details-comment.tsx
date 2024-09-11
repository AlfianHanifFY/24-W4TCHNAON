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
          <h2 className="text-lg font-bold text-white lg:text-2xl">
            Discussion
          </h2>
        </div>
        <div className="m-4 max-w-full overflow-hidden rounded-lg bg-[#3C3A3A] shadow-md">
          {comments.data?.list.map((data) => {
            return (
              <>
                <div className="flex items-center border-b bg-[#3C3A3A] p-4">
                  <img
                    src={data.main.userAvatar}
                    alt="Avatar"
                    className="mr-4 h-12 w-12 rounded-full"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-white">
                      {data.main.userName}
                    </h2>
                  </div>
                  <button
                    className="ml-7 text-white"
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
                  <p className="m-2 text-white">{data.main.comment}</p>
                  <div className="m-4 scale-95 items-center border-l p-4">
                    {data.reply.map((rep) => {
                      return (
                        <div className="my-4">
                          <div className="flex">
                            <img
                              src={rep.userAvatar}
                              alt="Avatar"
                              className="mr-4 h-9 w-9 rounded-full"
                            />
                            <div>
                              <h2 className="mt-1 text-lg font-semibold text-white">
                                {rep.userName}
                              </h2>
                            </div>
                          </div>
                          <p className="m-2 text-white">{rep.comment}</p>
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
          <div className="mb-4 rounded-lg rounded-t-lg border border-gray-900 bg-[#3C3A3A] px-4 py-2 text-white">
            {isReply && <p>Replying to: {parrentName}</p>}
            <textarea
              id="comment"
              className="w-full border-0 bg-[#3C3A3A] px-0 text-sm text-white placeholder-white focus:outline-none focus:ring-0"
              placeholder="Write a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            ></textarea>
          </div>
          <button
            onClick={() => {
              setIsReply(false);
            }}
            className="inline-flex items-center justify-center rounded-lg bg-[#F7F1F1] px-4 py-2.5 text-center text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow hover:bg-red-300"
          >
            clear reply
          </button>
          <button
            type="submit"
            className="ml-5 inline-flex items-center justify-center rounded-lg bg-[#F7F1F1] px-4 py-2.5 text-center text-xs font-medium text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-shadow hover:bg-green-300"
          >
            Post comment
          </button>
        </form>
      </div>
    </div>
  );
}
