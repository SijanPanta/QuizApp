"use client";
import ClickSpark from "@/Shinytext";
import { useEffect, useState } from "react";
import SubjectCard from "@/components/SubjectCard";

export default function Home() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const response = await fetch("/data/questions.json");
        if (!response.ok) throw new Error("Failed to fetch subjects");

        const data = await response.json();
        setSubjects(data.subjects || []);
        console.log("Fetched subjects:", data);
      } catch (error) {
        console.error("Error fetching subjects:", error);
      }
    };

    fetchSubjects();
  }, []);

  return (
    <ClickSpark
      sparkColor="#000000"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <main className="bg-gray-100  min-h-screen flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-center">
          Welcome to the Quiz App
        </h1>
        <p className="text-lg text-gray-700 mb-10 text-center max-w-xl">
          Select a subject to get started and test your knowledge!
        </p>

        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
          {subjects.length > 0 ? (
            subjects.map((subject) => (
              <SubjectCard key={subject.name} subject={subject} />
            ))
          ) : (
            <p className="text-lg text-gray-500 col-span-full text-center animate-pulse">
              Loading subjects...
            </p>
          )}
        </section>
      </main>
    </ClickSpark>
  );
}
