import { useParams } from "react-router-dom";

export default function TaskDetails() {
  const { taskId } = useParams();
  return <p>TaskDetails of task {taskId}</p>;
}
