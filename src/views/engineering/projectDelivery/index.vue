  <template>
    <ContentWrap>
      <!-- 搜索工作栏 -->
      <el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="68px">
        <el-form-item label="工程编号" prop="engineeringNo">
          <el-input v-model="queryParams.engineeringNo" placeholder="请输入工程编号" clearable @keyup.enter="handleQuery" class="!w-240px"/>
        </el-form-item>
        <el-form-item label="工程名称" prop="engineeringName">
          <el-input v-model="queryParams.engineeringName" placeholder="请输入工程名称" clearable @keyup.enter="handleQuery" class="!w-240px"/>
        </el-form-item>
        <el-form-item label="管理员" prop="engineeringManager">
          <el-input v-model="queryParams.engineeringManager" placeholder="请输入工程管理员" clearable @keyup.enter="handleQuery" class="!w-240px"/>
        </el-form-item>
        <el-form-item label="施工单位" prop="constructionCompany">
          <el-select v-model="queryParams.constructionCompany" placeholder="请选择施工单位" clearable class="!w-240px">
            <el-option v-for="item in constructionCompanyOptions" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="工程状态" prop="engineeringStatus">
          <el-select v-model="queryParams.engineeringStatus" placeholder="请选择工程状态" clearable class="!w-240px">
            <el-option v-for="item in engineeringStatusOptions" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
        </el-form-item>
        <el-form-item label="一级专业" prop="firstLevelMajor">
          <el-select v-model="queryParams.firstLevelMajor" placeholder="请选择一级专业" clearable class="!w-240px">
            <el-option v-for="item in firstLevelMajorOptions" :key="item.value" :label="item.label" :value="item.value"/>
          </el-select>
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
        <el-table-column label="工程名称" align="center" prop="engineeringName" width="600px"/>
        <el-table-column label="工程管理员" align="center" prop="engineeringManager" width="130px"/>
        <el-table-column label="一级专业" align="center" prop="firstLevelMajor" width="180px"/>
        <el-table-column label="施工单位" align="center" prop="constructionCompany" />
        <el-table-column label="施工金额(含增值税)(元)" align="center" prop="constructionAmountIncludingVat" width="180px"/>
        <el-table-column label="操作" align="center"  width="200px">
          <template #default="scope">
            <el-button link type="primary" @click="openAuditForm(scope.row.engineeringNo)"> 审计</el-button>
            <el-button link type="primary" @click="openForm('detail', scope.row.id)"> 详情</el-button>
            <el-button link type="primary" @click="openForm('update', scope.row.id)" v-hasPermi="['engineering:projectDelivery:update']"> 编辑</el-button>
          <el-button link type="danger" @click="handleDelete(scope.row.id)" v-hasPermi="['engineering:projectDelivery:delete']">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <Pagination :total="total" v-model:page="queryParams.pageNo" v-model:limit="queryParams.pageSize" @pagination="getList"/>
    </ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <ProjectDeliveryForm ref="formRef" @success="getList" />
  <AuditForm ref="auditFormRef" @success="getList" />
</template>

<script setup lang="ts">
import { ProjectDeliveryApi, ProjectDeliveryVO } from '@/api/engineering/projectDelivery'
import ProjectDeliveryForm from './ProjectDeliveryForm.vue'
import AuditForm from './AuditForm.vue'
import { buildStrOptions, DictDataType } from '@/utils/options';
/** 工程投资管理 列表 */defineOptions({ name: 'ProjectDelivery' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<ProjectDeliveryVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
  pageNo: 1,
  pageSize: 10,
  engineeringName: undefined,
  constructionCompany: undefined,
  engineeringStatus: undefined,
  engineeringNo: undefined,
  firstLevelMajor: undefined,
  engineeringManager: undefined,
})
const queryFormRef = ref() // 搜索的表单

/** 查询列表 */
const getList = async () => {
  loading.value = true
  try {
    const data = await ProjectDeliveryApi.getProjectDeliveryPage(queryParams)
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


const auditFormRef = ref()
const openAuditForm = (engineeringNo: string) => {
  auditFormRef.value.open(engineeringNo)
}

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await ProjectDeliveryApi.deleteProjectDelivery(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}


// 下拉选项数据
const engineeringStatusOptions = ref<DictDataType[]>([]);
// 获取工程状态列表
const getEngineeringStatusList = async () => {
  try {
    const res = await ProjectDeliveryApi.getEngineeringStatusList();
    // 关键：判断返回数据是否有效
    if (res) {
      engineeringStatusOptions.value = buildStrOptions(res);
    } else {
      engineeringStatusOptions.value = [];
      console.warn('工程状态列表数据为空');
    }
  } catch (error) {
    console.error('获取工程状态列表失败：', error);
    engineeringStatusOptions.value = [];
  }
};

// 施工单位 下拉选项数据
const constructionCompanyOptions = ref<DictDataType[]>([]);
// 获取施工单位列表
const getConstructionCompanyList = async () => {
  try {
    const res = await ProjectDeliveryApi.getConstructionCompanyList();
    if (res) {
      constructionCompanyOptions.value = buildStrOptions(res);
    } else {
      constructionCompanyOptions.value = [];
      console.warn('施工单位列表数据为空');
    }
  } catch (error) {
    console.error('获取施工单位列表失败：', error);
    constructionCompanyOptions.value = [];
  }
};

// 一级专业 下拉选项数据
const firstLevelMajorOptions = ref<DictDataType[]>([]);
// 获取施工单位列表
const getFirstLevelMajorList = async () => {
  try {
    const res = await ProjectDeliveryApi.getFirstLevelMajorList();
    if (res) {
      firstLevelMajorOptions.value = buildStrOptions(res);
    } else {
      firstLevelMajorOptions.value = [];
      console.warn('一级专业列表数据为空');
    }
  } catch (error) {
    console.error('获取一级专业列表失败：', error);
    firstLevelMajorOptions.value = [];
  }
};


/** 初始化 **/
onMounted(() => {
  getList();
  getEngineeringStatusList();
  getConstructionCompanyList();
  getFirstLevelMajorList();
})
</script>
<script setup lang="ts">
</script>
