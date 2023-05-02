import PostContent from "../Posts/PostContent";

export default function UserPost() {
  const userPost = {
    id: 1,
    user: "Guardian87",
    title: "My favorite exotic weapon in Destiny 2",
    content:
      "The Ace of Spades hand cannon is my go-to weapon in Destiny 2. Its combination of precision, power, and versatility makes it an essential part of any loadout.",
    spicyRamenCount: 12,
    tags: ["weapons", "exotics", "reviews"],
  };

  return (
    <div>
      <PostContent post={userPost} />
    </div>
  );
}
