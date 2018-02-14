// 引入样式文件
import '../assets/styles/footer.styl'


export default{
    // 传递变量
    data(){
        return{
            author: "Miot"
        }
    },
    
    render(){
        // 写html的内容
        return(
            <div id="footer">
                <span>Written by {this.author}</span>
            </div>
        )
    }
}