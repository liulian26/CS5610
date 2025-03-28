import { useParams } from "react-router";

export default function TaskDetails() {
  const { taskId } = useParams();
  return <p>TaskDetails of task {taskId}</p>;
}
