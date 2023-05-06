/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";

const tags = [
  { id: 1, name: "Guide" },
  { id: 2, name: "Warlock" },
  { id: 3, name: "Titan" },
  { id: 4, name: "Hunter" },
];

export default function TagSelector({ onSelection }) {
  const [selectedTags, setSelectedTags] = useState([]);

  const handleTagSelect = (event) => {
    const selectedTag = JSON.parse(event.target.value);
    if (selectedTags.length < 5 && !selectedTags.includes(selectedTag.id)) {
      setSelectedTags((prevTags) => [...prevTags, selectedTag.id]);
      onSelection([...selectedTags, selectedTag.id]);
    }
  };

  const handleTagRemove = (tag) => {
    setSelectedTags((prevTags) => prevTags.filter((t) => t !== tag));
    onSelection(selectedTags.filter((t) => t !== tag));
  };

  return (
    <div>
      <div className="flex flex-wrap items-center mb-2">
        {selectedTags.map((tag) => (
          <div
            key={tag}
            className="bg-gray-200 rounded-full py-1 px-3 m-1 text-sm font-semibold text-gray-700 flex items-center"
          >
            {tags.find((t) => t.id === tag)?.name}
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
            <option key={tag.id} value={JSON.stringify(tag)}>
              {tag.name}
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
