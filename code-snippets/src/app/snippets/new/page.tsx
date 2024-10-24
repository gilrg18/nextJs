import { db } from "@/db";
import { redirect } from "next/navigation";
export default function SnippetCreatePage() {
  async function createSnippet(formData: FormData) {
    //[Add a new record to our database]
    //This needs to be a server action.
    "use server"; //Special directive specifically used by nextjs to treat this function as a server action

    //Check the user's input and make sure they're valid.
    const title = formData.get("title") as string; //name property on the input html tag
    const code = formData.get("code") as string; //as string because forms might take a file and typescript needs to make sure it is not a file
    //so we assume its a string.

    //Create a new record in the database.
    const snippet = await db.snippet.create({
      data: {
        title, //since keys and values are the same (title: title) we can just leave it as title
        code,
      },
    });
    console.log(snippet);

    //Redirect the user back to the root route.
    redirect("/");
  }

  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          ></input>
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
        {/* http://localhost:3000/snippets/new?title=&code= 
        title & code are the name properties of the html tags input and textarea*/}
      </div>
    </form>
  );
}
