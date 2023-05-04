import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const tags = [
  "React",
  "Tailwind",
  "JavaScript",
  "HTML",
  "CSS",
  "Web Development",
  "Node.js",
  "Python",
  "Ruby",
  "PHP",
  "TypeScript",
  "Angular",
  "Vue.js",
  "Svelte",
];

export default function TagSelector() {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (event) => {
    const selectedTag = event.target.value;
    if (selectedTags.length < 5 && !selectedTags.includes(selectedTag)) {
      setSelectedTags((prevTags) => [...prevTags, selectedTag]);
    }
  };

  const handleTagRemove = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center mb-2">
        {selectedTags.map((tag) => (
          <div
            key={tag}
            className="bg-gray-200 rounded-full py-1 px-3 m-1 text-sm font-semibold text-gray-700 flex items-center"
          >
            {tag}
            <button
              onClick={() => handleTagRemove(tag)}
              className="ml-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:shadow-outline"
            >
              <FaTimes />
            </button>
          </div>
        ))}
      </div>
      <div className="relative inline-block">
        <select
          onChange={handleTagSelect}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a tag</option>
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <IoMdArrowDropdown />
        </div>
      </div>
    </div>
  );
}
