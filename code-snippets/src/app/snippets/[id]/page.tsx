import { notFound } from "next/navigation";
import { db } from "@/db";

//interface to describe the structure of our props
interface SnippetShowPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {

  await new Promise ((r)=> setTimeout(r, 2000)); //Artificial delay to test loading component
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>{snippet.title}</div>;
}
