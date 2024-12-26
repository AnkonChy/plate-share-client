import React from "react";

const YoutubeVdo = () => {
  return (
    <div className="bg-base-200 py-10">
      <div className="w-10/12 mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            <iframe
              className="rounded-md"
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/l-YaJ6lOrzc"
              title=""
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Share a Meal, Save a Life</h1>
            <p className="py-6">
              By sharing your food, you’re giving someone the chance to live.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeVdo;
