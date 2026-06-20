<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="98px">
      <el-form-item label="通服项目编号" prop="tfsProjectCode">
        <el-input v-model="queryParams.tfsProjectCode" placeholder="请输入通服项目编号" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item label="客户名称" prop="customerName">
        <el-input v-model="queryParams.customerName" placeholder="请输入客户名称" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button type="success" plain @click="handleExport" :loading="exportLoading">
          <Icon icon="ep:download" />导出
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="通服项目编号" align="center" prop="tfsProjectCode"/>
      <el-table-column label="项目名称" align="center" prop="engineeringName"/>
      <el-table-column label="客户名称" align="center" prop="customerName"/>
      <el-table-column label="列账收入(含税)" align="center" prop="recordIncomeTax"/>
      <el-table-column label="列账收入(未税)" align="center" prop="recordIncomeNoTax"/>
      <el-table-column label="累计收款(含税)" align="center" prop="totalReceivedTax"/>
      <el-table-column label="外包成本" align="center" prop="outsourcingCost"/>
      <el-table-column label="实际外包成本" align="center" prop="actualOutsourcingCost"/>
      <el-table-column label="可外包工资" align="center" prop="outsourcedWages"/>
<!--      <el-table-column label="操作" align="center">
        <template #default="scope"><el-button link type="primary" @click="openForm('detail', scope.row.id)">详情</el-button></template>
      </el-table-column>-->
    </el-table>
    <Pagination :total="total" v-model:page="queryParams.pageNo" v-model:limit="queryParams.pageSize" @pagination="getList"/>
  </ContentWrap>

</template>

<script setup lang="ts">
import { TongFuProjectQueryApi, TongFuProjectQueryVO } from '@/api/tongfu/tongfuProjectQuery'
import download from '@/utils/download'
/** 通服项目 列表 */
defineOptions({ name: 'TongFuProject' })
const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<TongFuProjectQueryVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  tfsProjectCode: undefined,
  customerName: undefined,
  partyProjectCode: undefined,
  projectManager: undefined,
  operator: undefined,
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await TongFuProjectQueryApi.outsourcedWages(queryParams)
    list.value = data.list
    total.value = data.total
  } finally {
    loading.value = false
  }
}

/** 搜索按钮操作 */
const handleQuery = () => {
  queryParams.pageNo = 1
  getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
  queryFormRef.value.resetFields()
  handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
  formRef.value.open(type, id)
}

/** 导出按钮操作 */
const exportLoading = ref(false)
const handleExport = async () => {
  try {
    // 导出的二次确认
    await message.exportConfirm()
    // 发起导出
    exportLoading.value = true
    const data = await TongFuProjectQueryApi.outsourcedWagesExport(queryParams)
    download.excel(data, '可外包工资.xls')
  } catch {
  } finally {
    exportLoading.value = false
  }
}


/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
