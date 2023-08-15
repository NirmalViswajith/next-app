'use client'
import { useParams } from "next/navigation";

const details = [
  { id: 1, name: 'Yash', role: 'Senior Developer' },
  { id: 2, name: 'Vaibhav', role: 'Backend Developer' },
  { id: 3, name: 'Suresh', role: 'Frontend Developer' }
];

export default function Developer() {
  const params = useParams();
  const developer = details.find((dev) => dev.id === parseInt(params.developerID));
  if(!developer) {
    return (
      <h1>Developer not found</h1>
    )
  }
  return (
    <div>
      <h1>{developer.name}</h1>
      <h1>{developer.role}</h1>
     
    </div>
  );
}
