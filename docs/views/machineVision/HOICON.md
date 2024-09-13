---
outline: deep
---
# HaIcon
--- 
# 算子
## 图像
### rgb1_to_gray 彩色转灰度图像
*   将Image图片转为灰度图片赋值给GrayImage变量  
`rgb1_to_gray(Image,GrayImage)`
### mirror_image 镜像翻转图像
* 将Image图片进行镜像翻转，赋值给mirrorImage变量 （row垂直翻转，column水平翻转）  
`mirror_image(Image,mirrorImage,'row')`
### threshold 阈值分割
*  将GrayImage图片进行二值化处理，赋值给Region变量  
`threshold(GrayImage,Region,128,255)`
### connection 连通域分析
*  将Region变量进行连通域分析，赋值给ConnectedRegions变量      
`connection(Region,ConnectedRegions)`
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
### mean_image  均值滤波
* 将Image图片进行均值滤波，滤镜遮罩高度为3宽度为3的图片赋值给Mean变量  
`mean_image(Image,Mean,3,3)`
### sobel_amp 使用Sobel算子检测边缘（振幅） （图像锐化）
* 使用Sobel算子检测边缘（振幅） 将Image图片进行边缘检测，过滤类型为sum_abs,滤镜遮罩大小为3，赋值给Amp变量   
`sobel_amp(Image,Amp,'sum_abs',3)`
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

### dev_display
* 修改显示的图像部分  将Emphasize图片显示在WindowID窗口上，显示部分为Rectangle矩形框  
`dev_set_part(Row1,Column1,Row2,Column2)`

## 颜色
### SetColored 设置颜色数量
* 设置颜色数量为12  
`SetColored(Image,12)`
