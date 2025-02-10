import { useGetAllSessionsByMaterialId } from "../hooks/sessions/useGetAllSessionsByMaterialId.js";
import { useGetAllProgressByUserMaterialId } from "../hooks/progress/useGetAllProgressByUserMaterialId.js";

function useSessionsWithProgress(material_id, user_material_id) {
  const { data: sessions = [], isLoading } = useGetAllSessionsByMaterialId(material_id);
  const { data: progress = [] } = useGetAllProgressByUserMaterialId(user_material_id);

  // 整合 sessions 與 progress
  const enhancedSessions = sessions.map((session) => {
    const sessionProgress = progress.find((p) => p.session_id === session.session_id);
    return {
      ...session,
      progressNotes: progress.notes,
      completionTime: sessionProgress?.completion_time
        ? new Date(sessionProgress.completion_time).toLocaleDateString()
        : "未完成",
      correctionTime: sessionProgress?.correction_time
        ? new Date(sessionProgress.correction_time).toLocaleDateString()
        : "未訂正",
    };
  });

  return { sessions: enhancedSessions, isLoading };
}

export default useSessionsWithProgress;