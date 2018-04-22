// 导入需要用到的nodejs库
var http = require('http')
var url = require('url')
var qs = require('querystring')

// 定义路由变量
var route = {
    '/':'/',
    'favicon':'/favicon.ico',
    'login':'/login'
}

// 判断路由是否有效
var isValid = function(reqPath){
    for(var key in route){
        if(route[key] == reqPath){
            return true
        }
    }
    return false
}

//输出json格式的数据
var writeOut = function(query,res){
    res.write(JSON.stringify(query))
    res.end()
}

// 创建请求，并根据需求返回内容
http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.setHeader('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    // 当客户端传入路由不存在时，报404
    if(!isValid(url.parse(req.url).pathname)){
        res.writeHead(404,{'Content-Type':'text/plain;charset = utf-8'})
        res.write("{'errcode':404,'errmsg':'404 页面不见啦'}")
        res.end()
    }else{
        res.writeHead(200,{'Content-Type':'application/json;charset = utf-8'})
        // 分别判断客户端请求接口，并对其进行计算与输出
        if(url.parse(req.url).pathname == '/login'){
            var useData = ''
            req.addListener('data',function(data){
                useData += data
            })
            req.addListener('end',function(){
                const resData = useData ? JSON.parse(useData) : useData    
                if(resData.user == 15067143613 && resData.password ==111111){
                    var query = {code: '1', permission: '1'};
                    writeOut(query, res);
                }else if(resData.user == 15067143614 && resData.password ==111111){
                    var query = {code: '1', permission: '2'};
                    writeOut(query, res);
                }else{
                    var query = {code:'0'};
                    writeOut(query, res);
                }
            })
        }else if(url.parse(req.url).pathname == '/index'){

        }
    }
}).listen(3306,'127.0.0.1')