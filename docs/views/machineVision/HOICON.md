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
### threshold 阈值分割
*  将GrayImage图片进行二值化处理，赋值给Region变量  
`threshold(GrayImage,Region,128,255)`
### connection 连通域分析
*  将Region变量进行连通域分析，赋值给ConnectedRegions变量      
`connection(Region,ConnectedRegions)`
### select_sharp 借助形状特征选择区域
*   筛选ConnectedRegions变量中面积在150到99999之间的区域，赋值给SelectedRegions变量   
`select_sharp(ConnectedRegions,SelectedRegions,'area','and',150,99999)` 
### area_center 获取区域的中心位置
*  获取到SelectedRegions图片的面积和中心原点  
`area_center(SelectedRegions,Area,Row,Column)` 
### get_image_size 获取照片的宽高
* 获取照片的宽高并赋值给Height,Width变量
`get_image_size(Image,Height,Width)`
### hom_mat2d_identity 获取图片的矩阵
* 获取图片的矩阵赋值给HomMat2D
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


## 文件
### read_image 读取图片文件
* 读取图片文件，赋值给Image变量  
`read_image(Image,'clip')`

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
### emphasize
* 增强图像的对比度 将Mask图片进行增强，赋值给Emphasize变量  
`emphasize(Mask,Emphasize,9,9,1,0)`
### dev_display
* 修改显示的图像部分  将Emphasize图片显示在WindowID窗口上，显示部分为Rectangle矩形框  
`dev_set_part(Row1,Column1,Row2,Column2)`
