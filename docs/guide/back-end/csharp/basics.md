# 基础
## 集合
### List 集合列表
#### 使用场景
- 需要存储一组数据，并且需要频繁的进行插入和删除操作
- 需要一组长度动态变化的数组

| 属性 | 解释 | 示例 |
|---|---|---|
| Capacity | 集合的容量 | `list.Capacity` |
| Count | 集合中元素的个数 | `list.Count` |

| 方法       | 解释 | 示例 |
|----------|---|---|
| Add | 添加元素 | `list.Add(1)` |
| Remove | 删除元素 | `list.Remove(1)` |
| Clear | 清空集合 | `list.Clear()` |
| Contains | 判断集合中是否包含某个元素 | `list.Contains(1)` |
| IndexOf | 获取某个元素在集合中的索引 | `list.IndexOf(1)` |
| LastIndexOf | 获取某个元素在集合中最后一次出现的索引 | `list.LastIndexOf(1)` |
| Insert | 在指定位置插入元素 | `list.Insert(1, 2)` |
| RemoveAt | 删除指定位置的元素 | `list.RemoveAt(1)` |
| Reverse | 反转集合中的元素顺序 | `list.Reverse()` |
| Sort | 对集合中的元素进行排序 | `list.Sort()` |
| ToArray | 将集合转换为数组 | `list.ToArray()` |
| TrimExcess | 将集合的容量调整为集合中元素的实际数量 | `list.TrimExcess()` |
|AddRange | 将一组元素添加到集合中 | `list.AddRange(new int[] { 1, 2, 3 })` |

### ArrayList 集合列表 （与List相似）
#### 使用场景
- 需要存储不同数据类型的元素




