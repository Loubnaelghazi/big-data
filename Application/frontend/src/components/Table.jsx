import React, { useEffect, useState } from "react";
import { getAllData } from "../api/api";

export default function Table() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const pollingInterval = 5000; // Polling interval in milliseconds

  const fetchAllData = () => {
    getAllData()
      .then((allData) => {
        setData(allData.data);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    fetchAllData();
    const interval = setInterval(fetchAllData, pollingInterval);
    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (direction) => {
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    } else if (direction === "next" && indexOfLastItem < data.length) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="m-5 mt-5">
      <div className="text-5xl text-center m-5 font-semibold"></div>
      <div className="flex flex-rows items-center justify-center gap-20 py-5">
        <div>
          <kbd className="kbd kbd-sm">0</kbd> negative
        </div>
        <div>
          <kbd className="kbd kbd-sm">1</kbd> neutral
        </div>
        <div>
          <kbd className="kbd kbd-sm">2</kbd> positive
        </div>
        <div>
          <kbd className="kbd kbd-sm">3</kbd> irrelevant
        </div>
      </div>
      <div className="join grid grid-cols-2">
        <button
          className="join-item btn btn-outline bg-primary text-base-100 "
          onClick={() => handlePageChange("prev")}
          disabled={currentPage === 1}
        >
          Previous page
        </button>
        <button
          className="join-item btn btn-outline bg-primary text-base-100"
          onClick={() => handlePageChange("next")}
          disabled={indexOfLastItem >= data.length}
        >
          Next
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 my-5">
        {currentItems.length == 0 ? (
          <span className="loading loading-spinner loading-lg" />
        ) : (
          <table className="table table-xs table-pin-rows table-pin-cols shadow-md">
            <thead>
              <tr>
                <th>id</th>
                <th>Entity</th>
                <th>Tweet Content</th>
                <th>Sentiment</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index}>
                  <th>{item.id}</th>
                  <td>{item.topic}</td>
                  <td>{item.content}</td>
                  <td className="text-center">{item.prediction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
