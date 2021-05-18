import "./App.scss";
import { ProfileCard } from "./components/ProfileCard";

const profileTechs = [
  {
    id: 1,
    name: "#AEM/CQ5",
  },
  { id: 2, name: "#Drupal" },
  { id: 3, name: "#Magento" },
  { id: 4, name: "#UXDesign" },
];

function App() {
  return (
    <div className="appContainer">
      <ProfileCard profileTechs={profileTechs} />
    </div>
  );
}

export default App;
