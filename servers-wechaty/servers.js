import express from 'express'
const app = express()
//创建路由
const router = express.Router()
//挂载到app
app.use('/api', router)
//编写接口
router.get('/list', (req, res) => {
    res.send({ status: 200, message: '查询成功', data: { name: '张三', age: 18 } })
})
app.listen(8899, () => {
    console.log('服务器已经启动,请访问 http://localhost:8899')
})
