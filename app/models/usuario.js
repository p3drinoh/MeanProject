var mongoose = require('mongoose');

var userSchema =  new mongoose.Schema({

  login: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
});

var Usuario = mongoose.model('Usuario', userSchema);

var admin = new Usuario ({
  login : "admin",
  senha : "12345678"
}); admin.save(function(err){
  if(err) return api.callbackSave(err);
})
