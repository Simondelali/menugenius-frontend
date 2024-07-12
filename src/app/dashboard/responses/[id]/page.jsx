'use client'
import SessionTable from "@/app/ui/user/session-table";
import axiosInstance from "@/app/utils/axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SessionResponsePage() {
  const { id: menuId } = useParams();
  const [sessionData, setSessionData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axiosInstance.get(`/api/sessions/${parseInt(menuId)}`);
        setSessionData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(`Error fetching sessions: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (menuId) {
      fetchMenu();
    } else {
      setLoading(false);
    }
  }, [menuId]);
  
  return <div>
    <SessionTable sessionData={sessionData} />
  </div>;
}
