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
      <el-form-item label="甲方项目编号" prop="engineeringNo">
        <el-input v-model="queryParams.engineeringNo" placeholder="请输入甲方项目编号" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item label="项目经理名称" prop="projectManager">
        <el-input v-model="queryParams.projectManager" placeholder="请输入项目经理名称" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item label="经办人" prop="operator">
        <el-input v-model="queryParams.operator" placeholder="请输入经办人" clearable @keyup.enter="handleQuery" class="!w-240px"/>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleQuery"><Icon icon="ep:search" class="mr-5px" /> 搜索</el-button>
        <el-button @click="resetQuery"><Icon icon="ep:refresh" class="mr-5px" /> 重置</el-button>
        <el-button type="primary" plain @click="openForm('create')" v-hasPermi="['tongfu:tong-fu-project:create']">
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button>
        <el-button type="success" plain @click="handleImport" v-hasPermi="['engineering:investment-management:import']">
          <Icon icon="ep:download" class="mr-5px" /> 导入
        </el-button>
      </el-form-item>
    </el-form>
  </ContentWrap>

  <!-- 列表 -->
  <ContentWrap>
    <el-table v-loading="loading" :data="list" :stripe="true" :show-overflow-tooltip="true">
      <el-table-column label="通服项目编号" align="center" prop="tfsProjectCode" />
      <el-table-column label="客户名称" align="center" prop="customerName" />
      <el-table-column label="甲方项目编号" align="center" prop="engineeringNo" />
      <el-table-column label="项目经理名称" align="center" prop="projectManager" />
      <el-table-column label="经办人" align="center" prop="operator" />
      <el-table-column label="创建时间" align="center" prop="createTime" :formatter="dateFormatter" width="180px"/>
      <el-table-column label="操作" align="center">
        <template #default="scope">
          <el-button link type="primary" @click="openForm('update', scope.row.id)">编辑</el-button>
          <el-button link type="primary" @click="openForm('detail', scope.row.id)" v-hasPermi="['tongfu:tong-fu-project:query']">详情</el-button>
          <el-button link type="danger" @click="handleDelete(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <Pagination
      :total="total"
      v-model:page="queryParams.pageNo"
      v-model:limit="queryParams.pageSize"
      @pagination="getList"
    />
  </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <TongFuProjectForm ref="formRef" @success="getList" />
  <!-- 用户导入对话框 -->
  <TongFuProjectImportForm ref="importFormRef" @success="getList" />
</template>

<script setup lang="ts">
import { dateFormatter } from '@/utils/formatTime'
import { TongFuProjectApi, TongFuProjectVO } from '@/api/tongfu/tongfuProject'
import TongFuProjectForm from './TongFuProjectForm.vue'
import TongFuProjectImportForm from './TongFuProjectImportForm.vue'

/** 通服项目 列表 */
defineOptions({ name: 'TongFuProject' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<TongFuProjectVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  tfsProjectCode: undefined,
  customerName: undefined,
  engineeringNo: undefined,
  projectManager: undefined,
  operator: undefined,
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await TongFuProjectApi.getTongFuProjectPage(queryParams)
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

const importFormRef = ref()
const handleImport = () => {
  importFormRef.value.open()
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await TongFuProjectApi.deleteTongFuProject(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

/** 初始化 **/
onMounted(() => {
  getList()
})
</script>
