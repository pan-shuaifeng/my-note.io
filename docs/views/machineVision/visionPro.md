---
outline: deep
---

# visionPro
## 下载安装

- 下载地址：https://blog.csdn.net/gy0124/article/details/136994970

## 问题
电脑分辨率和某些应用分辨率不一致
  1. 右击软件-属性
2. 兼容性-> 更改高DPI设置
3. 勾选替代高DPI缩放行为
## visionPro类型
- CogGraphicCollection 形状的数组集合类型  索引类型ICogGraphic
     ```csharp
  //基本使用
     CogBlobResult b = myList[i] as CogBlobResult;
      CogPolygon p = b.GetBoundary(); 
      if( b.Area > 500) //标注用户的选择
      { p.Color = CogColorConstants.Yellow;
        p.LineWidthInScreenPixels = 5;
        p.LineStyle = CogGraphicLineStyleConstants.Solid;
        gc.Add(p); 
      }
   ```
- CogMisc 杂项
   ```csharp
  CogMisc.RadToDeg(弧度)//将弧度转为角度
    ```
- 简单脚本获取控件
  ```csharp
  Tools.CogIDTool1.Results[0]
  ```

## visionPro工具
### **ImageSource** 加载图片
- 本地数据：打开文件、打开文件夹
- 照相机

### **CogAcqFifoTool**
- 添加照相机

### **CogBlobTool斑点工具**

    - 角度
    - 面积
    - BoundHeight 边界高度

### **CogCaliperTool**
- 卡尺工具

### **CogCNLSearchTool**
- 基于像素值模板进行匹配
- 样式比较单一时使用，不支持旋转，匹配速度快

### CogDataAnalysisTool 数据分析工具

### **CogImageFileTool**
- 加载本地图片文件
- 将图片保存到本地：idb格式
### **CogPatInspectTool**
- 功能：比价输入图像的特征和训练模板的特征并产生高亮差异图

### **CogPMAlignTool(定位查找工具)**
- 基于边缘特征模板进行匹配
- 掩摸器使用方法 （使用紫红色遮挡住不稳定特征）
- 建摸器使用方法（忽略极性，可以设置特征权重比例）
- 模版匹配

### **CogResultAnalysisTool**
- 输出结果

### **CogPMAlignMultiTool(定位查找工具)**
   - 多模版匹配

### **CogSearchMaxTool**
   - 对小细节更加精确
   - 可以对彩色图像进行识别

### **CogToolBlock**
- 模块工具

### **CogToolGroup**
- 将多个工具组合成一个逻辑集合

### **CogHistogramTool**
   - 检测区域灰度值

### **Calibration & Fixturing 标定和空间坐标系建立的工具**
1. CogCalibCheckerboardTool 校准工具，是返回值更具有意义
2. CogCalibNPointToNPointTool 标定工具
3. CogFixtureNPointToNPointTool将程序坐标空间定位至图像内容空间
4. CogFixtureTool 定位工具
   - 建立基于图像自身特征的定位坐标空间
   
### **Color**
1. CogColorMatchTool 颜色匹配工具
2. CogColorExtractorTool从彩色图像中抽取像素来创建灰度图像
3. CogColorSegmenterTool 从彩色图像中分离像素
4. CogCompositeColorMatch 从彩色图像中检查颜色容量

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
4. CogFindLineTool 找线工具
5. CogFitCircleTool 拟合圆
6. CogFitEllipseTool 拟合椭圆
7. CogFitLineTool 拟合直线
8. CogMultiLineFinderTool 多线查找工具
### **Ceometry-Intersection 相交工具**
1. CogIntersectCircleCircleTool 圆与圆相交
2. CogIntersectLineCircleTool 直线与圆相交
3. CogIntersectLineEllipseTool 直线与椭圆相交
4. CogIntersectLineLineTool 直线与直线相交
5. CogIntersectSegmentCircleTool 线段与圆相交
6. CogIntersectSegmentLineTool 线段与直线相交
7. CogIntersectSegmentEllipseTool 线段与椭圆相交
8. CogIntersectSegmentSegmentTool 线段与线段相交
### **Ceometry-Measurement 测量工具**
1. CogAngleLineLineTool 计算两条直线的夹角
2. CogAnglePointPointTool 两点组成的线段的角度
3. CogDistanceCircleCircleTool 两圆最短的距离
4. CogDistanceLineCircleTool 计算圆与直线的距离
5. CogDistanceLineEllipseTool 计算椭圆与直线的距离
6. CogDistanceLineLineTool 计算两条直线的距离
7. CogDistancePointCircleTool 计算点到圆的距离
8. CogDistancePointEllipseTool 计算点到椭圆的距离
9. CogDistancePointLineTool 计算点到直线的距离
10. CogDistancePointPointTool 计算两点之间的距离 
11. CogDistanceSegmentLineTool 计算点到线段的距离
12. CogDistanceSegmenCircleTool 计算线段到圆的距离
13. CogDistanceSegmenEllipseTool 计算线段到椭圆的距离
14. CogDistanceSegmentSegmentTool 计算线段到线段的距离
### **ID & Verification**
1. CogOCRMAXTool 光学字符识别工具
2. CogOCVMAXTool 光学字符验证工具
3. CogIDTool 识别解码工具
###  **Image Processing 图像处理模块**
1. CogAffineTransformTool 仿射工具
2. CogCopyRegionTool 复制图像工具 
3. CogHistogramTool 直方图统计工具
4. CogImageConvertTool 将彩色图像转换为灰度图像
5. CogIpOneImageTool 图像处理工具
   - 灰度形态调整
     - 腐蚀 open
     - 膨胀 Dilate
   - 中值n*m 
   - 高通过滤器
   - 翻转旋转
   - 均衡 (增强对比度)
   - 量化
6. CogIpTwoImageSubtractTool 对两张图片灰度进行相减




