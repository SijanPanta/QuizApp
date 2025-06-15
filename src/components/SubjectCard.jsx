"use client";
import ClickSpark from "@/Shinytext";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SubjectCard({ subject }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/quiz/${subject.name.toLowerCase()}`);
  };

  return (
    <ClickSpark
      sparkColor="#000000"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div
        onClick={handleClick}
        className="group relative border rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105"
      >
        <div className="overflow-hidden">
          <Image
            src={subject.image}
            alt={`${subject.name} image`}
            width={400}
            height={300}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-4 bg-gradient-to-b from-white to-gray-50">
          <h2 className="text-2xl font-bold text-center text-black group-hover:text-blue-600 transition-colors duration-300">
            {subject.name}
          </h2>

          <p className="text-center text-gray-700 text-lg mt-2">
            {subject.questions.length} Questions
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
      </div>
    </ClickSpark>
  );
}
