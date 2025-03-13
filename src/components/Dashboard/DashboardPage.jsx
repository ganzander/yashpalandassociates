"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import AdvocateCard from "./AdvocateCard";

export default function DashboardPage() {
  const [advocates, setAdvocates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAdvocates() {
      try {
        setLoading(true);
        const response = await axios.get("/api/advocates");
        setAdvocates(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching advocates:", error);
      }
    }

    fetchAdvocates();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">All Advocates</h2>
      {advocates.length === 0 ? (
        <p>No advocates found. Add some advocates to get started.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
          {advocates.map((advocate) => (
            <AdvocateCard key={advocate._id} advocate={advocate} />
          ))}
        </div>
      )}
    </div>
  );
}
