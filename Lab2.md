# Lab2 mini_report
## 李文奇 10225102444
## Code Handling Practices and Lexer Features
### How you handle comments
该词法分析器定义了COMMENT、STR、IGNORE和默认的INITIAL状态，COMMENT即对应注释状态。

在`scanner.h`文件中定义了`comment_level`变量，用来表示注释层级。

`begin()`函数是FlexC++提供的用于词法分析器切换状态的函数。

当在INITIAL状态时，如果匹配到`/*`，即将`comment_level`置0，并进入COMMENT(注释)状态。

在`<COMMENT>`状态中，如果匹配到`/*`，即表示进入了更高一层的注释中，将`comment_level`+1，同样的，如果匹配到`*/`，即表示当前层级的注释结束，此时如果`comment_level`_>1,将`comment_level`-1，否则表示整段注释已经结束，返回到INITIAL状态。

另外，如果在注释状态下匹配到其它任何字符(`.|\n`)，直接跳过即可。
### How you handle strings
在`scanner.h`文件中定义了`string_buf_`变量，用来接收匹配到的字符串。

`setMatched()`函数是FlexC++提供的用于将文本存储到匹配文本缓冲区中的函数。

当匹配到`\"`时(即`"`，`\`用来转义)，这表示字符串的开始，进入STR(字符串)状态，并清空`string_buf_`的字符串缓冲区，用于存储识别到的字符串内容。

在`<STR>`状态中，如果再次匹配到`\"`，即表示字符串结束，将词法分析器的状态切换回INITIAL状态，把识别到的字符串内容设置为当前匹配的文本，并返回标识符类型为`STRING`。

如果匹配到`\n`、`\t`、`\"`、`\\`这种含有转义字符的输入，需要将其代表的字符存入`string_buf_`。

如果匹配到形如`\f__f\`的序列，则将其忽略。

如果匹配到形如`\ddd`和`\^C`的序列，则需要将其转换成对应的ASCLL码字符并添加到`string_buf_`中。

另外，如果匹配到其它任意字符，直接将其添加到`string_buf_`中。
### Error handling
在`<STR>`和`<COMMENT>`状态中添加`<<EOF>>`，分别表示遇到文件结束时，如果字符串和注释没有相应结束标志，则应当报错。

在`.lex`文件的末尾写上对illegal input的报错处理。
### End-of-file handling
在代码最后添加`<<EOF>>`，表示文件结束，并返回0(表示正常结束)。
### other interesting features of your lexer
参考`lex.cc`中的`lex()`函数对`scanner.h`中`preCode()`和`postCode`的调用，补充这两个函数的代码。

创建一个字符串容器`record`，记录词法分析器所处的状态，后续可以查看`record`中的内容进行调试。(原本想直接输出每一种状态，但这样会导致测评时字符串匹配错误)
## Challenges and Bug Fixes
### Challenges during your implementation
主要有以下几点：

1.不熟悉FlexC++的语法规则，官方手册过于繁杂，不易上手。

2.部分正则表达式过于抽象，转义字符很容易写错。

3.处理字符串和注释考虑情况不全面，容易疏忽一些细节。
### Bug fix log
1.忽视了词法分析的优先级问题，按照注释顺序编写代码，导致变量名和数字的优先级高于保留字。

解决方法：先写匹配保留字的代码，然后是字符串、注释、变量名和数字。

2.字符串匹配中遗漏了对`\ddd`和`\^C`的处理。

解决方法：在`<STR>`状态中加上相应规则。

3.正则表达式错误。(如`\f__f\`：`\\[ \n\t\f]+\\`、`\^C`：`\\\^[A-Z\[\]^_\\]`)

解决方法：通过[正则表达式工具](https://www.jyshare.com/front-end/854/)编写正确的正则表达式。