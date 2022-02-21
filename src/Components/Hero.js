import React from "react";

export default function Hero(props) {
  return (
    <main className="font-Inter">
      <div className="flex flex-row">
        <img
          src={props.imageUrl}
          alt="location"
          className="object-cover w-[125px] h-[168px] rounded-[5px]"
        />
        <div className="ml-5">
          <div className="flex flex-row items-center gap-1">
            <img src="/path.png" className="w-[7px] h-[9px]" />
            <p className="text-sm uppercase">{props.location}</p>
            <a
              href={props.googleMapsUrl}
              className="ml-4 underline text-sm text-gray-400 hover:text-gray-500"
            >
              View on Google Maps
            </a>
          </div>
          <h1 className="text-3xl font-bold mt-1">{props.title}</h1>
          <p className="text-xs mt-4 font-bold">
            {props.startDate} - {props.endDate}
          </p>
          <p className="text-xs mt-1 w-80">{props.description}</p>
        </div>
      </div>
    </main>
  );
}
