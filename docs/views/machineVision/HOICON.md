---
outline: deep
---
# HaIcon
---
杂项写法

````HaIcon
*角度转弧度
rad(0)

num:=[1,2,3,4,5,6,7,8,9]
*获取元组长度
tuple_length(nums,Length)
````
### 引入文件加所有文件
 助手 -> 打开新的 Image Acquisition -> 点击图像文件 -> 选择路径 —> 点击代码生成 -> 点击插入代码
# 算子
## 图像
### rgb1_to_gray 彩色转灰度图像
*   将Image图片转为灰度图片赋值给GrayImage变量  
`rgb1_to_gray(Image,GrayImage)`
### mirror_image 镜像翻转图像
* 将Image图片进行镜像翻转，赋值给mirrorImage变量 （row垂直翻转，column水平翻转）  
`mirror_image(Image,mirrorImage,'row')`

### fill_up 填充连通域
*  将ConnectedRegions变量进行填充，赋值给FilledRegions变量  
`fill_up(ConnectedRegions,FilledRegions)`
### shape_trans 变换区域形状，是轮廓更加平滑
*  将FilledRegions变量进行轮廓形状拟合，赋值给FilledRegions变量  
`shape_trans(FilledRegions,FilledRegions,'outer_circle')`
### difference 计算差值
*  计算Image和mirrorImage的差值，赋值给Difference变量  
`difference(Image,mirrorImage,Difference)`
### erosion_circle 腐蚀操作
*  将Difference变量进行腐蚀操作，腐蚀程度为Size，赋值给Erosion变量  
  `erosion_circle(Difference,Erosion,Size)`

### gray_opening_shape 灰度开运算

- 开运算是形态学处理中的一种基本操作，他首先对图像进行腐蚀（erosion）,然后进行膨胀（dilation)

  这种组合有助于去除小的明亮的活着暗淡的区域（即噪声），同时保持图像上的整体形状和结构` gray_opening_shape(Image,ImageOpening,7,7,'octagon')`

### opening_shape 开运算

### gray_closing_shape 灰度闭运算

- 闭运算是形态学处理中的一种基本操作，他首先对图像进行膨胀（dilation),然后进行腐蚀（erosion）

  这种组合有助于填充图像中的小孔或黑色区域，同时平滑图像的轮廓，但不会显著的改变他们的总体位置和形状。` gray_closing_shape(Image,ImageClosing,7,7,'octagon')`

### region_to_bin 区域二值化

*  将Erosion变量进行二值化处理，显示区域的灰度值为255，背景为0，生成图像的宽为656，高为492， 赋值给Region变量  
`region_to_bin(Erosion,Region,255,0,656,492)`
### select_sharp 借助形状特征选择区域
*   筛选ConnectedRegions变量中面积在150到99999之间的区域，赋值给SelectedRegions变量      
`select_sharp(ConnectedRegions,SelectedRegions,'area','and',150,99999)` 
### count_obj 计算连通域数量
* 计算ConnectedRegions变量中连通域的数量，赋值给Number变量  
`count_obj(SelectedRegions,Number)`
### area_center 获取区域的中心位置
*  获取到SelectedRegions图片的面积和中心原点  
`area_center(SelectedRegions,Area,Row,Column)`
### smallest_rectangle1 获取最小外接矩形
*  获取到SelectedRegions图片的最小外接矩形,拿到每一个矩形的信息赋值给Row,Column,Phi,Length1,Length2
`smallest_rectangle2(SelectedRegions,Row,Column,Phi,Length1,Length2)`
### read_ocr_multi_class_mlp 读取OCR模型
*  读取OCR模型，赋值给ModelID变量  
`read_ocr_multi_class_mlp('Indudustrial_0-9A-Z_NoRej.omc',OCRHandle)`
### skeleton 获取骨架
*  获取到SelectedRegions图片的骨架，赋值给Skeleton变量  
`skeleton(SelectedRegions,Skeleton)`
### gray_histo 计算灰度直方图分布
*  
`gray_histo(Image,Image,AbsoluteHisto,RelativeHisto)`
### histo_to_thresh 根据图像直方图自动确定阈值，从而将灰度图像转化为二值图像
*
`histo_to_thresh(RelativeHisto,8,MinThresh,MaxThresh)`

## 图像分割

### threshold 阈值分割

*  将GrayImage图片进行二值化处理，赋值给Region变量  
   `threshold(GrayImage,Region,128,255)`

### dyn_threshold 动态阈值分割

- 局部阈值分割操作

  ` dyn_threshold(ImageOpening,ImageClosing,RegionDynThresh,75,'not_equal')`

### auto_threshold 使用直方图确定阈值对图像进行分割

- 基于阈值，分割成前景（亮区域）和后景（暗区域）

- 会自动计算阈值，根据阈值划分成不同的区域（Region）

  `auto_threshold(Image,Regions,5)`

### connection 连通域分析

*  将Region变量进行连通域分析，赋值给ConnectedRegions变量      
   `connection(Region,ConnectedRegions)`

### sort_region 根据区域的相对位置进行排序
**参数：** ConnectedRegions：要排序的区域 SortRegions：排序后的区域 'character'：按照字符排序 'true'：增加或减少 'row'：按照行排序   
`sort_region(ConnectedRegions,SortRegions,'charscter','true','row')`
### union1 返回所有输入区域的并集

- 将每个单独的对象的合并成一个对象

  `union1(ConnectedRegions,union1Region)`

## 图像对比

### create_shape_model 创建一个要匹配的模板

**参数：**ImageReduced1输入的模型	'auto'金字塔等级的数量	rad(0)角度开始	rad(360)角度范围	auto角度的步长(分辨率) 	auto优化类型	'use_polarity'Match指标	'auto'对比度阈值	'auto'搜索图像中对象的最小对比度	ModelID模型的句柄`create_shape_model(ImageReduced1,'auto',rad(0),rad(360),'auto','auto','use_polarity','auto','auto',ModelID)`

### find_shape_model 查找图像中形状模型的最佳匹配项

**参数：**Image输入的图像	ModelID模型的句柄	rad(0)最小旋转	rad(360)旋转的角度范围	0.5最低接受分数	1匹配的数量	0.5实例的最大重叠数	'least_squares'子像素	0匹配使用金字塔等级数	0.9搜索启发式的贪婪模式	Row1找到模型的行坐标	Cloumn1找到模型的列坐标	Angle找到的模型实例的旋转角度	Score找到的模型的实例分数`find_shape_model(Image,ModelID,rad(0),rad(360),0.5,1,0.5,'least_squares',0,0.9,Row1,Cloumn1,Angle,Score)`

### dev_display_shape_matching_results 显示匹配结果

**参数：** ModelID输入的匹配模型	'red'输入匹配结果后用什么颜色展示	Row1输入匹配的y坐标的位置	Column1输入匹配的x坐标的位置	Angle输入匹配的对应的角度	1水平方向的缩放比例	1垂直方向的缩放比例	0找到的模型实例的索引`dev_display_shape_matching_results(ModelID,'red',Row1,Column1,Angle,1,1,0)`

### vector_angle_to_rigiid 计算来自点和角度的刚性仿射变换

**参数：**Row 原始点的行坐标	Column原始点的列坐标	0原始点的旋转角度	Row1 变换点的行坐标	Column1变换点的列坐标	Angle变换点的旋转角度	HomMat2D输出的转换矩阵

`vector_angle_to_rigiid(Row,Column,0,Row,Column1,Angle,HomMat2D)`

## 仿射变换

### hom_mat2d_identity 获取图片的矩阵常量
* 获取图片的常量矩阵赋值给HomMat2D  
  `hom_mat2d_identity(HomMat2D)`
### hom_mat2d_translate 平移矩阵
*  将HomMat2D矩阵进行平移，Row为行，Column为列，赋值给HomMat2DTranslate变量  
   `hom_mat2d_translate(HomMat2D,Height/2-Row,Width/2-Column,HomMat2DTranslate)`
### hom_mat2d_rotate 旋转矩阵
*  将HomMat2D矩阵进行旋转，Angle为角度,Height/2、Width/2为旋转的中心原点，赋值给HomMat2DRotate变量
   `hom_mat2d_rotate(HomMat2D,Angle,Height/2,Width/2,HomMat2DRotate)`
### hom_mat2d_scale 缩放矩阵
*  将HomMat2D矩阵进行缩放，XFactor为X轴缩放比例，YFactor为Y轴缩放比例，Height/2、Width/2为缩放的中心原点，赋值给HomMat2DRotate变量
   `hom_mat2d_scale(HomMat2D,2,2,Height/2,Width/2,HomMat2DRotate)`
### affine_trans_image  仿射变换
*  将Image图片根据HomMat2DRotate矩阵进行仿射变换，将变换后的图像赋值给ImageAffineTrans变量
   `affine_trans_image(Image,ImageAffineTrans,HomMat2DRotate,'constant','false')`

### affine_trans_region 对区域应用任意仿射2D变换

**参数：** RegionUnion要旋转和缩放的区域	RegionAffineTrans变换过的图像	HomMat2D输入变换矩阵	nearest_neighbor应该使用插值来完成转换吗`affine_trans_region(RegionUnion,RegionAffineTrans,HomMat2D,'nearest_neighbor')`

## 图像增强

### invert_image 图像取反算子
* 将GrayImage图片进行取反操作，赋值给InvertImage变量  
`invert_image(GrayImage,InvertImage)`
### emphasize  增强图像的对比度
* 增强图像的对比度 将Mask图片进行增强，赋值给Emphasize变量  
  `emphasize(Mask,Emphasize,9,9,1,0)`
### scale_image 图像缩放灰度
* 将Emphasize图片进行缩放灰度，赋值给ScaleImage变量  
`scale_image(Emphasize,ScaleImage,0,255)`
### equ_hist_image 直方图均衡化
* 将ScaleImage图片进行直方图均衡化，赋值给EquImage变量  
`equ_hist_image(ScaleImage,EquImage)`
## 图像噪声
### gauss_distribution 生成高斯噪声分布
* 生成高斯噪声分布，均值为20，将噪声分布赋值给Distribution变量  
`gauss_distribution(20,Distribution)`
### add_noise_distribution 向图像添加噪声
* 将Distribution噪声分布添加到GrayImage图片中，赋值给ImageNoise变量  
`add_noise_distribution(GrayImage,ImageNoise,Distribution)`
### sp_distribution 生成椒盐噪声分布
* 生成30百分比的盐（白色像素），40胡椒粉（黑噪声像素），将噪声分布赋值给Distribution  
`sp_distribution(30,40,Distribution)`
### mean_image  均值滤波,通过平均平滑
* 将Image图片进行均值滤波，滤镜遮罩高度为3宽度为3的图片赋值给Mean变量  
`mean_image(Image,Mean,3,3)`

## 图像锐化
### sobel_amp 使用Sobel算子检测边缘（振幅） （图像锐化）
* 使用Sobel算子检测边缘（振幅） 将Image图片进行边缘检测，过滤类型为sum_abs,滤镜遮罩大小为3，赋值给Amp变量  
` sobel_amp(Image,Amp,'sum_abs',3)`
### laplace 拉普拉斯算法
* 使用拉普拉斯算法将Image图片进行边缘检测，滤镜遮罩大小为3，赋值给Laplace变量  
`laplace(Image,ImageLaplace,'signed',3,'n_4')`
## 频域图像处理
### fft_generic 快速傅里叶变换
* 将Image图片进行快速傅里叶变换，赋值给ImageFFT变量 ('to_freq'正变换,'from_freq'反变换)  
`fft_generic(Image,ImageFFT,'to_freq',-1,'sqrt','dc_center','complex')`
### gen_lowpass 生成低通滤波器模型
* 生成一个低通滤波器，赋值给ImageLowpass变量，半径为0.1，类型为none，中心为dc_center，宽高为Width,Height  
`gen_lowpass(ImageLowpass,0.1,'none','dc_center',Width,Height)`
### convol_fft 
* 将ImageFFT图片进行卷积操作，赋值给ImageFFTConv变量  
`convol_fft(ImageFFT,ImageLowpass,ImageFFTConv)`

## 文件
### gen_image_const 生成一个常量图像
* 设置一个单通道图片，大小 宽为12像素，高为9像素  
`gen_image_const(Image,'byte',12,9)`
### set_grayval 设置某个像素点的灰度值
* 设置Image图片中坐标为0,0的像素点灰度值为255  
`set_grayval(Image,0,0,255)`
### write_image 写入图片文件
* 将Image图片写入到文件中，文件名为clip 无法识别的区域用黑色代替（灰度值为0）  
`write_image(Image,'pnd',0,'clip.png')`
### read_image 读取图片文件
* 读取图片文件，赋值给Image变量  
`read_image(Image,'clip')`
### zoom_image_factor
* 将Image图片进行缩放，赋值给ZoomImage变量  
`zoom_image_factor(Image,ZoomImage,0.5,0.5,'constant')`
### get_image_size 获取照片的宽高
* 获取照片的宽高并赋值给Height,Width变量  
  `get_image_size(Image,Height,Width)`


## 窗口
### dev_open_window 打开一个窗口
* 打开一个窗口  位置在0，0，宽高为自适应，背景为黑色，赋值给WindowID变量  
```dev_open_window(0,0,-1,-1,'black',WindowID)```
### dev_close_window 关闭窗口
* 关闭WindowID窗口  
  `dev_close_window(WindowID)`
### dev_display
* 将Image图片显示在窗口上  
`dev_display(Image)`
### draw_rectangle1
* 在WindowID窗口上绘制一个矩形将坐标位置赋值给Row1,Column1,Row2,Column2  
`draw_rectangle1(WindowID,Row1,Column1,Row2,Column2)`
### gen_rectangle1
* 根据绘制的矩形窗口坐标创建一个矩形框  
`gen_rectangle1(Rectangle,Row1,Column1,Row2,Column2)`
### reduce_domain
* 缩小图像的区域 将Image图片根据Rectangle矩形框进行裁剪，赋值给Mask变量  
`reduce_domain(Image,Rectangle,Mask)`
### dev_set_part
* 修改显示的图像部分  将Emphasize图片显示在WindowID窗口上，显示部分为Rectangle矩形框  
`dev_set_part(Row1,Column1,Row2,Column2)`
### dev_disp_text
* 在windows窗口上显示文本，文本内容为Text  
`dev_disp_text(Text,'window',Row,Column,'black',[],[])`

### set_display_font 设置字体
* 设置窗口显示的字体，字体大小为26，字体类型为mono，字体粗体为true，斜体为false  
`set_display_font(WindowID,26,'mono','true','false')`
## 颜色
### SetColored 设置颜色数量
* 设置颜色数量为12    
  `SetColored(Image,12)`

### dev_set_colored 设置颜色数量
