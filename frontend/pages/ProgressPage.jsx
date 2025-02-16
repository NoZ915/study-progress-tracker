import { Card, Container, Loader, SimpleGrid } from "@mantine/core";
import { useGetAllUserMaterialsByUserId } from "../hooks/userMaterials/useGetAllUserMaterialsByUserId.js";
import { jwtDecode } from "jwt-decode";
import UserMaterialCard from "../components/UserMaterialCard.jsx";


function ProgressPage() {
  let jwt = localStorage.getItem("jwt");
  jwt = jwtDecode(jwt);
  const { data: userMaterials, isLoading } = useGetAllUserMaterialsByUserId(jwt.user_id);

  return (
    <Container>
      {!isLoading ? (
        <SimpleGrid cols={{ base: 1, sm: 2 }} style={{ justifyItems: "center" }}>
          {userMaterials.map((u) => {
            return <UserMaterialCard key={u.userMaterial.user_material_id} userMaterial={u} isLoading={isLoading} />
          })}
        </SimpleGrid>
      ) : (
        <Loader size="lg" variant="bars" />
      )}
    </Container>
  )
}

export default ProgressPage;