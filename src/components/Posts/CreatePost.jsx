import { useForm } from "react-hook-form";

import TagSelector from "../Tags.jsx/TagSelector";

export default function CreatePost() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      content: "",
      published: false,
    },
  });

  const onSubmit = (data) => {
    if (isValid) {
      console.log(data);
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
        <textarea
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
            errors.content ? "border-red-500" : ""
          }`}
          id="content"
          placeholder="Content"
          {...register("content", {
            required: true,
            minLength: 10,
          })}
        ></textarea>
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
        <TagSelector />
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
