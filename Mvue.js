

class Compile{
    constructor(el,vm){
       this.el= this.isElementNode(el)?el:document.querySelector(el)
    //    console.log(this.el)
       this.vm=vm
    //    获取文档碎片 放入内存中会减少页面的回流和重绘
    const fragment =this.node2Fragment(this.el)
    // 编译模板
    this.Compile(fragment)
    // 追加子元素到根元素
    this.el.appendChild(fragment)
    }

    node2Fragment(el){
        //创建文档碎片
        const f=document.createDocumentFragment()
        let firstChild
        while (node2Fragment=el.firstChild) {
            f.appendChild(firstChild)
        }
        return  f
    }
    isElementNode(node){
        // nodeType 1为元素 3 为
        return node.nodeType===1;
    }
}

class Mvue{
    constructor(options){
        this.$el=options.el,
        this.$data=options.data
        this.$options=options

        // 在el有值的情况下
        if(this.$el){
            // 1 实现一个数据的观察者
            // 2 实现一个指令解析器
            new Compile(this.$el,this)
        }
    }
}