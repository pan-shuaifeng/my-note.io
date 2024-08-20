# visionPro
## 下载安装

- 下载地址：https://blog.csdn.net/gy0124/article/details/136994970

## 问题
电脑分辨率和某些应用分辨率不一致
  1. 右击软件-属性
2. 兼容性-> 更改高DPI设置
3. 勾选替代高DPI缩放行为

## visionPro工具
### **CogAcqFifoTool**
- 添加照相机
### **CogBlobTool斑点工具**
### **ImageSource** 加载图片
   - 本地数据：打开文件、打开文件夹
   - 照相机

### **CogImageFileTool** 
   - 加载本地图片文件
   - 将图片保存到本地：idb格式
### **CogPMAlignTool(定位查找工具)**
   - 基于边缘特征模板进行匹配
   - 掩摸器使用方法 （使用紫红色遮挡住不稳定特征）
   - 建摸器使用方法（忽略极性，可以设置特征权重比例）
   - 模版匹配
### **CogPMAlignMultiTool(定位查找工具)**
   - 多模版匹配
### **CogCNLSearchTool**
   - 基于像素值模板进行匹配 
   - 样式比较单一时使用，不支持旋转，匹配速度快
### **CogSearchMaxTool**
   - 对小细节更加精确
   - 可以对彩色图像进行识别

### **CogHistogramTool**
   - 检测区域灰度值
### **CogResultAnalysisTool**
   - 输出结果
### **CogCaliperTool**
   - 卡尺工具
### **Calibration & Fixturing 标定和空间坐标系建立的工具**
1. CogFixtureTool
- 建立基于图像自身特征的定位坐标空间

### **Geometry-Creation 创建工具**
1. CogCreateCircleTool 创建圆
2. CogCreateEllipseTool 创建椭圆
3. CogCreateGraphicLabelTool 创建标签
4. CogCreateLineBisectPointsTool 创建两点之间的中垂线
5. CogCreateLineParallelTool创建直线过某一点的平行线
6. CogCreateLinePerpendicularTool 创建直线过某一点的垂线
7. CogCreateLineTool 创建直线
8. CogCreateLineSegmentAvgSegsTool创建线段的对称轴
9. CogCreateLineSegmentTool 创建线段

### **Geometry-Finding & Fitting 查找工具**
1. CogFindCircleTool 查找圆
2. CogFindCornerTool 查找交叉轴
3. CogFindEllipseTool 查找椭圆
###  **Image Processing 图像处理模块**
1. CogAffineTransformTool 防射工具
2. CogImageConvertTool 将彩色图像转换为灰度图像



