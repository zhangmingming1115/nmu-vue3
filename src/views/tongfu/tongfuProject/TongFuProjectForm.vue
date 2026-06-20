<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible" width="90%" center>
    <el-form ref="formRef" :model="formData" :rules="formRules" label-width="150px" v-loading="formLoading" :disabled="formType === 'detail'">

      <el-row>
        <el-col :span="6">
          <el-form-item label="甲方项目编号" prop="engineeringNo">
            <el-input v-model="formData.engineeringNo" placeholder="请输入甲方项目编号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="工程名称" prop="engineeringName">
            <el-input v-model="formData.engineeringName" placeholder="请输入工程名称" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="客户名称" prop="customerName">
            <el-input v-model="formData.customerName" placeholder="请输入客户名称" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="通服项目编号" prop="tfsProjectCode">
            <el-input v-model="formData.tfsProjectCode" placeholder="请输入通服项目编号" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="项目经理名称" prop="projectManager">
            <el-input v-model="formData.projectManager" placeholder="请输入项目经理名称" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="经办人" prop="operator">
            <el-input v-model="formData.operator" placeholder="请输入经办人" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider content-position="left">收入</el-divider>

      <el-row>
        <el-col :span="8">
          <el-form-item label="计划收入(含税)" prop="plannedIncomeTax">
            <el-input v-model="formData.plannedIncomeTax" placeholder="请输入计划收入(含税)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="计划收入(不含税)" prop="plannedIncomeNoTax">
            <el-input v-model="formData.plannedIncomeNoTax" placeholder="请输入计划收入(不含税)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="累计开票(含税)" prop="totalInvoicedTax">
            <el-input v-model="formData.totalInvoicedTax" placeholder="请输入累计开票(含税)" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="累计开票(不含税)" prop="totalInvoicedNoTax">
            <el-input v-model="formData.totalInvoicedNoTax" placeholder="请输入累计开票(不含税)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="项目收入合同金额(不含税)" prop="contractIncomeNoTax">
            <el-input v-model="formData.contractIncomeNoTax" placeholder="请输入项目收入合同金额(不含税)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="列账收入(含税)" prop="recordIncomeTax">
            <el-input v-model="formData.recordIncomeTax" placeholder="请输入列账收入(含税)" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="列账收入(未税)" prop="recordIncomeNoTax">
            <el-input v-model="formData.recordIncomeNoTax" placeholder="请输入列账收入(未税)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="累计收款(含税)" prop="totalReceivedTax">
            <el-input v-model="formData.totalReceivedTax" placeholder="请输入累计收款(含税)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="审定金额（不含税）" prop="checkedAmountNoTax">
            <el-input v-model="formData.checkedAmountNoTax" placeholder="请输入审定金额（不含税）" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider content-position="left">成本</el-divider>

      <el-row>
        <el-col :span="8">
          <el-form-item label="计划成本" prop="plannedCost">
            <el-input v-model="formData.plannedCost" placeholder="请输入计划成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="人工成本" prop="laborCost">
            <el-input v-model="formData.laborCost" placeholder="请输入人工成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="材料费成本" prop="materialCost">
            <el-input v-model="formData.materialCost" placeholder="请输入材料费成本" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="实际成本" prop="actualCost">
            <el-input v-model="formData.actualCost" placeholder="请输入实际成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际人工成本" prop="actualLaborCost">
            <el-input v-model="formData.actualLaborCost" placeholder="请输入实际人工成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际材料成本" prop="actualMaterialCost">
            <el-input v-model="formData.actualMaterialCost" placeholder="请输入实际材料成本" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="外包成本" prop="outsourcingCost">
            <el-input v-model="formData.outsourcingCost" placeholder="请输入外包成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="其他费成本" prop="otherCost">
            <el-input v-model="formData.otherCost" placeholder="请输入其他费成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="累计收票(含税)" prop="totalInvoiceReceivedTax">
            <el-input v-model="formData.totalInvoiceReceivedTax" placeholder="请输入累计收票(含税)" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="实际外包成本" prop="actualOutsourcingCost">
            <el-input v-model="formData.actualOutsourcingCost" placeholder="请输入实际外包成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际其他成本" prop="actualOtherCost">
            <el-input v-model="formData.actualOtherCost" placeholder="请输入实际其他成本" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="累计付款(含税)" prop="totalPaidTax">
            <el-input v-model="formData.totalPaidTax" placeholder="请输入累计付款(含税)" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider content-position="left">毛利</el-divider>

      <el-row>
        <el-col :span="8">
          <el-form-item label="计划毛利率(%)" prop="plannedGrossProfitRate">
            <el-input v-model="formData.plannedGrossProfitRate" placeholder="请输入计划毛利率(百分比)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际毛利率(%)" prop="actualGrossProfitRate">
            <el-input v-model="formData.actualGrossProfitRate" placeholder="请输入实际毛利率(百分比)" />
          </el-form-item>
        </el-col>
        <el-col :span="8"/>
      </el-row>

      <el-divider content-position="left">工程信息</el-divider>
      <el-row>
        <el-col :span="6">
          <el-form-item label="送审金额" prop="submitAmount">
            <el-input v-model="formData.submitAmount" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="乙供材报审" prop="supplierMaterialSubmit">
            <el-input v-model="formData.supplierMaterialSubmit" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="送审技工" prop="submitSkilledWorker">
            <el-input v-model="formData.submitSkilledWorker" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="送审普工" prop="submitGeneralWorker">
            <el-input v-model="formData.submitGeneralWorker" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="审定金额" prop="checkedAmount">
            <el-input v-model="formData.checkedAmount" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="乙供材审定" prop="supplierMaterial">
            <el-input v-model="formData.supplierMaterial" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="审定技工" prop="checkedSkilledWorker">
            <el-input v-model="formData.checkedSkilledWorker" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="审定普工" prop="checkedGeneralWorker">
            <el-input v-model="formData.checkedGeneralWorker" disabled />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="安全生产费" prop="safetyFee">
            <el-input v-model="formData.safetyFee" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="赔补费" prop="compensationFee">
            <el-input v-model="formData.compensationFee" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="协调费搬运费" prop="coordinationFee">
            <el-input v-model="formData.coordinationFee" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6"/>
      </el-row>
    </el-form>
    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { TongFuProjectApi, TongFuProjectVO } from '@/api/tongfu/tongfuProject'

/** 通服项目 表单 */
defineOptions({ name: 'TongFuProjectForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  tfsProjectCode: undefined,
  customerName: undefined,
  engineeringNo: undefined,
  projectManager: undefined,
  operator: undefined,
  plannedIncomeTax: undefined,
  plannedIncomeNoTax: undefined,
  totalInvoicedTax: undefined,
  totalInvoicedNoTax: undefined,
  contractIncomeNoTax: undefined,
  recordIncomeTax: undefined,
  recordIncomeNoTax: undefined,
  totalReceivedTax: undefined,
  checkedAmountNoTax: undefined,
  plannedCost: undefined,
  laborCost: undefined,
  materialCost: undefined,
  outsourcingCost: undefined,
  otherCost: undefined,
  totalInvoiceReceivedTax: undefined,
  actualCost: undefined,
  actualLaborCost: undefined,
  actualMaterialCost: undefined,
  actualOutsourcingCost: undefined,
  actualOtherCost: undefined,
  totalPaidTax: undefined,
  plannedGrossProfitRate: undefined,
  actualGrossProfitRate: undefined,

  engineeringName: undefined,
  submitAmount: undefined,
  supplierMaterialSubmit: undefined,
  submitSkilledWorker: undefined,
  submitGeneralWorker: undefined,
  checkedAmount: undefined,
  supplierMaterial: undefined,
  checkedSkilledWorker: undefined,
  checkedGeneralWorker: undefined,
  safetyFee: undefined,
  compensationFee: undefined,
  coordinationFee: undefined,
})

const formRules = reactive({
  tfsProjectCode: [{ required: true, message: '通服项目编号不能为空', trigger: 'blur' }],
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: 'create' | 'update' | 'detail', id?: number) => {
  dialogVisible.value = true
  if (type === 'detail') {
    dialogTitle.value = t('action.detail') // 需在i18n配置中添加"common.detail": "详情"
  } else {
    dialogTitle.value = t('action.' + type)
  }

  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await TongFuProjectApi.getTongFuProject(id)
    } finally {
      formLoading.value = false
    }
  }
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
  // 校验表单
  await formRef.value.validate()
  // 提交请求
  formLoading.value = true
  try {
    const data = formData.value as unknown as TongFuProjectVO
    console.log("********",data)
    if (formType.value === 'create') {
      await TongFuProjectApi.createTongFuProject(data)
      message.success(t('common.createSuccess'))
    } else {
      await TongFuProjectApi.updateTongFuProject(data)
      message.success(t('common.updateSuccess'))
    }
    dialogVisible.value = false
    // 发送操作成功的事件
    emit('success')
  } finally {
    formLoading.value = false
  }
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
    id: undefined,
    tfsProjectCode: undefined,
    customerName: undefined,
    engineeringNo: undefined,
    projectManager: undefined,
    operator: undefined,
    plannedIncomeTax: undefined,
    plannedIncomeNoTax: undefined,
    totalInvoicedTax: undefined,
    totalInvoicedNoTax: undefined,
    contractIncomeNoTax: undefined,
    recordIncomeTax: undefined,
    recordIncomeNoTax: undefined,
    totalReceivedTax: undefined,
    checkedAmountNoTax: undefined,
    plannedCost: undefined,
    laborCost: undefined,
    materialCost: undefined,
    outsourcingCost: undefined,
    otherCost: undefined,
    totalInvoiceReceivedTax: undefined,
    actualCost: undefined,
    actualLaborCost: undefined,
    actualMaterialCost: undefined,
    actualOutsourcingCost: undefined,
    actualOtherCost: undefined,
    totalPaidTax: undefined,
    plannedGrossProfitRate: undefined,
    actualGrossProfitRate: undefined
  }
  formRef.value?.resetFields()
}
</script>
