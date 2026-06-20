import request from '@/config/axios'

// 通服项目 VO
export interface TongFuProjectVO {
  id: number // 主键ID
  tfsProjectCode: string // 通服项目编号
  customerName: string // 客户名称
  engineeringNo: string // 甲方项目编号
  projectManager: string // 项目经理名称
  operator: string // 经办人
  plannedIncomeTax: number // 计划收入(含税)
  plannedIncomeNoTax: number // 计划收入(不含税)
  totalInvoicedTax: number // 累计开票(含税)
  totalInvoicedNoTax: number // 累计开票(不含税)
  contractIncomeNoTax: number // 项目收入合同金额(不含税)
  recordIncomeTax: number // 列账收入(含税)
  recordIncomeNoTax: number // 列账收入(未税)
  totalReceivedTax: number // 累计收款(含税)
  checkedAmountNoTax: number // 审定金额（不含税）
  plannedCost: number // 计划成本
  materialCost: number // 材料费成本
  outsourcingCost: number // 外包成本
  otherCost: number // 其他费成本
  totalInvoiceReceivedTax: number // 累计收票(含税)
  actualCost: number // 实际成本
  actualLaborCost: number // 实际人工成本
  actualMaterialCost: number // 实际材料成本
  actualOutsourcingCost: number // 实际外包成本
  actualOtherCost: number // 实际其他成本
  totalPaidTax: number // 累计付款(含税)
  plannedGrossProfitRate: number // 计划毛利率(百分比)
  actualGrossProfitRate: number // 实际毛利率(百分比)
}

// 收入清单 VO
export interface IncomeStatementVO {
  submitAmount: number // 送审金额
  checkedAmount: number // 审定金额
  safetyFee: number // 安全生产费
  supplierMaterialSubmit: number // 乙供材报审
  supplierMaterial: number // 乙供材
  compensationFee: number // 赔补费
  coordinationFee: number // 协调费搬运费
  submitSkilledWorker: number // 送审技工
  submitGeneralWorker: number // 送审普工
  checkedSkilledWorker: number // 审定技工
  checkedGeneralWorker: number // 审定普工
}
export interface TongFuProjectQueryVO {
  tfsProjectCode: string // 通服项目编号
  engineeringNo: string // 甲方项目编号(工程编号)
  customerName: string // 客户名称
  totalPaidTax: number // 累计付款(含税)
  totalReceivedTax: number // 累计收款(含税)
  totalInvoicedTax: number // 累计开票(含税)
  totalInvoiceReceivedTax: number // 累计收票(含税)
  directPayable: number // 可直接付款


  projectClosureStatus: number // 项目结项状态
  responsibleDepartment: number // 负责部门
  professionalTypeName: number // 专业类型名称
  affiliatedCompany: number // 所属公司

}

// 通服项目 API
export const TongFuProjectApi = {
  // 查询通服项目分页
  getTongFuProjectPage: async (params: any) => {
    return await request.get({ url: `/tongfu/tong-fu-project/page`, params })
  },


  // 查询通服项目详情
  getTongFuProject: async (id: number) => {
    return await request.get({ url: `/tongfu/tong-fu-project/get?id=` + id })
  },

  // 新增通服项目
  createTongFuProject: async (data: TongFuProjectVO) => {
    return await request.post({ url: `/tongfu/tong-fu-project/create`, data })
  },

  // 修改通服项目
  updateTongFuProject: async (data: TongFuProjectVO) => {
    return await request.put({ url: `/tongfu/tong-fu-project/update`, data })
  },

  // 删除通服项目
  deleteTongFuProject: async (id: number) => {
    return await request.delete({ url: `/tongfu/tong-fu-project/delete?id=` + id })
  },

  // 导出通服项目 Excel
  exportTongFuProject: async (params) => {
    return await request.download({ url: `/tongfu/tong-fu-project/export-excel`, params })
  },

  getIncomeStatementData: async (id: number) => {
    return await request.get({ url: `/tongfu/tong-fu-project/getIncomeStatementData?tongFuProjectId=` + id })
  },

  // 下载 通服项目Excel导入模板
  importExcelTemplate: async () => {
    return await request.get({ url: `/tongfu/tong-fu-project/get-import-template`})
  },















  // 可直接付款分页
  directPayable : async (params: any) => {
    return await request.get({ url: `/tongfu/tong-fu-project/directPayable`, params })
  },
  directPayableExport : async (params: any) => {
    return await request.get({ url: `/tongfu/tong-fu-project/directPayableExport`, params })
  },



  // 可收款分页
  accountReceivable : async (params: any) => {
    return await request.get({ url: `/tongfu/tong-fu-project/accountReceivable`, params })
  },









  // 可收票分页
  acceptableInvoicing : async (params: any) => {
    return await request.get({ url: `/tongfu/tong-fu-project/acceptableInvoicing`, params })
  },

  // 可外包工资分页
  outsourcedWages : async (params: any) => {
    return await request.get({ url: `/tongfu/tong-fu-project/outsourcedWages`, params })
  },









}
