import request from '@/config/axios'


// 收入清单 VO
export interface TongFuProjectQueryVO {
  id: string  // 主键id
  tfsProjectCode: string // 通服项目编号
  engineeringNo: string // 甲方项目编号(工程编号)
  customerName: string // 客户名称
  totalPaidTax: number // 累计付款(含税)
  totalReceivedTax: number // 累计收款(含税)
  totalInvoicedTax: number // 累计开票(含税)
  totalInvoiceReceivedTax: number // 累计收票(含税)
  directPayable: number // 可直接付款
  recordIncomeTax: number // 列账收入(含税)
  recordIncomeNoTax: number // 列账收入(未税)
  acceptableInvoicing: number // 可收票
  accountReceivable: number // 可收款
  outsourcingCost: number // 外包成本
  actualOutsourcingCost: number // 实际外包成本
  outsourcedWages: number // 可外包工资


  projectClosureStatus: number // 项目结项状态
  responsibleDepartment: number // 负责部门
  professionalTypeName: number // 专业类型名称
  affiliatedCompany: number // 所属公司

}



// 通服项目 API
export const TongFuProjectQueryApi = {

  // 可直接付款分页
  directPayable : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/directPayable`, params })
  },
  directPayableExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/directPayableExport`, params })
  },



  // 可收款
  accountReceivable : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/accountReceivable`, params })
  },
  accountReceivableExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/accountReceivableExport`, params })
  },



  // 可收票
  acceptableInvoicing : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/acceptableInvoicing`, params })
  },
  acceptableInvoicingExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/acceptableInvoicingExport`, params })
  },



  // 可外包工资分页
  outsourcedWages : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/outsourcedWages`, params })
  },
  outsourcedWagesExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/outsourcedWagesExport`, params })
  },

  // 5可进取
  incomeReceivable : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/incomeReceivable`, params })
  },
  incomeReceivableExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/incomeReceivableExport`, params })
  },


  // 6需退收
  refundRequired : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/refundRequired`, params })
  },
  refundRequiredExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/refundRequiredExport`, params })
  },

// 7可开票
  invoicingAvailable : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/invoicingAvailable`, params })
  },
  invoicingAvailableExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/invoicingAvailableExport`, params })
  },

// 8零进取
  zeroIncome : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/zeroIncome`, params })
  },
  zeroIncomeExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/zeroIncomeExport`, params })
  },
// 9可分包
  subcontractable : async (params: any) => {
    return await request.get({ url: `/tongfu/tongFuProjectQuery/subcontractable`, params })
  },
  subcontractableExport : async (params: any) => {
    return await request.download({ url: `/tongfu/tongFuProjectQuery/subcontractableExport`, params })
  },









}
