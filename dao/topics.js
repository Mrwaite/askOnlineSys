var xss = require('xss');


var topics = {
    tiankong : {
        a : [
            heredoc(function(){/*
<pre>
           考点：循环终止条件 continue    难度：简单
           void main()
           {
                 int i,j;
                 int m=0;
                 for(i=0;i<3;i++)
                 {
                       for(j=0;j<3;j++)
                       {
                           if(j==1)
                                continue;
                       	   m++;
                       }
                       if(i==1)
                       	   break;
                  }
                  printf("%d",m);
           }
           请问上述程序的输出是什么？
            </pre>
            */}),
            heredoc(function(){/*
<pre>
             考点：浮点数精度问题	    难度：简单
             int main(void)
             {
                 double a=5.0000000000000000;
                 double b=5.0000000000000001;
             }
             请问变量a和变量b的值是否相等?
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：数组 循环   难度：简单
             int main()
             {
                 char a[6] = “Hello”;
                 int i=0;
                 for(i=0;i<5;i++)
                    a[i]=a[i]+1;
                 printf(“%s\n”,a);
             }
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：进制 转义字符   难度：简单
             int main()
             {
                 int a = 1;
                 printf("ab\0efg\n");
                 printf("ab\060efg");
             }
             请问上述程序的输出是什么？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：逗号表达式   难度：简单
             a=4*5,a*5,a-100;
             请问表达式的值为多少？a为多少？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：强制类型转换  难度：简单
             float x=5.4;
             int a ;
             a = 6*x+(int)x
             则a的的值为？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：变量在计算机内的存储  难度：简单
             int i=1;
             while(i)
                i++;
             请问这是死循环吗？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：枚举类型  难度：简单
             enum MyEnum {first = 3,second,third};
             int c = 1 + third;
             请问c的值为多少？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：位运算  难度：简单
             若x=15，y=6,则x&y的结果是？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             逗号运算符  难度：简单
             #include<stdio.h>
             int main()
             {
                 int a=1,b=2,c=3;
                 printf("%d\t%d\t%d\n",a+b+c,b*=2,c*=2);
                 return 0;
             }
             请问输出结果是什么？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：循环   难度：简单
             int i,j;
             for(i=4;i<-3;i--){
                 j=++i;
                 i=j--;
             }
             请问上述循环共执行了几次？
             </pre>
             */})
        ],
        b : [
            heredoc(function(){/*
<pre>
             考点：函数的递归调用 难度 : 中等
             int fun(int n)
             {
                if(n==0)	return 0;
                n = n-1;
                fun(n);
                printf(“%d”,n)
             }
             int main(void)
             {
                fun(5);
             }
             请问该程序的输出结果是什么？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：指针  难度：中等
             char *a = “Welcome to Xiyounet!”，a=a+11;
             printf(“%s”,a);
             请问以上两条语句的输出结果是什么?
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：#define宏定义 边界效应   难度：中等
             #define MUL(A,B) A*B
             int main()
             {
                 int a = 1, b = 2, c = 3, d = 0;
                 d = MUL(a + b, c);
                 printf(“%d”,d);
                 return 0;
             }
             请问上述程序的输出是什么？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：指针	 难度：中等
             char ch[] = “Welcome to Xiyounet”
             char *p = ch;
             printf(“%c %c”,*(p+2),*p+2);
             请问输出的值为多少？

             </pre>
             */})
        ],
        c : [
            heredoc(function(){/*
<pre>
             考点：指针 sizeof strlen printf返回值   难度：困难
             int main(void){
                 char *hello = "Welcome to XiYou Association of Network Technology!";
                 printf("%d %d\n",printf("%d ",sizeof(hello)),printf("%d ",strlen(hello)));
                 return 0;
             }
             请问上述程序的输出是什么？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：指针 strlen sizeof   难度：困难
             int main()
             {
                 char h[18]=”Hello Xiyounet!”;
                 printf(“%d %d %d”,sizeof(h),sizeof(strlen(h)),strlen(h));
             }
             请问上述程序的输出是什么？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             考点：指针 循环   难度：困难
             int main()
             {
                 char b[] = “Xiyounet”;
                 char *pointer;
                 for(pointer = b;*pointer;pointer+=3)
                    printf(“%s”,pointer);
             }
             请问该程序的输出结果为？
             </pre>
             */})
        ]
    },
    jianda : {
        a : [
            heredoc(function(){/*
<pre>
             for循环的3个表达式是否可以全部省略？如果可以，举例说明如何结束？如果不可以，写出理由
             }
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             你认为为什么会有编程语言的出现？你所了解的编程语言有哪些？他们有什么特点吗，简要说明。
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             请简述由C语言源文件生成.exe文件的过程
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             如何找出一定范围内所有奇数位数之和等于偶数位数之和的数。简述思想即可。
             如：1232 （1+3=4=2+2）；
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             现在有一堆整数：10,89,0,-1,123456789,0,20 请问你有几种方法将他们由小到大排序？说说你知道的排序算法？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             请谈谈你对EOF标识符的理解。
             </pre>
             */})
        ]
    },
    biancheng : {
        a : [
            heredoc(function(){/*
<pre>
             难度:简单
             153是一个非常优美的数
             153=1*1*1+5*5*5+3*3*3
             请编程输出三位整数（abc）中，满足abc=a*a*a+b*b*b+c*c*c这个条件的最大的整数
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             难度:简单
             请编程输出1~123456之间所有7的倍数和末尾含7的数的和
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             难度:简单
             斐波纳契数列（Fibonacci Sequence），又称黄金分割数列，指的是这样一个数列：1、1、2、3、5、8、13、21……从第三项开始每一项是前两项的和。
             请编程输出斐波那契数列第45项
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             难度:简单
             有一堆煤球，堆成三角棱锥形。具体：第一层放1个，第二层3个（排列成三角形），第三层6个（排列成三角形），第四层10个（排列成三角形），.... 如果一共有100层，请编程输出共有多少个煤球？
             </pre>
             */})
        ],
        b : [
            heredoc(function(){/*
<pre>
             难度:中等
             可爱的小明特别喜欢爬楼梯，他有的时候一次爬一个台阶，有的时候一次爬两个台阶，有的时候一次爬三个台阶。如果这个楼梯有36个台阶，请编程输出小明一共有多少种爬法呢？
             </pre>
             */}),
            heredoc(function(){/*
<pre>
             难度:中等
             请用冒泡排序算法编程实现对数组 [-1, 0, 5, 2, 7, 0, 18, 5, 4, 3, 9, 1] 完成升序（由小到大）排序
             </pre>
             */})
        ]
    },
    getTopic : function (a, b, c, getArray) {
        var formArray = this[getArray];
        var a = get(getArray, '1', a, formArray.a);
        var b = get(getArray, '2', b, formArray.b);
        var c =get(getArray, '3', c, formArray.c);
        return a.concat(b.concat(c));
    },
    /**
     * @param <String> tian_nu
     * @param <String> bian_nu
     * @return <Object> {
    *   ['填空', '填空'],
    *   ['编程', '编程']
    * }
     */
    getPaper : function () {
        var tiankong = this.getTopic(3, 1, 1, 'tiankong');
        var jianda = this.getTopic(1, 0, 0, 'jianda');
        var biancheng = this.getTopic(1, 1, 0, 'biancheng');
        return { type : [5,1,2], tiankong : tiankong, jianda : jianda, biancheng : biancheng};
    }

};

function get (getArray, type, nu, arr){
    var newArrary = [];
    var newSub = [];
    var i;
    for (i = 0; i < nu ; i++) {
        do {
            n = Math.floor(Math.random() * arr.length);
        }while(newSub.indexOf(n) !== -1);
        newSub.push(n);
        switch (getArray) {
            case 'tiankong' : getArray = '填空题';break;
            case 'jianda' : getArray = '简答题';break;
            case 'biancheng' : getArray = '编程题';break;
            default:
                ;
        }
        newArrary.push([getArray, arr[n], type]);
    }
    return newArrary;
}


function heredoc(fn) {
    return fn.toString().split('\n').slice(1,-1).map(function (item) {
            return xss(item);
        }).join('<br>');
}


module.exports = topics;