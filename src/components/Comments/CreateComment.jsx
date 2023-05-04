/* eslint-disable react/prop-types */
import { useState } from "react";

export default function CreateComment({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col bg-white p-4 rounded-lg"
    >
      <textarea
        className="block w-full bg-gray-100 border border-gray-300 rounded-lg py-2 px-4 resize-none focus:outline-none focus:bg-white"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center">
          <input type="checkbox" className="mr-2" />
          <label className="text-gray-600">Anonymous</label>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Comment
        </button>
      </div>
    </form>
  );
}
