import axios from "axios"
import { useState, useEffect } from "react";
const ViewMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMaterials = async () => {
      try {
        console.log("before get statement");
        const response = await axios.get('http://localhost:8080/get-files');
        console.log("after get statement");
        setMaterials(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchMaterials();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>All Materials</h1>
      <div>
        {materials.length > 0 ? (
          
          materials.map((material, index) => (
            <div key={index}>
              <h2>{material.fileId}</h2>
              <a href={material.fileLink} target="_blank" rel="noopener noreferrer">
                {material.fileLink}
              </a>
            </div>
          ))
        ) : (
          <p>No materials uploaded yet.</p>
        )}
      </div>
    </div>
  )
}

export default ViewMaterials