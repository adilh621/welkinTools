const mongoose = require("mongoose")




const toolSchema = mongoose.Schema(

    // ADD FK AND PK
    // ADD IMAGE 
  {
      
    name: {
      type:String,
      
      
        
    },
    desc: {
        type: String,
        unique: true
        
      },
    category: {
      type: String,
      
    },
    status: {
      type: String,
      
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model('Tool', toolSchema)

