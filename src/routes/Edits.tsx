import { useParams } from "react-router-dom";
import { Edit } from "../components/todo/edit/Edit";

export const Edits = () => {
  const { id } = useParams();
  const parsedId: number = id ? parseInt(id, 10) : 0;

  return (
    <>
      <Edit id={parsedId} />
    </>
  );
};
