// Create, Update, and Delete Exams
import { useNavigate } from "react-router-dom";
import Header from "../components/header";

const Admin = () => {
  let navigate = useNavigate();
  const onCreate = async () => {
    navigate("/exam/create");
  };
  return (
    <div className="admin">
      <Header />
      <h2>Admin</h2>
      <button type="button" className="create-button" onClick={onCreate}>
        Create Exam
      </button>
      {/*<button type="button" className="cancel-button" onClick={onCancel}>Cancel</button>*/}
    </div>
  );
};

export default Admin;
