import { useRouter } from "next/router";

export default function () {
  const {
    query: { id },
  } = useRouter();
  return <h1>test: {id}</h1>;
}
