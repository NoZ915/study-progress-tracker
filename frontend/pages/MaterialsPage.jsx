import { useGetAllMaterials } from "../hooks/materials/useGetAllMaterials.js";

function MaterialsPage() {
    const { data: materials, isLoading } = useGetAllMaterials();
    console.log(materials)
    return (
        <>
            {!isLoading ? (
                <ul>
                    {materials.map(material => {
                        return (<li key={material.material_id}>{material.title}</li>)
                    })}
                </ul>
            ): (
                <div>Loading...</div>
            )}
        </>
    )
}

export default MaterialsPage;