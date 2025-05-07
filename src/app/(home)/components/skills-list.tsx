const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
];

const SkillsList = () => {
  return (
    <ul>
      {skills.map((skill) => (
        <li key={skill} className="flex items-center gap-2">
          <span className="h-2 w-2 bg-lime-300"></span>
          <span className="text-[clamp(1rem,1.5vw,1.25rem)] text-black">
            {skill}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillsList;
