# XML文件操作

## 定义
- XML 是 eXtensible Markup Language 的缩写, 即可扩展标记语言。
- 它是一种可以用来创建自定义的标记语言,由万维网协会(W3C)创建，用来克服HTML的局限。
- 从使用功能上看, XML 主要用于数据的存储，而 HTML 主要用于数据显示。

## XML 文档的格式要求
- 确定且唯一的根元素
- 开始标签和结束标签匹配
- 元素标签的正确嵌套
- 属性值要用引号括起来
- 同一个元素的属性不能重复

## 操作XMl 
### 添加xml文件
```csharp
// 实例化xml操作对象
XmlDocument xDoc = new XmlDocument();

// 创建一个xml文档所需要的变量  参数1:版本号 参数2：编码格式 参数3: 使用yes no
XmlDeclaration xmlDeclaration = xDoc.CreateXmlDeclaration("1.0","utf-8","yes");

//添加xml声明
xDoc.AppendChild(xmlDeclaration);

//一个xml文档,必须有根节点
//创建根节点
XmlElement elem = xDoc.CreateElement("students");

//把节点添加到xml文档中
xDoc.AppendChild(elem);

 //给节点添加属性
 elem1.SetAttribute("Name", "张三");
 elem1.SetAttribute("Class", "三年一班");
 elem1.SetAttribute("学号", i.ToString());

 //添加第三级节点
 XmlElement elem1_1 = xDoc.CreateElement("语文成绩");

 //将第三级节点放到第二级节点的下面
 elem1.AppendChild(elem1_1);
 
//增加节点中的数据
elem1_1.InnerText = random.Next(60, 100).ToString();

//添加第三级节点
XmlElement elem1_2 = xDoc.CreateElement("数学成绩");

//将第三级节点放到第二级节点的下面
elem1.AppendChild(elem1_2);
elem1_2.InnerText = random.Next(60, 100).ToString();

xDoc.Save("student.xml");
```

### 读取xml文件
```csharp

// 实例化xml操作对象
XmlDocument xDoc = new XmlDocument();

// 根据文件名加载XML文件
xDoc.Load("student.xml");

//获取根节点students
XmlNode xmlNode =  xDoc.DocumentElement;

//获取根节点里面的子节点
XmlNodeList  nodeList=  xmlNode.ChildNodes;

  foreach (XmlNode item in nodeList)
  {
      //类型显示转换  XmlElement可以访问节点的属性
      XmlElement xe = (XmlElement)item;
      string name =  xe.GetAttribute("Name");
      string classMap =  xe.GetAttribute("Class");

      XmlNodeList childNodes = item.ChildNodes;
      Console.WriteLine(name + " " + classMap);
      foreach ( XmlNode xnc in childNodes)
      {
          XmlElement xncMap  = (XmlElement)xnc;
          string kecheng = xncMap.Name;
          string chengji = xncMap.InnerText;
          Console.WriteLine(kecheng+" "+chengji);
      }
  }
  Console.ReadKey();

 // 方案二：创建 XML 读取器
XmlTextReader textReader = new XmlTextReader(@"XMLFile1.xml");
 // 循环查询
while (textReader.Read())
            {
                if (textReader.Name == "Version")
                {
                    this.statusLabelVN.Text = textReader.GetAttribute("versionNum");
                    this.statusLabelTime.Text = textReader.GetAttribute("pTime");
                    break;
                }
            }

```
