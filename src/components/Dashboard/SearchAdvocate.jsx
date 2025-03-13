"use client";
import { useState, useEffect } from "react";
import AdvocateCard from "@/components/Dashboard/AdvocateCard";
import axios from "axios";

export default function SearchAdvocate() {
  const [advocates, setAdvocates] = useState([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState([]);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    name: "",
    region: "",
    experience: "",
  });

  useEffect(() => {
    async function fetchAdvocates() {
      try {
        const response = await axios.get("/api/advocates");
        setAdvocates(response.data.data);
        setFilteredAdvocates(response.data.data);
      } catch (error) {
        console.error("Error fetching advocates:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAdvocates();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (currentFilters) => {
    let results = [...advocates];

    // Filter by name
    if (currentFilters.name) {
      results = results.filter((advocate) =>
        advocate.name.toLowerCase().includes(currentFilters.name.toLowerCase())
      );
    }

    // Filter by region
    if (currentFilters.region) {
      results = results.filter((advocate) =>
        advocate.region_of_practice
          .toLowerCase()
          .includes(currentFilters.region.toLowerCase())
      );
    }

    // Filter by experience
    if (currentFilters.experience) {
      const expValue = parseInt(currentFilters.experience);
      if (!isNaN(expValue)) {
        results = results.filter((advocate) => advocate.experience >= expValue);
      }
    }

    setFilteredAdvocates(results);
  };

  const resetFilters = () => {
    setFilters({
      name: "",
      region: "",
      experience: "",
    });
    setFilteredAdvocates(advocates);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">Loading...</div>
    );
  }

  const regions = [...new Set(advocates.map((adv) => adv.region_of_practice))];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 md:mb-6">Search Advocates</h2>

      <div className="bg-white rounded-lg shadow p-4 md:p-6 mb-4 md:mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Advocate Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border rounded"
              value={filters.name}
              onChange={handleFilterChange}
              placeholder="Search by name"
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="region">
              Region
            </label>
            <select
              id="region"
              name="region"
              className="w-full p-2 border rounded"
              value={filters.region}
              onChange={handleFilterChange}
            >
              <option value="">All Regions</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-gray-700 mb-2" htmlFor="experience">
              Minimum Experience (years)
            </label>
            <input
              type="number"
              id="experience"
              name="experience"
              className="w-full p-2 border rounded"
              value={filters.experience}
              onChange={handleFilterChange}
              min="0"
              placeholder="Minimum years"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={resetFilters}
            className="bg-black text-white px-4 py-2 rounded hover:bg-black"
          >
            Reset Filters
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Search Results: {filteredAdvocates.length} advocates found
        </h3>

        {filteredAdvocates.length === 0 ? (
          <p>No advocates match your search criteria.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {filteredAdvocates.map((advocate) => (
              <AdvocateCard key={advocate._id} advocate={advocate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
