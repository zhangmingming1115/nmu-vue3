import request from '@/config/axios'

// 工程投资管理 VO
export interface InvestmentManagementVO {
  id: number // 主键ID
  serialNumber: number // 序号
  investmentChannel: string // 投资渠道
  projectNo: string // 项目编号
  projectName: string // 项目名称
  engineeringNo: string // 工程编号
  engineeringName: string // 工程名称
  constructionUnit: string // 建设单位
  engineeringStatus: string // 工程状态
  engineeringManager: string // 工程管理员
  firstLevelMajor: string // 一级专业
  secondLevelMajor: string // 二级专业
  majorTag: string // 专业标签
  approvalDateOfProjectInitiation: Date // 立项批复日期
  actualStartDate: Date // 实际开工日期
  actualPreliminaryAcceptanceDate: Date // 实际初验日期
  dateOfPreFixedAssetApplication: Date // 提交预转固日期
  preFixedAssetDate: Date // 预转固日期
  actualFinalAcceptanceDate: Date // 实际终验日期
  dateOfFinalAccountFixedAssetTransfer: Date // 提交决算／转固日期
  fixedAssetTransferDate: Date // 转固日期
  totalProjectInvestment: number // 工程总投资(元)
  constructionCompany: string // 施工单位
  constructionAmountIncludingVat: number // 施工金额(含增值税)(元)
  designCompany: string // 设计单位
  designAmountIncludingVat: number // 设计金额(含增值税)(元)
  supervisionCompany: string // 监理单位
  supervisionAmountIncludingVat: number // 监理金额(含增值税)(元)
  cumulativeCompletedInvestment: number // 累计完成投资(元)
  currentYearCompletedInvestment: number // 本年完成投资(元)
  currentYearInvestment: number // 本年投资(元)
  projectCloseDate: Date // 工程关闭日期
}

// 工程投资管理 API
export const InvestmentManagementApi = {

  // 查询工程投资管理分页
  getInvestmentManagementPage: async (params: any) => {
    return await request.get({ url: `/engineering/investment-management/page`, params })
  },

  // 查询工程投资管理详情
  getInvestmentManagement: async (id: number) => {
    return await request.get({ url: `/engineering/investment-management/get?id=` + id })
  },

  // 根据工程编号获取工程投资管理信息
  getByEngineeringNo: async (engineeringNo: string) => {
    return await request.get({ url: `/engineering/investment-management/getByEngineeringNo?engineeringNo=` + engineeringNo })
  },

  // 新增工程投资管理
  createInvestmentManagement: async (data: InvestmentManagementVO) => {
    return await request.post({ url: `/engineering/investment-management/create`, data })
  },

  // 修改工程投资管理
  updateInvestmentManagement: async (data: InvestmentManagementVO) => {
    return await request.put({ url: `/engineering/investment-management/update`, data })
  },

  // 删除工程投资管理
  deleteInvestmentManagement: async (id: number) => {
    return await request.delete({ url: `/engineering/investment-management/delete?id=` + id })
  },

  // 导入工程投资管理 Excel
  importInvestmentManagementTemplate: async () => {
    return await request.get({ url: `/engineering/investment-management/get-import-template`})
  },

  getEngineeringStatusList: async () => {
    return await request.get({ url: `/engineering/investment-management/getEngineeringStatusList`})
  },


  getFirstLevelMajorList: async () => {
    return await request.get({ url: `/engineering/investment-management/getFirstLevelMajorList`})
  },


  getConstructionCompanyList: async () => {
    return await request.get({ url: `/engineering/investment-management/getConstructionCompanyList`})
  },

}
