# HaIcon
## 算子
* 彩色转灰度图像  将Image图片转为灰度图片赋值给GrayImage变量  
`rgb1_to_gray(Image,GrayImage)`
* 阈值分割 将GrayImage图片进行二值化处理，赋值给Region变量  
`threshold(GrayImage,Region,128,255)`
* 连通域分析 将Region变量进行连通域分析，赋值给ConnectedRegions变量      
`connection(Region,ConnectedRegions)`
* 借助形状特征选择区域  筛选ConnectedRegions变量中面积在150到99999之间的区域，赋值给SelectedRegions变量   
`select_sharp(ConnectedRegions,SelectedRegions,'area','and',150,99999)` 



## 文件
* 读取图片文件，赋值给Image变量  
`read_image(Image,'clip')`

## 窗口
* 打开一个窗口  位置在0，0，宽高为自适应，背景为黑色，赋值给WindowID变量  
```dev_open_window(0,0,-1,-1,'black',WindowID)```
* 将Image图片显示在窗口上  
`dev_display(Image)`
* 在WindowID窗口上绘制一个矩形将坐标位置赋值给Row1,Column1,Row2,Column2  
`draw_rectangle1(WindowID,Row1,Column1,Row2,Column2)`
* 根据绘制的矩形窗口坐标创建一个矩形框  
`gen_rectangle1(Rectangle,Row1,Column1,Row2,Column2)`
* 缩小图像的区域 将Image图片根据Rectangle矩形框进行裁剪，赋值给Mask变量  
`reduce_domain(Image,Rectangle,Mask)`
* 增强图像的对比度 将Mask图片进行增强，赋值给Emphasize变量  
`emphasize(Mask,Emphasize,9,9,1,0)`
* 修改显示的图像部分  将Emphasize图片显示在WindowID窗口上，显示部分为Rectangle矩形框  
`dev_set_part(Row1,Column1,Row2,Column2)`
