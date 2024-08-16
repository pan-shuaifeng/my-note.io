# winform窗体

## 控件

### Form窗口

| 属性            | 解释              | 值           |  
 |---------------|-----------------|-------------|  
| Text          | 窗口左上角的名字        | type string |
| STartPosition | 窗口出现的位置         | type enum   |
| MaximizeBox   | 禁止和启用窗口最大化      | type bool   |
| MinimizeBox   | 禁止和启用窗口最小化      | type bool   |
| AutoSizeMode  | 窗口是否可以使用拖动来修改大小 | type bool   |
| ShowInTaskbar | 是否在任务栏显示        | type bool   |
| WindowState   | 窗体的初始状态，最大化，最小化 | type enum   |
| icon          | 图标              | type file   |

| 事件          | 解释       |   
|-------------|----------| 
| Load        | 加载时 初始化  |
| SizeChanged | 窗体大小发生变化 |
| FormClosing | 窗体关闭前    |

### button按钮

| 属性        | 解释         | 值         |  
 |-----------|------------|-----------|  
| TextAlign | 字体在按钮内部的位置 | type enum |
| Enabled   | 按钮的启用和禁用   | type bool |
| BackColor | 背景颜色       | type T    |

| 事件         | 解释     |   
|------------|--------| 
| Click      | 点击事件   |
| MouseMove  | 鼠标移动事件 |
| MouseLeave | 鼠标移出   |
| MouseHover | 窗体关闭前  |
| Enter      | 窗体关闭前  |
| Leave      | 窗体关闭前  |

### textBox文本框

| 属性           | 解释              | 值         |  
 |--------------|-----------------|-----------|  
| MultiLine    | 多行文本            | type bool |
| ScrollBars   | 显示滚动条（仅限多行文本使用） | type enum |
| PasswordChar | 把输入的文本使用一个字符替代  | type char |
| ReadOnly     | 是否只读            | type bool |
| TextAlign    | 文字在输入框的方向       | type enum |

| 事件           | 解释      |   
|--------------|---------| 
| TextChanged  | 文字改变时触发 |
| TextLength   | 获取文本长度  |
| SelectedText | 获取已选文本  |

### Panel盒子

**控件**

- Panel
- FlowLayoutPanel 流式布局
- TablelayoutPanel 表格布局
- GroupBox (类似Panel 多加了个标题)

**位置**  
上:Top、下：Bottom、左：Left、右：Right、中：center

| 属性            | 解释              | 值         |  
 |---------------|-----------------|-----------|  
| FlowDirection | 设置排列方式          | type enum |
| Anchor        | 控件的上下左右距离父元素的距离 | type enum |
| Dock          | 设置在父元素中上下左右的布局  | type enum |

### ComboBox下拉列表

| 属性             | 解释          | 值           |  
 |----------------|-------------|-------------|  
| items          | 集合          | type T      |
| DropDownStyle  | 显示的模式       | type T      |
| DropDownWidth  | 展开后下拉框的总体宽度 | type int    |
| DropDownHeight | 展开后下拉框的总体高度 | type int    |
| SelectedIndex  | 选中的索引       | type int    |
| Text           | 选中的文本       | type string |

| 事件                       | 解释                   |
|--------------------------|----------------------|
| SelectedIndexChanged     | 选中的索引改变的时候           |
| SelectionChangeCommitted | 下拉框因选中而关闭的时候（选中自身也算） |   

### 计时器Timer

| 属性       | 解释    | 值         |  
 |----------|-------|-----------|  
| Interval | 时间间隔  | type int  |
| Enabled  | 显示的模式 | type bool |

| 事件   | 解释           |
|------|--------------|
| Tick | 每一段时间需要执行的代码 |

### 标签 Label

| 属性       | 解释     | 值         |  
 |----------|--------|-----------|  
| AutoSize | 能否改变大小 | type bool |
| Font     | 改变文字大小 | type T    |

### 单选框RedioButton(搭配分组控件使用)

| 属性          | 解释      | 值              |  
 |-------------|---------|----------------|  
| Checked     | 是否可以被选中 | type bool      |
| AutoSize    | 改变大小    | type bool      |
| TextAlign   | 改变文字的位置 | type enum      |
| padding     | 内边距     | type enum(int) |
| RightToLeft | 勾选框位置   | type enum      |
| RightToLeft | 勾选框位置   | type enum      |

| 事件             | 解释             |
|----------------|----------------|
| CheckedChanged | checked属性发生变化时 |

### 复选框CheckBox

| 属性          | 解释      | 值              |  
 |-------------|---------|----------------| 
| Checked     | 是否可以被选中 | type bool      |
| CheckState  | 状态      | type enum      |
| AutoSize    | 改变大小    | type bool      |
| TextAlign   | 改变文字的位置 | type enum      |
| padding     | 内边距     | type enum(int) |
| RightToLeft | 勾选框位置   | type enum      |
| RightToLeft | 勾选框位置   | type enum      |

| 事件                | 解释                |
|-------------------|-------------------|
| CheckedChanged    | checked属性发生变化时    |
| CheckStateChanged | checkState属性发生变化时 |

### 图片pictureBox

| 属性       | 解释     | 值          |  
 |----------|--------|------------| 
| image    | 图片路径   | type Image |
| SizeMode | 适应屏幕选项 | type enum  |

### 文件选择框 OpenFileDialog
| 事件         | 解释                          |
|------------|-----------------------------|
| ShowDialog | 打开对话框（返回值是DialogResult枚举类型） |  

## 拓展

1. ```System.Speech //语音类```

```csharp
 //实例话语音类
 SpeechSynthesizer speech = new SpeechSynthesizer();
 
 //以同步的方法说出字符串的内容
 speech.Speak("你好");
 ```
