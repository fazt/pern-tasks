import { Card, Button } from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();

  return (
    <Card key={task.id} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("¿Estás seguro de eliminar esta tarea?")) {
              deleteTask(task.id);
            }
          }}
        >
          <PiTrashSimpleLight className="text-white" />
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default TaskCard;
