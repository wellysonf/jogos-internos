import Menu from "../components/menu";
import ButtonIcon from "../components/buttonIcon";
import { FaPlus, FaSearch } from "react-icons/fa";


function HomePage() {
  return (
    <>
      <div className="flex flex-col h-screen gap-2 pb-4 md:gap-4 bg_logo_if">
      <Menu />
      {/* <div className="container flex flex-col gap-2 md:gap-4  grow">
        <h2 className="mb-0">Equipes</h2>
        <div className="flex flex-row justify-end">
          <ButtonIcon Icon={<FaPlus />} text="Nova equipe" variant="primary" />
        </div>
        <div className="bg-gray-700/70 grow rounded-xl flex flex-col p-2 gap-2 md:p-4 md:gap-4">
          <div className="flex flex-row bg-white w-full rounded-lg p-2 items-center gap-2">
            <FaSearch />
            <input type="text" name="" id="" className="grow"/>
          </div>
          <div className="flex bg-white w-full rounded-lg p-2 grow">

          </div>
        </div>
      </div> */}
    </div>
    </>
    
  );
}

export default HomePage;