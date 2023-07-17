import { useAuth } from "../context/AuthContext";
import { Card } from "../components/ui";

function HomePage() {
  const data = useAuth();
  console.log(data);

  return <div>

    <Card>
      <h1 className="text-3xl font-bold my-4">Home Page</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium hic necessitatibus laborum aperiam repellendus, id facilis vero ea dignissimos, qui omnis provident doloremque. Eius cumque commodi doloribus! Illum libero neque mollitia rem, blanditiis odio minima quos fugiat nesciunt possimus reprehenderit?</p>
    </Card>

  </div>;
}

export default HomePage;
