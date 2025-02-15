import FileSaver from "file-saver";
import { useMutation } from "@tanstack/react-query"
import { exportProgressExcel } from "../../apis/progressAPI";

export const useExportProgressExcel = () => {
    return useMutation({
        mutationFn: ({ material_id, user_material_id }) => {
            return exportProgressExcel(material_id, user_material_id)
        },
        onSuccess: (blob) => {
            FileSaver.saveAs(blob, "progress.xlsx");
        },
        onError: (err) => console.log(err)
    })
}