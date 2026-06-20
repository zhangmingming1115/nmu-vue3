// 下拉选项基础类型
export interface DictDataType {
  label: string;
  value: string;
}

/**
 * 字符串数组 转 下拉选项数组
 * @param strList 后端返回的字符串数组
 */
export const buildStrOptions = (list: string[] = []): DictDataType[] => {
  return list.map(item => ({ label: item, value: item }))
}
