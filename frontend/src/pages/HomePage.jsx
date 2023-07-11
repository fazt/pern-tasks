import { useAuth} from "../context/AuthContext";

function HomePage() {
  const data = useAuth()
  console.log(data);

  return <div>HomePage</div>;
}

export default HomePage;
