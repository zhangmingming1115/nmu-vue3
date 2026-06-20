<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible" width="100%" center>
    <el-form ref="formRef" :model="formData" :rules="formRules" v-loading="formLoading" label-width="160px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="项目编码" prop="engineeringNo">
            <el-input v-model="formData.engineeringNo" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目名称" prop="engineeringName">
            <el-input v-model="formData.engineeringName" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="工程管理员" prop="engineeringManager">
            <el-input v-model="formData.engineeringManager" disabled/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="工队" prop="workTeam">
            <el-input v-model="formData.workTeam" disabled/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="通服项目编号" prop="tfsProjectCode">
            <el-input v-model="formData.tfsProjectCode" placeholder="请输入通服项目编号"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="施工单位" prop="constructionCompany">
            <el-input v-model="formData.constructionCompany" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="项目经理" prop="projectManager">
            <el-input v-model="formData.projectManager" placeholder="请输入项目经理" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="专业" prop="major">
            <el-input v-model="formData.major" placeholder="请输入专业" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider />



      <el-row>
        <el-col :span="6">
          <el-form-item label="电信应付款" prop="telecomPayable">
            <el-input v-model="formData.telecomPayable" placeholder="请输入电信应付款"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="付款月份" prop="payMonth">
            <el-input v-model="formData.payMonth" placeholder="请输入付款月份" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="电信付款" prop="telecomPaid">
            <el-input v-model="formData.telecomPaid" placeholder="请输入电信付款" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="农民工直付" prop="migrantWorker">
            <el-input v-model="formData.migrantWorker" placeholder="请输入农民工直付" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="通服应收款" prop="tfsReceivable">
            <el-input v-model="formData.tfsReceivable" placeholder="请输入通服应收款"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="通服已收款" prop="tfsReceived">
            <el-input v-model="formData.tfsReceived" placeholder="请输入通服已收款" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="通服应收款-已收款" prop="tfsDiff">
            <el-input v-model="formData.tfsDiff" placeholder="请输入通服应收款-已收款" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="应收账款" prop="receivable">
            <el-input v-model="formData.receivable" placeholder="请输入应收账款" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-divider />

      <el-row>
        <el-col :span="6">
          <el-form-item label="送审金额" prop="submitAmount">
            <el-input v-model="formData.submitAmount" placeholder="请输入送审金额" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="乙供材报审" prop="supplierMaterialSubmit">
            <el-input v-model="formData.supplierMaterialSubmit" placeholder="请输入乙供材报审" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="送审技工" prop="submitSkilledWorker">
            <el-input v-model="formData.submitSkilledWorker" placeholder="请输入送审技工" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="送审普工" prop="submitGeneralWorker">
            <el-input v-model="formData.submitGeneralWorker" placeholder="请输入送审普工" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="审定金额" prop="checkedAmount">
            <el-input v-model="formData.checkedAmount" placeholder="请输入审定金额" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="乙供材审定" prop="supplierMaterial">
            <el-input v-model="formData.supplierMaterial" placeholder="请输入乙供材审定"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="审定技工" prop="checkedSkilledWorker">
            <el-input v-model="formData.checkedSkilledWorker" placeholder="请输入审定技工"/>
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="审定普工" prop="checkedGeneralWorker">
            <el-input v-model="formData.checkedGeneralWorker" placeholder="请输入审定普工" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="安全生产费" prop="safetyFee">
            <el-input v-model="formData.safetyFee" placeholder="请输入安全生产费" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="赔补费" prop="compensationFee">
            <el-input v-model="formData.compensationFee" placeholder="请输入赔补费" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="协调费搬运费" prop="coordinationFee">
            <el-input v-model="formData.coordinationFee" placeholder="请输入协调费搬运费" />
          </el-form-item>
        </el-col>
        <el-col :span="6"/>
      </el-row>

      <el-divider />


      <el-row>
        <el-col :span="6">
          <el-form-item label="分包比例" prop="subcontractRatio">
            <el-input v-model="formData.subcontractRatio" placeholder="请输入分包比例" />
          </el-form-item>
        </el-col>
        <el-col :span="6"/>
        <el-col :span="6"/>
        <el-col :span="6"/>
      </el-row>

      <el-divider />
      <el-row>
        <el-col :span="6">
          <el-form-item label="立项金额（含税）" prop="projectApprovedAmountTax">
            <el-input v-model="formData.projectApprovedAmountTax" placeholder="请输入立项金额（含税）" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="立项金额（不含税）" prop="projectApprovedAmount">
            <el-input v-model="formData.projectApprovedAmount" placeholder="请输入立项金额（不含税）" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="毛利率(%)" prop="grossProfitRate">
            <el-input v-model="formData.grossProfitRate" placeholder="请输入毛利率" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="立项成本" prop="projectCost">
            <el-input v-model="formData.projectCost" placeholder="请输入立项成本" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="6">
          <el-form-item label="人工" prop="laborCost">
            <el-input v-model="formData.laborCost" placeholder="请输入人工" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="分包费（含税）" prop="subcontractFeeTax">
            <el-input v-model="formData.subcontractFeeTax" placeholder="请输入分包费（含税）" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="外包人员工资" prop="outsourceSalary">
            <el-input v-model="formData.outsourceSalary" placeholder="请输入外包人员工资" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="现场费" prop="siteFee">
            <el-input v-model="formData.siteFee" placeholder="请输入现场费" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-divider />

      <el-row>
        <el-col :span="6">
          <el-form-item label="劳务工价" prop="laborPrice">
            <el-input v-model="formData.laborPrice" placeholder="请输入劳务工价" />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="施工费" prop="constructionFee">
            <el-input v-model="formData.constructionFee" placeholder="请输入施工费"/>
          </el-form-item>
        </el-col>
        <el-col :span="6"/>
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
import { InvestmentManagementApi } from '@/api/engineering/investmentmanagement'
import {IncomeStatementApi, IncomeStatementVO} from '@/api/tfs/incomeStatement'
/** 收入清单 表单 */
defineOptions({ name: 'AuditForm' })


const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用


const formData = ref({
  id: undefined,
  major: undefined,
  engineeringNo: undefined,
  tfsProjectCode: undefined,
  projectCodeChecking: undefined,
  projectEngineer: undefined,
  constructionCompany: undefined,
  projectManager: undefined,
  workTeam: undefined,
  migrantWorker: undefined,
  telecomPayable: undefined,
  telecomPaid: undefined,
  payMonth: undefined,
  tfsReceivable: undefined,
  tfsReceived: undefined,
  tfsDiff: undefined,
  receivable: undefined,
  submitAmount: undefined,
  checkedAmount: undefined,
  safetyFee: undefined,
  supplierMaterialSubmit: undefined,
  supplierMaterial: undefined,
  compensationFee: undefined,
  coordinationFee: undefined,
  subcontractRatio: undefined,
  projectIncome: undefined,
  laborPrice: undefined,
  submitSkilledWorker: undefined,
  submitGeneralWorker: undefined,
  checkedSkilledWorker: undefined,
  checkedGeneralWorker: undefined,
  constructionFee: undefined,
  projectApprovedAmountTax: undefined,
  projectApprovedAmount: undefined,
  profit: undefined,
  projectCost: undefined,
  laborCost: undefined,
  subcontractFeeTax: undefined,
  outsourceSalary: undefined,
  siteFee: undefined,
  otherCost: undefined,
  grossProfitRate: undefined,
  profitRate: undefined,
  laborRatio: undefined,
  siteFeeRatio: undefined,
  outsourceFee: undefined,
  comprehensiveWorkDayPrice: undefined,
  telecomArrears: undefined,
})
const formRules = reactive({
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (engineeringNo: string) => {
  dialogVisible.value = true
  dialogTitle.value = '审计'
  resetForm()
  // 修改时，设置数据
  if (engineeringNo) {
    formLoading.value = true
    try {
      formData.value = await InvestmentManagementApi.getByEngineeringNo(engineeringNo)
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
    const data = formData.value as unknown as IncomeStatementVO
    await IncomeStatementApi.create(data)
    message.success(t('common.createSuccess'))

/*    const data = formData.value as unknown as InvestmentManagementVO
    await InvestmentManagementApi.createInvestmentManagement(data)
    message.success(t('common.createSuccess'))*/
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
    bm: undefined,
    major: undefined,
    tfsProjectCode: undefined,
    projectCodeChecking: undefined,
    projectEngineer: undefined,
    constructionCompany: undefined,
    projectManager: undefined,
    workTeam: undefined,
    migrantWorker: undefined,
    telecomPayable: undefined,
    telecomPaid: undefined,
    payMonth: undefined,
    tfsReceivable: undefined,
    tfsReceived: undefined,
    tfsDiff: undefined,
    receivable: undefined,
    submitAmount: undefined,
    checkedAmount: undefined,
    safetyFee: undefined,
    supplierMaterialSubmit: undefined,
    supplierMaterial: undefined,
    compensationFee: undefined,
    coordinationFee: undefined,
    subcontractRatio: undefined,
    projectIncome: undefined,
    laborPrice: undefined,
    submitSkilledWorker: undefined,
    submitGeneralWorker: undefined,
    checkedSkilledWorker: undefined,
    checkedGeneralWorker: undefined,
    constructionFee: undefined,
    projectApprovedAmountTax: undefined,
    projectApprovedAmount: undefined,
    profit: undefined,
    projectCost: undefined,
    laborCost: undefined,
    subcontractFeeTax: undefined,
    outsourceSalary: undefined,
    siteFee: undefined,
    otherCost: undefined,
    grossProfitRate: undefined,
    profitRate: undefined,
    laborRatio: undefined,
    siteFeeRatio: undefined,
    outsourceFee: undefined,
    comprehensiveWorkDayPrice: undefined,
    telecomArrears: undefined,
  }
  formRef.value?.resetFields()
}
</script>
