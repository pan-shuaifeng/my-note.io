# 事件与委托

## 委托delegate基本使用

### 作用

1. 代理事件

  ```csharp
  //基本定义
  delegate void MyDelegate(int a,int b);
  //实例化委托（第一种方法）
  { 
  MyDelegate myDelegate = new MyDelegate(Test);
  }
  
  //利用委托定义事件(第二种方法)
  {
  MyDelegate myDelegate;
  myDelegate+= Test;//委托的多播
  }
 
 myDelegate(10,20);
 
 //将方法与委托解绑
 myDelegate-= Test;
 
 public void Test(int a,int b){
 Console.WriteLine(a+b);
 }
  ```

#### 结果

  ```csharp
  - 30
  ```

2. 将方法当成参数传递

  ```csharp
  Test1(Test)
  
  public void Test1(MyDelegate md){
  Console.WriteLine("Test1");
  if(md!=null){
  md(20,20);
  }
  }
  ```

#### 结果

  ```csharp
  - Test1
  - 40
  ```

## Action

### 作用

1. Action与委托类似，但是Action没有返回值，并且Action的参数类型和个数是固定的，Action有0-16个参数，并且Action的参数类型不能是out和ref
2. **Action与Func的区别在于Func有返回值，而Action没有返回值**

### 语法

- 代理事件

```csharp
// 基本定义 
Action<int a,int b> action;
action+=Test;
action(10,20);
```

#### 结果

  ```csharp
  - 30
  ```

- 把方法当成参数传递

```csharp
  Test2(Test)

  public void Test2(Action<int a,int b> action){
  Console.WriteLine("Test2");
  if(action!=null){
  action(20,20);
  }
  }
```

#### 结果

  ```csharp
  - Test2
  - 40
  ```

## Func

- 代理事件

```csharp
// 基本定义 a代表返回值 b，c代表形参
Func<int a,int b,int c> action;
action+=Test3;
Console.WriteLine(action(10,20));

public int Test3(int a,int b){ 
 Console.WriteLine("Test3");
 return a+b;
 }
```

#### 结果

  ```csharp
  - Test3
  - 30
  ```

- 把方法当成参数传递

```csharp
  Test4(Test3)
  
  public void Test4(Action<int a,int b> action){
  Console.WriteLine("Test4");
  if(action!=null){
    Console.WriteLine(action(20,20));
  }
  }
```

#### 结果

  ```csharp
  - Test4
  - Test3
  - 40
  ```

## event事件

- Main

```csharp
Player p = new Player(); 
//p.md()  //事件不能被其他类调用，自己可以
p.Call()

```

- Player.cs

```csharp
 public class Player{
 
 public delegate void MyDelegate();
 
 public event MyDelegate md;
 
 public void Call(){
 if(md!=null){
  md();
 }
}
```


