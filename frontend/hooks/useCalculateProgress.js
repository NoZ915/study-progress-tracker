import { useGetAllSessionsByMaterialId } from "./sessions/useGetAllSessionsByMaterialId.js";
import { useGetAllProgressByUserMaterialId } from "./progress/useGetAllProgressByUserMaterialId.js";

function useCalculateProgress(material_id, user_material_id) {
    const { data: sessions = [], isLoading } = useGetAllSessionsByMaterialId(material_id);
    const { data: progress = [] } = useGetAllProgressByUserMaterialId(user_material_id);

    const sessionsCount = sessions.length;
    const completedSessionsCount = progress.filter((p) => (p.completion_time != null || p.completion_time != "") && (p.correction_time != null || p.correction_time != "")).length;
    const progressPercentage = (sessions = []) => {
        if (sessions.length === 0) return 0;
        return Math.round((completedSessionsCount / sessionsCount) * 100)
    }

    return { progressPercentage: progressPercentage(sessions), isLoading };
}

export default useCalculateProgress;