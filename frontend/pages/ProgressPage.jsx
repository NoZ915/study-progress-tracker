import { Container, Loader, SimpleGrid } from "@mantine/core";
import { useGetAllUserMaterialsByUserId } from "../hooks/userMaterials/useGetAllUserMaterialsByUserId";
import { jwtDecode } from "jwt-decode";
import UserMaterialCard from "../components/UserMaterialCard.jsx";


function ProgressPage() {
  let jwt = localStorage.getItem("jwt");
  jwt = jwtDecode(jwt);
  const { data: userMaterials, isLoading } = useGetAllUserMaterialsByUserId(jwt.user_id);

  return (
    <Container>
      {!isLoading ? (
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} style={{ justifyItems: "center" }}>
          {userMaterials.map((userMaterial) => {
            return <UserMaterialCard key={userMaterial.user_material_id} userMaterial={userMaterial} />
          })}
        </SimpleGrid>
      ) : (
        <Loader size="lg" variant="bars" />
      )}
    </Container>
  )
}

export default ProgressPage;