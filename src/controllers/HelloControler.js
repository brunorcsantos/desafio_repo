class HelloController {
    async index(req,res){
        return res.json({
            hello: 'World'
        });
    }
}

export default new HelloController();