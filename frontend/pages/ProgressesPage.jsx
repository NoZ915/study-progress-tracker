import { Card, Loader } from "@mantine/core";
import { useGetAllUserMaterialsByUserId } from "../hooks/userMaterials/useGetAllUserMaterialsByUserId";
import { jwtDecode } from "jwt-decode";
import UserMaterialCard from "../components/UserMaterialCard.js";


function ProgressesPage(){
    let jwt = localStorage.getItem("jwt");
    jwt = jwtDecode(jwt);
    const { data: userMaterials, isLoading } = useGetAllUserMaterialsByUserId(jwt.user_id);

    return(
        <div>
            {!isLoading  ? (
                <div>
                    {userMaterials.map((userMaterial) => {
                        return(
                            <Card key={userMaterial.user_material_id}>
                                <UserMaterialCard userMaterial={userMaterial}/>
                                {/* 用userMaterial中的material_id取得講義資訊 */}
                            </Card>
                        )
                    })}
                </div>
            ) : (
                <Loader size="lg" variant="bars" />
            )}
        </div>
    )
}

export default ProgressesPage;