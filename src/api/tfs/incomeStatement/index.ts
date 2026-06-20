import request from '@/config/axios'

// 收入清单 VO
export interface IncomeStatementVO {
  id: number // 主键ID
  engineeringNo: string //项目编码,
  major: string // 专业
  tfsProjectCode: string // 项目编码
  projectCodeChecking: string // 项目编码核对
  projectEngineer: string // 工程管理员
  constructionCompany: string // 施工单位
  projectManager: string // 项目经理
  workTeam: string // 工队
  migrantWorker: string // 农民工
  telecomPayable: number // 电信应付款
  telecomPaid: number // 电信付款
  payMonth: string // 付款月份
  tfsReceivable: number // 通服应收款
  tfsReceived: number // 通服已收款
  tfsDiff: number // 通服应收款-已收款
  receivable: number // 应收账款
  submitAmount: number // 送审金额
  checkedAmount: number // 审定金额
  safetyFee: number // 安全生产费
  supplierMaterialSubmit: number // 乙供材报审
  supplierMaterial: number // 乙供材
  compensationFee: number // 赔补费
  coordinationFee: number // 协调费搬运费
  subcontractRatio: number // 分包比例
  projectIncome: number // 项目收入
  laborPrice: number // 劳务工价
  submitSkilledWorker: number // 送审技工
  submitGeneralWorker: number // 送审普工
  checkedSkilledWorker: number // 审定技工
  checkedGeneralWorker: number // 审定普工
  constructionFee: number // 施工费
  projectApprovedAmountTax: number // 立项金额（含税）
  projectApprovedAmount: number // 立项金额（不含税）
  profit: number // 利润
  projectCost: number // 立项成本
  laborCost: number // 人工
  subcontractFeeTax: number // 分包费（含税）
  outsourceSalary: number // 外包人员工资
  siteFee: number // 现场费
  otherCost: number // 可用其他成本
  grossProfitRate: number // 毛利率
  profitRate: number // 利润率
  laborRatio: number // 人工占比
  siteFeeRatio: number // 现场费占比
  outsourceFee: number // 外包费
  comprehensiveWorkDayPrice: number // 综合工日单价
  telecomArrears: number // 电信欠款
  createTime: Date // 创建时间
  updatedAt: Date // 更新时间
}

// 收入清单 API
export const IncomeStatementApi = {
  // 查询收入清单分页
  getPage: async (params: any) => {
    return await request.get({ url: `/incomeStatement/page`, params })
  },

  // 查询收入清单详情
  get: async (id: number) => {
    return await request.get({ url: `/incomeStatement/get?id=` + id })
  },

  // 新增收入清单
  create: async (data: IncomeStatementVO) => {
    return await request.post({ url: `/incomeStatement/create`, data })
  },

  // 修改收入清单
  update: async (data: IncomeStatementVO) => {
    return await request.put({ url: `/incomeStatement/update`, data })
  },

  // 删除收入清单
  delete: async (id: number) => {
    return await request.delete({ url: `/incomeStatement/delete?id=` + id })
  },

  // 导出收入清单 Excel
  export: async (params) => {
    return await request.download({ url: `/incomeStatement/exportExcel`, params })
  },

  // 获得收入清单模板 Excel
  getImportTemplate: async () => {
    return await request.get({ url: `/incomeStatement/getImportTemplate`})
  },

}
