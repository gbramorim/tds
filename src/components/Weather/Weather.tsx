import { useParams } from "react-router";

export default function Weather() {
  const id = useParams();

  console.log("params >>", id);

  return <h1>1</h1>;
}
