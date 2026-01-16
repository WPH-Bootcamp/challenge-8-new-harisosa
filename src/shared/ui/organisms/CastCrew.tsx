import React from "react";
import { PersonCard } from "../molecules/PersonCard";

export type PersonItem = {
  id: string;
  name: string;
  role: string;
  photoUrl?: string;
};

type Props = {
  title?: string;
  people: PersonItem[];
};

export const CastCrewSection: React.FC<Props> = ({ title = "Cast & Crew", people }) => {
  return (
    <section className="mt-6">
      <h2 className="m-0 text-4xl font-bold text-white">{title}</h2>

      <div className="mt-4 grid max-w-245 grid-cols-3 gap-x-4.5 gap-y-5.5 max-[980px]:grid-cols-2">
        {people.map((p) => (
          <PersonCard key={p.id} name={p.name} role={p.role} photoUrl={p.photoUrl} />
        ))}
      </div>
    </section>
  );
};
