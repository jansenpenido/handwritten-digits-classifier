const ai = require('./src/ai');
const save = require('./src/save'); 

ai.createTrainingSet();

ai.createNetwork();

//ai.loadNetwork( save.importNetwork() );

ai.train();
ai.print();

save.exportNetwork(ai.network);

process.exitCode = 0;
