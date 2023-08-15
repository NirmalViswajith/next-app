'use client'
import { useRouter } from "next/navigation";

// Import useEffect and useState


const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

export default function Developer({params}) {

  const developer = details.find((dev) => dev.id === parseInt(params.developerID));
  console.log(developer);
  return (
    <div>
      <h1>{developer.name}</h1>
      <h1>{developer.role}</h1>
     
    </div>
  );
}
