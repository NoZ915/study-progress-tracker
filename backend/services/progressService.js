import ExcelJs from "exceljs";
import ProgressRepository from "../repositories/progressRepository.js";
import SessionRepository from "../repositories/sessionRepository.js"

class ProgressService {
  async getAllProgress(user_material_id, user_id) {
    return await ProgressRepository.getAllProgress(user_material_id, user_id)
  }

  async updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id) {
    return await ProgressRepository.updateProgress(user_material_id, session_id, completion_time, correction_time, notes, user_id)
  }

  async exportProgressExcel(material_id, user_material_id, user_id) {
    const sessions = await SessionRepository.getSessionsByMaterialId(material_id);
    for (const session of sessions) {
      const progress = await ProgressRepository.getAllProgress(user_material_id, user_id);
      const sessionProgress = progress.find((p) => p.dataValues.session_id === session.dataValues.session_id);
      session.dataValues.notes = sessionProgress?.notes || "";
      session.dataValues.completion_time = sessionProgress?.completion_time || "未完成";
      session.dataValues.correction_time = sessionProgress?.correction_time || "未訂正";
    }

    // 建立excel
    const workbook = new ExcelJs.Workbook();
    const worksheet = workbook.addWorksheet("進度表");

    // 設定header
    worksheet.columns = [
      { header: "回數", key: "session_name", width: 40 },
      { header: "完成時間", key: "completion_time", width: 20 },
      { header: "訂正完成時間", key: "correction_time", width: 20 },
      { header: "備註", key: "notes", width: 35 }
    ]

    // 設定 header 樣式
    worksheet.getRow(1).eachCell((cell) => {
      cell.fill = {
        type: "pattern",
        pattern: "solid",
        fgColor: { argb: "9ae3dc" }, // 背景顏色 (淡黃色)
      };
      cell.font = {
        name: "Microsoft JhengHei",
        bold: true,
        color: { argb: "000000" }, // 文字顏色 (黑色)
        size: 12
      };
      cell.alignment = { horizontal: "center", vertical: "middle" };
    });

    // 插入資料
    sessions.forEach((session) => {
      worksheet.addRow([
        session.dataValues.session_name,
        session.dataValues.completion_time,
        session.dataValues.correction_time,
        session.dataValues.notes
      ]);
    })

    // 產生 Buffer
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }
}

export default new ProgressService;