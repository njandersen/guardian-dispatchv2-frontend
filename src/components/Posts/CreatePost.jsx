import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import TagSelector from "../Tags.jsx/TagSelector";

export default function CreatePost() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [selectedTags, setSelectedTags] = useState([]);
  const editorRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: EditorState.createEmpty(),
      published: false,
    },
  });

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const handleTagSelection = (tags) => {
    setSelectedTags(tags);
  };

  const onSubmit = async (data) => {
    if (isValid) {
      data.tagId = selectedTags;
      data.content = JSON.parse(
        JSON.stringify(convertToRaw(editorState.getCurrentContent()))
      )
        .blocks.map((block) => (!block.text.trim() && "\n") || block.text)
        .join("\n");

      data.authorId = 1;
      const response = await fetch(
        "http://localhost:3000/guardian-dispatch/posts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log("Post created successfully");
      // Reset form state on successful submission
      setEditorState(EditorState.createEmpty());
      setSelectedTags([]);
      reset({
        title: "",
        published: false,
      });
    } else {
      console.log(errors);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="title">
          Title
        </label>
        <input
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.title ? "border-red-500" : ""
          }`}
          id="title"
          type="text"
          placeholder="Title"
          {...register("title", {
            required: true,
            minLength: 3,
          })}
        />
        {errors.title && (
          <p className="text-red-500 text-xs italic">
            {errors.title.type === "required"
              ? "Title is required"
              : "Title must be at least 3 characters"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="content">
          Content
        </label>

        <Editor
          editorState={editorState}
          onEditorStateChange={onEditorStateChange}
          ref={(editor) => (editorRef.current = editor)}
          editorClassName="editor-class"
        />

        {errors.content && (
          <p className="text-red-500 text-xs italic">
            {errors.content.type === "required"
              ? "Content is required"
              : "Content must be at least 10 characters"}
          </p>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-2">
          <input
            className="mr-2 leading-tight"
            type="checkbox"
            {...register("published")}
          />
          <span className="text-sm">Published</span>
        </label>
        <TagSelector onSelection={handleTagSelection} />
      </div>
      <div className="flex items-center justify-between">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
            !isValid || !isDirty ? "opacity-50 cursor-not-allowed" : ""
          }`}
          type="submit"
          disabled={!isValid || !isDirty}
        >
          Save
        </button>
      </div>
    </form>
  );
}
