import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import htmlLogo from "@/components/assets/htmlLogo.png";

export default function Modal({
  setIsModalOpen,
  isOpen,
  onClose,
  rank,
  percentile,
  correctAns,
  setRank,
  setPercentile,
  setCorrectAns,
}) {
  if (!isOpen) return null;

  const [tempRank, setTempRank] = useState(rank);
  const [tempPercentile, setTempPercentile] = useState(percentile);
  const [tempCorrectAns, setTempCorrectAns] = useState(correctAns);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let newErrors = {};

    if (!tempRank) {
      newErrors.rank = "required | should be a number";
    }

    if (!tempPercentile) {
      newErrors.percentile = "required | percentile 0-100";
    } else if (tempPercentile < 0 || tempPercentile > 100) {
      newErrors.percentile = "percentile 0-100";
    }

    if (!tempCorrectAns) {
      newErrors.correctAns = "required";
    } else if (tempCorrectAns < 0 || tempCorrectAns > 15) {
      newErrors.correctAns = "score 0-15";
    }

    setErrors(newErrors);
  }, [tempRank, tempPercentile, tempCorrectAns]);

  const handleRankChange = (e) => {
    setTempRank(e.target.value);
  };

  const handlePercentileChange = (e) => {
    setTempPercentile(e.target.value);
  };

  const handleScoreChange = (e) => {
    setTempCorrectAns(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      setRank(tempRank);
      setPercentile(tempPercentile);
      setCorrectAns(tempCorrectAns);
      setIsModalOpen(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full relative transition-all duration-200">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold mb-6">Update scores</h2>
          <div>
            <Image src={htmlLogo} width={30} height={30} />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6 flex">
            <label
              htmlFor="rank"
              className="flex items-center w-3/4 mb-2 text-lg font-medium"
            >
              <div className="w-6 h-6 mr-3 rounded-full items-center justify-center flex bg-indigo-900">
                <span className="text-white text-sm">1</span>
              </div>
              Update your &nbsp; <span className="font-bold">Rank</span>
            </label>
            <div className="flex flex-col w-1/4">
              {" "}
              <input
                type="number"
                id="rank"
                name="rank"
                className={`border p-2 w-full rounded ${
                  errors.rank ? "border-red-500" : "border-indigo-400"
                } outline-none`}
                value={tempRank}
                onChange={handleRankChange}
                min="0"
              />
              {errors.rank && (
                <span className="text-red-500 text-xs">{errors.rank}</span>
              )}
            </div>
          </div>

          <div className="mb-6 flex">
            <label
              htmlFor="percentile"
              className="flex items-center w-3/4 mb-2 text-lg font-medium"
            >
              <div className="w-6 h-6 mr-3 rounded-full items-center justify-center flex bg-indigo-900">
                <span className="text-white text-sm">2</span>
              </div>
              Update your &nbsp; <span className="font-bold">Percentile</span>
            </label>
            <div className="flex flex-col w-1/4">
              <input
                type="number"
                id="percentile"
                name="percentile"
                className={`border p-2 w-full rounded ${
                  errors.percentile ? "border-red-500" : "border-indigo-400"
                } outline-none`}
                value={tempPercentile}
                onChange={handlePercentileChange}
                min="0"
                max="100"
              />
              {errors.percentile && (
                <span className="text-red-500 text-xs">
                  {errors.percentile}
                </span>
              )}
            </div>
          </div>

          <div className="mb-6 flex">
            <label
              htmlFor="score"
              className="flex items-center w-3/4 mb-2 text-lg font-medium"
            >
              <div className="w-6 h-6 mr-3 rounded-full items-center justify-center flex bg-indigo-900">
                <span className="text-white text-sm">3</span>
              </div>
              Update your &nbsp;{" "}
              <span className="font-bold">Current Score (out of 15)</span>
            </label>
            <div className="flex flex-col  w-1/4">
              <input
                type="number"
                id="score"
                name="score"
                className={`border p-2 w-full rounded ${
                  errors.correctAns ? "border-red-500" : "border-indigo-400"
                } outline-none`}
                value={tempCorrectAns}
                onChange={handleScoreChange}
                min="0"
                max="15"
              />
              {errors.correctAns && (
                <span className="text-red-500 text-xs">
                  {errors.correctAns}
                </span>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-white border-indigo-900 border font-bold text-indigo-900 px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              cancel
            </button>
            <button
              type="submit"
              className="bg-indigo-900 flex font-bold gap-4 place-content-baseline items-center text-white px-10 py-2 rounded-lg hover:bg-indigo-800"
            >
              save{" "}
              <span className="font-thin">
                <FaArrowRight />
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
