import { Loader, SimpleGrid } from "@mantine/core";
import { useGetAllUserMaterialsByUserId } from "../hooks/userMaterials/useGetAllUserMaterialsByUserId";
import { jwtDecode } from "jwt-decode";
import UserMaterialCard from "../components/UserMaterialCard.jsx";


function ProgressesPage() {
  let jwt = localStorage.getItem("jwt");
  jwt = jwtDecode(jwt);
  const { data: userMaterials, isLoading } = useGetAllUserMaterialsByUserId(jwt.user_id);

  return (
    <div>
      {!isLoading ? (
        <SimpleGrid>
          {userMaterials.map((userMaterial) => {
            return <UserMaterialCard key={userMaterial.user_material_id} material={userMaterial.material} />
          })}
        </SimpleGrid>
      ) : (
        <Loader size="lg" variant="bars" />
      )}
    </div>
  )
}

export default ProgressesPage;