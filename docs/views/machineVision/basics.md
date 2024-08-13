# c#基础

## 调试

- Console

	-   换行打印：Console.WriteLine()
	-   不换行打印 Console.Write()
	-   等待按键按下：Console.ReadKey();
	-  获取按下的案件（return:string类型）：Console.ReadLine()

- Debug

	- 窗体应用中在调试控制台打印：Debug.WriteLine()
	- 窗体应用中在调试控制台打印：Debug.Write()

## 基本语法

- 不使用顶级语句
```csharp
  using System;
  
  namespace MyApp
  {
      class Program
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Hello, World!");
          }
      }
  }
  ```
- 顶级语句
```csharp
  using System;
  using System.Linq;
  
  // 顶级语句中的变量声明
  int number = 42;
  string message = "The answer to life, the universe, and everything is";
  ```
## 数据类型

- 值类型

	- bool:布尔值
	- decimal：120位精确的十进制，28-29有效位数
	- double：64位双精度浮点型
	- float：32位单精度浮点型
	- byte：8位无符号整数
	- char：16位Unicode字符
	- int：32位有符号整数类型
	- long:64位有符号整数类型
	- short:16位有符号整数类型
	- uint:32位无符号整数类型
	- ulong:64位无符号整数类型

- 引用类型

	- object:对象类型

		- 定义：通用类型系统中所有数据类型的终极基类

	- dynamic:动态类型

		- 定义：可以存储任何类型的值在动态数据类型变量中

	- string:字符串类型

		- 定义：允许给变量分配任何字符串值，它是从对象类型派生的
		- 属性

			- Chars:从当前String对象中获取Char对象的指定位置
			- Length:在当前的String对象中获取字符串

		- 方法

			- ComPare(string strA,string strb):比较两个指定的 string 对象，并返回一个表示它们在排列顺序中相对位置的整数。该方法区分大小写 第三个参数可选:bool ignoreCase  
bool为真方法不区分大小写  
			- Concat(string str0,string str1):连接两个string对象  
			- Contains:表示指定string对象是否出现在字符串中的值
			- Copy:创建一个指定字符串具有相同值的新的String对象
			- EndsWith:判断string对象的结尾是否匹配指定的字符串
			- Equals(string):判断string对象是与指定的string对象具有相同的值
			- IndexOf:返回指定 Unicode 字符在当前字符串中第一次出现的索引，索引从 0 开始。
			- IsNullOrEmpty:判断字符串是否为空或者null
			- Join( string separator, string[] value ):连接一个字符串数组中的所有元素，使用指定的分隔符分隔每个元素。
			- ToLower():把字符串转为小写并返回
			-  ToUpper()：把字符串转为大写并返回
			- Trim()：移除当前 String 对象中的所有前导空白字符和后置空白字符。

	- 指针类型
	
		- 定义：指针类型变量存储另一种类型的内存地址

## 类型转换

- 隐式转换

	- 定义：不需要编写代码来指定转换，编译器回自动执行 

	  将较小范围的数据类型转换为较大的数据类型是，编译器会自动完成类型转换
	  示例：
	         byte b= 10;
	         int i = b;
	  
	
- 显式转换

	- 定义：将较大范围的数据类型转换为较小范围的数据类型时，或者将一个对象类型转换为另一个对象类型时需要使用强制类型转换符号进行显示转换，强制转换会造成数据丢失
	- 示例：
     int i=10;
     byte b = (byte)i;
     int i=10;
     string str = i.ToString();

- 类型转换的方法

	- c#内置转换类型System.Convert：转换不成功会刨除异常

		- ToBoolean：把类型转换为布尔	
		- ToByte:把类型转换为字节类型
		- ToChar:把类型转换为Unicode字符
		- ToDateTime:把整数或字符串类型转换为日期-时间结构
		- ToDecimal:把浮点型或整数类型转换为十进制类型
		- ToDouble:把类型转换为双精度浮点型
		- ToInt16：把类型转换为16位整数类型
		- ToInt32：把类型转换为32位整数类型
		- ToInt64：把类型转换为64位整数类型
		- ToSbyte：把类型转换为有符号的字节类型
		- ToSingle:把类型转换为小浮点数类型
		- ToString:把类型转换为字符串类型
		- ToType:把类型转换为指定类型
		- ToUInt16:把类型转换为16位无符号的整数类型
		- ToUInt32:把类型转换为32位无符号的整数类型
		- ToUInt64:把类型转换为64位无符号的整数类型

	- Parse

	  string str = "123.45";
	  double d = double.Parse(str);
	  
	- TryParse

	  类似于Parese
	  
	  string str = "123.45";
	  double d;
	  bool success = double.TryParse(str, out d);
	  
	  if (success) {
	      Console.WriteLine("转换成功: " + d);
	  } else {
	      Console.WriteLine("转换失败");
	  }	
	  
	- 自定义类型转换
   ```csharp
    示例：
    using System;
  
    public class Fahrenheit
    {
        public double Degrees { get; set; }
        public Fahrenheit(double degrees)
        {
            Degrees = degrees;
        }
    
        // 隐式转换从Fahrenheit到double
        public static implicit operator double(Fahrenheit f)
        {
            return f.Degrees;
        }
    
        // 显式转换从double到Fahrenheit
        public static explicit operator Fahrenheit(double d)
        {
            return new Fahrenheit(d);
        }
    }
   ```
        - implicit
        - explicit

  - ToString()：使用的是Object里面的方法，可以重写

## 变量作用域

- 局部变量：在方法，循环，条件语句等代码块中声明的变量时局部变量
- 块级作用域：使用{}
- 全局变量：在类的成员级别定义的变量时成员变量，在整个类中可见
- 静态变量作用域：在类级别上声明，作用域受限于其定义的类
- 循环变量作用域

  示例
  for (int i = 0; i < 5; i++)
  {
      // i 在循环体内可见
  }
  // i 在这里不可见
  
- 方法参数作用域

  示例
  void MyMethod(int parameter)
  {
      // parameter 在整个方法中可见
      // ...
  }
  
## 常量：
```csharp
const <type> <name>
```


## 运算符

- 算数运算符

	- +：把两个操作数相加
	- -：从第一个操作数中减去第二个操作数
	- *：把两个操作数相乘
	- /：分子除以分母
	- %：取模运算符，整除后的余数
	- ++：自增运算符，整数值增加 1

	  示例
	  c = a++: 先将 a 赋值给 c，再对 a 进行自增运算。
	  c = ++a: 先将 a 进行自增运算，再将 a 赋值给 c
	  
	- --：自减运算符，整数值减少 1
	
- 关系运算符

	- ==：检查两个操作数的值是否相等，如果相等则条件为真。
	- !=：检查两个操作数的值是否相等，如果不相等则条件为真。
	- \>:检查左操作数的值是否大于右操作数的值，如果是则条件为真。
	- <:检查左操作数的值是否小于右操作数的值，如果是则条件为真。
	- \>=:检查左操作数的值是否大于或等于右操作数的值，如果是则条件为真。
	- <=:检查左操作数的值是否小于或等于右操作数的值，如果是则条件为真。

- 逻辑运算符

	- &&:	称为逻辑与运算符。如果两个操作数都非零，则条件为真。
	- ||:	称为逻辑或运算符。如果两个操作数中有任意一个非零，则条件为真。
	- !:称为逻辑非运算符。用来逆转操作数的逻辑状态。如果条件为真则逻辑非运算符将使其为假。

- 位运算符
- 赋值运算符
- 其他运算符

	- sizeof():返回数据类型的大小
	- typeof():返回class的类型
	- &：返回变量的地址
	- *变量的指针
	- ?:条件表达式
	- is:判断对象是否为某一类型
	- as：强制转换，即使转换失败也不会抛出异常

- [运算符优先级:](https://www.runoob.com/csharp/csharp-operators.html)
- 运算符重载operator:
 ```csharp
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            Student s1 = new Student(10, "张三",20240806);
            Student s2 = new Student(10, "张三",20240806);
            Student s3 = s1;
  
  
           //对比的不是数据，是指针-内存地址
            Console.WriteLine(s1 == s2);//不一样，因为指向的地址不一样
            Console.WriteLine(s1 == s3);//一样，因为指向的地址一样.使用完运算符重载之后一样
        }
    }
  
 
  namespace _10运算符重载
  {
      internal class Student
      {
          private int age;
          private string name;
          private int id;
  
        
          //构造函数
          public Student(int age, string name, int id)
          {
              this.age = age;
              this.name = name;
              this.id = id;
  
          }
  
          //operator 运算符重载
          public static bool operator ==(Student s1, Student s2) {
              if (s1.age == s2.age && s1.name == s2.name && s1.id == s2.id)
              {
                  return true;
              }
              return false;
          }
  
          public static bool operator !=(Student s1, Student s2) {
              if(s1.id!= s2.id||s1.name != s2.name || s1.age != s2.age)
              {
                  return true;
              }
  
              return false;
          
          }
      }
  }
 ```
## 封装

- 访问修饰符

	- public：所有对象都可以访问；
	- private：对象本身在对象内部可以访问；
	- protected：只有该类对象及其子类对象可以访问
	- internal：同一个程序集的对象可以访问；
	- protected internal：访问限于当前程序集或派生自包含类的类型

- 其他修饰符

	- virtual：虚方法在基类声明的方法，这个方法可以被派生类重写
	- override:重写基类的方法
	- sealed:密封-派生类不能继承密封基类，派生类不能重写父类的密封方法
	- abstract：抽象类不能被实例化，只能被继承，抽象方法没有方法体，类相当于模板，抽象类相当于不完整的模板
	- static:静态修饰符，所有实例共享静态存储的值

		- 静态类：静态类不能被实例化，调用的时候通过类名调用
		- 静态方法：静态方法中只能使用静态数据

	- interface接口:接口只能被继承，类，结构体继承接口必须实现它的方法，接口是共有的，不能使用访问修饰符声明(接口可以继承多个，类只能继承一个)
	- operator：运算符重载
```csharp
	     static void Main(string[] args)
	     {
	         Console.WriteLine("Hello, World!");
	         Student s1 = new Student(10, "张三",20240806);
	         Student s2 = new Student(10, "张三",20240806);
	         Student s3 = s1;
	  
	        //对比的不是数据，是指针-内存地址
	         Console.WriteLine(s1 == s2);//不一样，因为指向的地址不一样（重载后一样，因为对比的是里面的值）
	         Console.WriteLine(s1 == s3);//一样，因为指向的地址一样
	     }
	  
	  
	  internal class Student
	  {
	      private int age;
	      private string name;
	      private int id;
	      //构造函数
	      public Student(int age, string name, int id)
	      {
	          this.age = age;
	          this.name = name;
	          this.id = id;
	      }
	      //operator 运算符重载
	      public static bool operator ==(Student s1, Student s2) {
	          if (s1.age == s2.age && s1.name == s2.name && s1.id == s2.id)
	          {
	              return true;
	          }
	          return false;
	      }
	  
	      public static bool operator !=(Student s1, Student s2) {
	          if(s1.id!= s2.id||s1.name != s2.name || s1.age != s2.age)
	          {
	              return true;
	          }
	  
	          return false;
	          
	      }
	  }
```
## 多态

- 子类构造：结构：public Zi(int actt,int age,int id):base(age,id)，调用先调用父类的有参构造，再调用子类的有参构造

## 方法

- 参数传递

	- 值参数：以复制的方法传递给形参，属于两块内存地址
	- 引用参数：使用的是同一块内存地址，在方法里面改变形参，实参也会改变

		- 使用ref：可以将值参数转换为引用参数
  ```csharp
		  using System; 
		  
		  class Program { static void Main() { 
		  
		  int number = 10; 
		  Console.WriteLine($"Before: {number}"); // 输出: 10 ModifyValue(ref number);
		   Console.WriteLine($"After: {number}"); // 输出: 20 
		  
		  }
		  
		   static void ModifyValue(ref int num) { num = 20; } }
## 可空类型
```csharp
int? i = 3;
等同于
Nullable<int> i = new Nullable<int>(3);

int i; //默认值0
int? ii; //默认值null
```
- 定义：? 单问号用于对 int、double、bool 等无法直接赋值为 null 的数据类型进行 null 的赋值，意思是这个数据类型是 Nullable 类型的
- ??:合并运算符
```csharp
  using System;
  namespace CalculatorApplication
  {
     class NullablesAtShow
     { 
        static void Main(string[] args)
        {
           double? num1 = null;
           double? num2 = 3.14157;
           double num3;
           num3 = num1 ?? 5.34;      // num1 如果为空值则返回 5.34
           Console.WriteLine("num3 的值： {0}", num3);
           num3 = num2 ?? 5.34;
           Console.WriteLine("num3 的值： {0}", num3);
           Console.ReadLine();
  
        }
     }
  }
```
  - num3 的值： 5.34
  - num3 的值： 3.14157

## 数组

- 分类

	- 一维数组：arr[] int = {};
	- 多维数组：
  int[2,2] arr ={
  new int(){1,2},
  new int(){2,3}
                     };
	- 锯齿数组（交错数组）: 
int[][] arr={
new int(){1,2,3},
new int(){2,4,5}
}

- 属性

	- IsReadOnly:获取一个值，该值指示数组是否只读
	- Length:获取一个32位整数，该值表示所有维度数组中的元素总数

- 方法

	- Clear
	- Copy(Array,Array,Int32):从数组的第一个元素开始复制某个范围的元素到另一个数组的第一个元素位置。长度由一个 32 位整数指定。
	- GetLength:获取一个 32 位整数，该值表示指定维度的数组中的元素总数。
	- GetValue(Int32):获取一维数组中指定位置的值
	- Reverse(Array)：逆转整个一维数组中元素的顺序
	- SetValue(Object, Int32)：给一维数组中指定位置设置元素设置值
	- Sort(Array):使用数组的每个元素的 IComparable 实现来排序整个一维数组中的元素。

## 索引器：当我们访问数组里面某个属性的时候，是通过索引访问的 [1]就是索引器，索引器本质是通过对象来实现的，通过get和set来获取和设置值


```csharp
  internal class TestInt
    {
       private int[] array = new int[10];
        public int this[int index] {
            get
            {
                return array[index];
            }
            set
            {
                array[index] = value;
            }
        }
    
    }
```
## 泛型： //创建一个类 处理int和double类型相加，需要定义两个方法，非常麻烦
 ``` csharp
 //泛型类创建对象的时候要指定类型
  //泛型的定义
  class ClassA<T> { //Type的缩写 类型是不确定的，可以声明任意类型
      private T a;
      private T b;

      public ClassA(T a, T b)
      {
          this.a = a;
          this.b = b;
      }

      public T Get()
      {
          //dynamic  动态类型
          dynamic num = a;
          dynamic num1 = b;
          dynamic res = num + num1;
          return (T)res;
      }
  }

  //泛型方法
  public static T Add<T>(T a, T b)
   {
       dynamic num = a;
       dynamic num2 = b;
       return  (T)(num+num2);
   }
 ```

## List 集合列表
### 使用场景
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

## ArrayList 集合列表 （与List相似）
### 使用场景
- 需要存储不同数据类型的元素



