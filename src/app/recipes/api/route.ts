export async function GET() {
  const res = await fetch("https://dummyjson.com/recipes");
  const data = await res.json();
  return Response.json(data.recipes);
}
