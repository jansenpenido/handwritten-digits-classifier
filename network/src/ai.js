const mnist = require('mnist'); 
const synaptic = require('synaptic');

const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

var ai = {
    trainingSet: null,
    testSet: null,
    network: null,
    
    createTrainingSet: function(){
        var set = mnist.set(50, 20);
    
        this.trainingSet = set.training;
        this.testSet = set.test;
    },
    
    loadNetwork: function(newNetwork){
        this.network = newNetwork;
    },
    
    createNetwork: function(){
        var inputLayer = new Layer(784);
        var hiddenLayer = new Layer(100);
        var outputLayer = new Layer(10);
        
        inputLayer.project(hiddenLayer);
        hiddenLayer.project(outputLayer);
        
        this.network = new Network({
            input: inputLayer,
            hidden: [hiddenLayer],
            output: outputLayer
        });
        
        return this.network;
    },
    
    train: function(){
        var trainer = new Trainer(this.network);
    
        trainer.train(this.trainingSet, {
            rate: .2,
            iterations: 20,
            error: .1,
            shuffle: true,
            log: 1,
            cost: Trainer.cost.CROSS_ENTROPY
        });
    },
    
    print: function(){
        console.log(this.network.activate(this.testSet[0].input));
        console.log(this.testSet[0].output);
    }
}

if (module) module.exports = ai; 
