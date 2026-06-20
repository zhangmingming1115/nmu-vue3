<template>
  <Dialog :title="dialogTitle" v-model="dialogVisible"  width="80%" center>
    <el-form ref="formRef" :model="formData" :rules="formRules" v-loading="formLoading" label-width="160px" :disabled="formType === 'detail'">
      <el-row>
        <el-col :span="8">
          <el-form-item label="项目编号" prop="projectNo">
            <el-input v-model="formData.projectNo" placeholder="请输入项目编号" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="项目名称" prop="projectName">
            <el-input v-model="formData.projectName" placeholder="请输入项目名称" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="工程编号" prop="engineeringNo">
            <el-input v-model="formData.engineeringNo" placeholder="请输入工程编号" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="工程名称" prop="engineeringName">
            <el-input v-model="formData.engineeringName" placeholder="请输入工程名称" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="工程总投资" prop="totalProjectInvestment">
            <template #label>
              <Tooltip message="工程总投资，货币单位：元" title="工程总投资"/>
            </template>
            <el-input v-model="formData.totalProjectInvestment" placeholder="请输入工程总投资" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="建设单位" prop="constructionUnit">
            <el-input v-model="formData.constructionUnit" placeholder="请输入建设单位" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="施工金额" prop="constructionAmountIncludingVat">
            <template #label>
              <Tooltip message="施工金额，包含增值税，货币单位：元" title="施工金额"/>
            </template>
            <el-input v-model="formData.constructionAmountIncludingVat" placeholder="请输入施工金额" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="施工单位" prop="constructionCompany">
            <el-input v-model="formData.constructionCompany" placeholder="请输入施工单位" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="设计金额" prop="designAmountIncludingVat">
            <template #label>
              <Tooltip message="设计金额，包含增值税，货币单位：元" title="设计金额"/>
            </template>
            <el-input v-model="formData.designAmountIncludingVat" placeholder="请输入设计金额" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="设计单位" prop="designCompany">
            <el-input v-model="formData.designCompany" placeholder="请输入设计单位" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="监理金额" prop="supervisionAmountIncludingVat">
            <template #label>
              <Tooltip message="监理金额，包含增值税，货币单位：元" title="监理金额"/>
            </template>
            <el-input v-model="formData.supervisionAmountIncludingVat" placeholder="请输入监理金额" />
          </el-form-item>
        </el-col>
        <el-col :span="16">
          <el-form-item label="监理单位" prop="supervisionCompany">
            <el-input v-model="formData.supervisionCompany" placeholder="请输入监理单位"/>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="投资渠道" prop="investmentChannel">
            <el-input v-model="formData.investmentChannel" placeholder="请输入投资渠道" :readonly="formType === 'detail'"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工程状态" prop="engineeringStatus">
            <el-input v-model="formData.engineeringStatus" placeholder="请输入工程状态" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工程管理员" prop="engineeringManager">
            <el-input v-model="formData.engineeringManager" placeholder="请输入工程管理员" />
          </el-form-item>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="8">
          <el-form-item label="一级专业" prop="firstLevelMajor">
            <el-input v-model="formData.firstLevelMajor" placeholder="请输入一级专业" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="二级专业" prop="secondLevelMajor">
            <el-input v-model="formData.secondLevelMajor" placeholder="请输入二级专业" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="专业标签" prop="majorTag">
            <el-input v-model="formData.majorTag" placeholder="请输入专业标签" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="立项批复日期" prop="approvalDateOfProjectInitiation">
            <el-date-picker v-model="formData.approvalDateOfProjectInitiation" type="date" value-format="x" placeholder="选择立项批复日期"
              :readonly="formType === 'detail'" :disabled="formType === 'detail'"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际开工日期" prop="actualStartDate">
            <el-date-picker v-model="formData.actualStartDate" type="date" value-format="x" placeholder="选择实际开工日期"
              :readonly="formType === 'detail'" :disabled="formType === 'detail'"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际初验日期" prop="actualPreliminaryAcceptanceDate">
            <el-date-picker v-model="formData.actualPreliminaryAcceptanceDate" type="date" value-format="x" placeholder="选择实际初验日期"/>
          </el-form-item>
        </el-col>
      </el-row>



      <el-row>
        <el-col :span="8">
          <el-form-item label="提交预转固日期" prop="dateOfPreFixedAssetApplication">
            <el-date-picker v-model="formData.dateOfPreFixedAssetApplication" type="date" value-format="x" placeholder="选择提交预转固日期"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="预转固日期" prop="preFixedAssetDate">
            <el-date-picker v-model="formData.preFixedAssetDate" type="date" value-format="x" placeholder="选择预转固日期"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="实际终验日期" prop="actualFinalAcceptanceDate">
            <el-date-picker v-model="formData.actualFinalAcceptanceDate" type="date" value-format="x" placeholder="选择实际终验日期"/>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="提交决算／转固日期" prop="dateOfFinalAccountFixedAssetTransfer">
            <el-date-picker v-model="formData.dateOfFinalAccountFixedAssetTransfer" type="date" value-format="x" placeholder="选择提交决算／转固日期"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="转固日期" prop="fixedAssetTransferDate">
            <el-date-picker v-model="formData.fixedAssetTransferDate" type="date" value-format="x" placeholder="选择转固日期"/>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="工程关闭日期" prop="projectCloseDate">
            <el-date-picker v-model="formData.projectCloseDate" type="date" value-format="x" placeholder="选择工程关闭日期"/>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row>
        <el-col :span="8">
          <el-form-item label="累计完成投资(元)" prop="cumulativeCompletedInvestment">
            <el-input v-model="formData.cumulativeCompletedInvestment" placeholder="请输入累计完成投资(元)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="本年完成投资(元)" prop="currentYearCompletedInvestment">
            <el-input v-model="formData.currentYearCompletedInvestment" placeholder="请输入本年完成投资(元)" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="本年投资(元)" prop="currentYearInvestment">
            <el-input v-model="formData.currentYearInvestment" placeholder="请输入本年投资(元)" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

    <template #footer>
      <el-button @click="submitForm" type="primary" :disabled="formLoading">确 定</el-button>
      <el-button @click="dialogVisible = false">取 消</el-button>
    </template>
  </Dialog>
</template>
<script setup lang="ts">
import { ProjectDeliveryApi, ProjectDeliveryVO } from '@/api/engineering/projectDelivery'

/** 工程投资管理 表单 */
defineOptions({ name: 'ProjectDeliveryForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  serialNumber: undefined,
  investmentChannel: undefined,
  projectNo: undefined,
  projectName: undefined,
  engineeringNo: undefined,
  engineeringName: undefined,
  constructionUnit: undefined,
  engineeringStatus: undefined,
  engineeringManager: undefined,
  firstLevelMajor: undefined,
  secondLevelMajor: undefined,
  majorTag: undefined,
  approvalDateOfProjectInitiation: undefined,
  actualStartDate: undefined,
  actualPreliminaryAcceptanceDate: undefined,
  dateOfPreFixedAssetApplication: undefined,
  preFixedAssetDate: undefined,
  actualFinalAcceptanceDate: undefined,
  dateOfFinalAccountFixedAssetTransfer: undefined,
  fixedAssetTransferDate: undefined,
  totalProjectInvestment: undefined,
  constructionCompany: undefined,
  constructionAmountIncludingVat: undefined,
  designCompany: undefined,
  designAmountIncludingVat: undefined,
  supervisionCompany: undefined,
  supervisionAmountIncludingVat: undefined,
  cumulativeCompletedInvestment: undefined,
  currentYearCompletedInvestment: undefined,
  currentYearInvestment: undefined,
  projectCloseDate: undefined,
})
const formRules = reactive({
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, id?: number) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
  // 修改时，设置数据
  if (id) {
    formLoading.value = true
    try {
      formData.value = await ProjectDeliveryApi.getProjectDelivery(id)
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
    const data = formData.value as unknown as ProjectDeliveryVO
    if (formType.value === 'create') {
      await ProjectDeliveryApi.createProjectDelivery(data)
      message.success(t('common.createSuccess'))
    } else {
      await ProjectDeliveryApi.updateProjectDelivery(data)
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
    serialNumber: undefined,
    investmentChannel: undefined,
    projectNo: undefined,
    projectName: undefined,
    engineeringNo: undefined,
    engineeringName: undefined,
    constructionUnit: undefined,
    engineeringStatus: undefined,
    engineeringManager: undefined,
    firstLevelMajor: undefined,
    secondLevelMajor: undefined,
    majorTag: undefined,
    approvalDateOfProjectInitiation: undefined,
    actualStartDate: undefined,
    actualPreliminaryAcceptanceDate: undefined,
    dateOfPreFixedAssetApplication: undefined,
    preFixedAssetDate: undefined,
    actualFinalAcceptanceDate: undefined,
    dateOfFinalAccountFixedAssetTransfer: undefined,
    fixedAssetTransferDate: undefined,
    totalProjectInvestment: undefined,
    constructionCompany: undefined,
    constructionAmountIncludingVat: undefined,
    designCompany: undefined,
    designAmountIncludingVat: undefined,
    supervisionCompany: undefined,
    supervisionAmountIncludingVat: undefined,
    cumulativeCompletedInvestment: undefined,
    currentYearCompletedInvestment: undefined,
    currentYearInvestment: undefined,
    projectCloseDate: undefined,
  }
  formRef.value?.resetFields()
}
</script>
