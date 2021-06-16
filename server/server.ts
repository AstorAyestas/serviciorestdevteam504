import express, { Application } from 'express';
import studentRouter, { studentPath } from '../routes/student.route';

class Server {
    private application: Application
    private port: string
    public constructor() {
        this.application = express()//debe ir primero
        this.config()
        this.port = process.env.PORT_SERVER || '8080'
        this.routes()
    }
    public run() {
        const showRun = () => console.log(`Server run on port ${this.port}`)
        this.application.listen(this.port, showRun)
    }
    private routes() {
        this.application.use(studentPath, studentRouter)
    }
    private config() {
        this.application.use(express.json())
    }
}

export default Server