import ButtonDocs from '../docs/ButtonDocs'

// import { useLoaderData } from "react-router-dom";

export async function loader() {
  // await new Promise((r) => setTimeout(r, 500));
  return 'I came from the About.tsx loader function!'
}

export function Component() {
  // let data = useLoaderData() as string;

  return <ButtonDocs />
}

Component.displayName = 'Button'
