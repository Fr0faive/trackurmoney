import Link from "next/link";
async function getPosts() {
  const res = await fetch("http://localhost:3000/api/posts");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  await new Promise((resolve) => setTimeout(resolve, 3000));
  return res.json();
}

const PostsPage = async () => {
  //   const posts = await getPosts();
  const [posts, users] = await Promise.all([getPosts(), getUsers()]);

  return (
    <div>
      <h1 className="text-4xl">Post Page</h1>
      <h2 className="text-2xl">Users</h2>
      {users.map((user, index) => (
        <p key={index}>{user.name}</p>
      ))}
      <ul className="flex flex-col gap-5">
        {posts.map((post) => (
          <Link href={`/posts/${post.id}`} key={post.id}>
            <li className="bg-gray-100 p-5 cursor-pointer">
              <h4 className="text-xl font-bold">{post.title}</h4>
              <p>{post.description}</p>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PostsPage;
