const messages = []
let id = 0

module.exports = {
    create(req,res) {
        console.log('are you working?')
        messages.push ({ 
            id: id,
            text: req.body.text,
            time: req.body.time 
        });
        id++
        res.status(200).json( messages )
    },

    read(req,res){
        res.status(200).json( messages );
    },

    update(req,res) {
        const { text } = req.body;
        const { id }= req.params;
        for(var i = 0; i< messages.length; i++ ) {
            if (messages[i].id == id){
                messages.text = text;
            }
        }
        res.status(200).json( messages );
       
    },
    delete(req,res){
        const { id }= req.params;
        messages.forEach((e,i,a) => {
            if(e.id == id){
                a.splice(i,1)
            }
        })
        res.status(200).json( messages )
    }

}
