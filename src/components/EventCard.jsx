import React from "react";
import { urlFor } from "../../sanity";
import Link from "next/link";
import Image from "next/image";
const EventCard = ({ event }) => {
  return (
    <div className='group cursor-pointer flex flex-col gap-2 w-fit drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out'>
      <div className=' w-full drop-shadow-xl transition-transform duration-200 ease-out'>
        <Image
          src={urlFor(event.mainImage).url()}
          alt={event.title}
          width={300}
          height={500}
        />
      </div>
      <div>
        <Link key={event.slug.current} href={`/events/${event.slug.current}`}>
          <button
            className={`w-full h-10 rounded-sm  text-lg md:text-2xl text-zinc-200 uppercase CaptainFont leading-none
        tracking-wider ${
          event.registrationStatus === "closed"
            ? "bg-rose-600  hover:bg-rose-800"
            : "bg-emerald-600  hover:bg-emerald-800"
        } `}>
            {event.registrationStatus === "closed"
              ? "Registrations Closed"
              : "Register Here"}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
