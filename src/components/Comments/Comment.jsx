/* eslint-disable react/prop-types */
const Comment = ({ author, content, date }) => {
  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <div className="flex items-center mb-2">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-8 h-8 rounded-full mr-2"
        />
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 ml-2">{date}</p>
      </div>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Comment;
