import { useParams } from "react-router-dom";
import { useGetAllSessionsByMaterialId } from "../hooks/sessions/useGetAllSessionsByMaterialId.js";
import { Loader } from "@mantine/core";

function SessionPage() {
    const { materialId } = useParams();
    const { data: sessions, isLoading } = useGetAllSessionsByMaterialId(materialId);

    return (
        <>
            {!isLoading ? (
                <ul>
                    {sessions.map((session) => {
                        return (
                            <li key={session.session_id}>{session.session_name}</li>
                        );
                    })}
                </ul>
            ) : (
                <Loader size="lg" variant="bars" />
            )}
        </>
    )
}

export default SessionPage;