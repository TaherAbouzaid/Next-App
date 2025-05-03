import { posts } from "./data";
export async function GET() {
  return Response.json(posts)
}
export async function POST(req) {
  const post = await req.json();
  const newPost = {
    id: posts.length + 1,
    title: post.title,
  }
  posts.push(newPost);
  return new Response(JSON.stringify(newPost));
}
export async function DELETE(req) {
  const {id} = await req.json();
  const index = posts.findIndex(post => post.id = id)
  if (index !== -1)
  {
    posts.splice(index, 1);
    return Response.json({message: "post deleted "})
  }
  return Response.json({message: "post not found"}, {status:404})
}
export async function PUT(req) {
  const { id, title } = await req.json();
  const post = posts.find(post => post.id === id);
  if (post) {
    post.title = title;
    return new Response(JSON.stringify(post));
  }
  return Response.json({ message: "post not found" }, { status: 404 });
}