import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useVideoList = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      // databse related wors
      const db = getDatabase();
      const videoRef = ref(db, "videos");
      const videoQuery = query(videoRef, orderByKey());
      try {
        setError(false);
        setLoading(true);
        // request firebase database
        const shapshot = await get(videoQuery);
        setLoading(false);
        if (shapshot.exists()) {
          setVideos((prevVideos) => {
            return [...prevVideos, ...object.values(shapshot.val())];
          });
        } else {
        }
      } catch (err) {
        console.log(err);
      }
    }

    fetchVideos();
  }, []);

  return {
    loading,
    error,
    videos,
  };
};

export default useVideoList;
