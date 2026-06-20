<template>
  <ContentWrap>
    <!-- 搜索工作栏 -->
    <el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="98px">
      <el-form-item label="工程编码" prop="engineeringNo">
        <el-input v-model="queryParams.engineeringNo" placeholder="请输入工程编码" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item label="通服项目编码" prop="tfsProjectCode">
        <el-input v-model="queryParams.tfsProjectCode" placeholder="请输入通服项目编码" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item label="项目经理" prop="projectManager">
        <el-input v-model="queryParams.projectManager" placeholder="请输入项目经理" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="工程编号" align="center" prop="engineeringNo" width="140px"/>
      <el-table-column label="通服项目编号" align="center" prop="tfsProjectCode" width="120px"/>
      <el-table-column label="工程名称" align="center" prop="engineeringName" width="580px"/>
      <el-table-column label="工程管理员" align="center" prop="engineeringManager"  width="120px"/>
      <el-table-column label="施工单位" align="center" prop="constructionCompany" width="300px"/>
      <el-table-column label="项目经理" align="center" prop="projectManager" />
      <el-table-column label="创建时间" align="center" prop="createTime" width="180" :formatter="dateFormatter"/>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button link type="primary" @click="openForm('detail', scope.row.id)"> 详情</el-button>
          <el-button link type="primary" @click="openForm('update', scope.row.id)" v-hasPermi="['incomeStatement::update']">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"/>
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <IncomeStatementForm ref="formRef" @success="getList" />
  <!-- 导入对话框 -->
  <IncomeStatementImportForm ref="importFormRef" @success="getList" />
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import {IncomeStatementApi, IncomeStatementVO} from '@/api/tfs/incomeStatement'
import IncomeStatementForm from './IncomeStatementForm.vue'


/** 收入清单 列表 */
defineOptions({ name: 'IncomeStatement' })

const loading = ref(true) // 列表的加载中
const list = ref<IncomeStatementVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  engineeringNo: undefined,
  tfsProjectCode: undefined,
  projectManager: undefined,
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await IncomeStatementApi.getPage(queryParams)
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

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
