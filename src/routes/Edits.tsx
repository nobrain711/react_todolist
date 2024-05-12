import { useParams } from "react-router-dom";
import { Edit } from "../components/edit/Edit";

export const Edits = () => {
  const { id } = useParams();
  const parsedId = id ? parseInt(id, 10) : 0;

  return (
    <>
      <Edit id={parsedId} />
    </>
  );
};
