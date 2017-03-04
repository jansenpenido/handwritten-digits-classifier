const synaptic = require('synaptic');
const jsonfile = require('jsonfile');

// Location of the JSON file to be written/read
const fileLocation = './etc/network.json';

var save = {
    
    exportNetwork: function(network){
        
        var jsonNetwork = network.toJSON();
        
        jsonfile.writeFile(fileLocation, jsonNetwork, function (err) {
          console.error(err)
        });
    },
    
    importNetwork: function(){
        
        var jsonNetwork = {};
        
        jsonfile.readFile(fileLocation, function(err, jsonNetwork) {
          //console.dir(obj)
          console.error(err)
        })
        
        var newNetwork = synaptic.Network.fromJSON(jsonNetwork);
        
        return newNetwork;
    }
    
}

if (module) module.exports = save; 