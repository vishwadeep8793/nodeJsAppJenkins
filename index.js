const http=require("http")
const fs=require("fs")


const port=process.env.PORT || 3002

const server=http.createServer((req,res)=>
{

        if(req.url=="/")
        {
            res.statusCode=200
            res.setHeader('Content-Type', 'text/html')
            //  name=abd&age=45   (query to server)
            data=fs.readFileSync("pages/home.html")
            res.end(data.toString())
        }
        else if(req.url=="/about")
        {
           
            res.statusCode=200
            res.setHeader('Content-Type', 'text/html')
            data=fs.readFileSync("pages/about.html")
            res.end(data.toString())
        }
        else if(req.url=="/contact")
        {
            res.statusCode=200
            res.setHeader('Content-Type', 'text/html')
            data=fs.readFileSync("pages/contact.html")
            res.end(data.toString())
        }
        else
        {
            res.statusCode=404
            res.setHeader('Content-Type', 'text/html')
            data=fs.readFileSync("pages/404.html")
            res.end(data.toString())
        }
   
       
})

server.listen(port,()=>
{
    console.log(`Server is running on ${port}`)
})