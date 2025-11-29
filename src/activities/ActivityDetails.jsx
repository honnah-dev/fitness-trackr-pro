import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { deleteActivity, getActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";





export default function ActivityDetails() {
  const [activity, setActivity] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [error, setError] = useState(null);




  useEffect(() => {
  const syncActivity = async () => {
    const data = await getActivity(id);
    setActivity(data);
  };
  syncActivity();
}, [id]);

const tryDelete = async () => {
  setError(null);
  try {
    await deleteActivity(token, activity.id);
    navigate("/");
  } catch (e) {setError(e.message);
  }
};
if (!activity) return <p>Loading...</p>;




  

   
  return (
    <article>

    <h1>{activity.name}</h1>
    <p>Created by:{activity.creatorName}</p>
    <p>{activity.description}</p>
      {token && <button onClick={tryDelete}>Delete</button>}
      {error && <p role="alert">{error}</p>}

    </article>
  );
}

