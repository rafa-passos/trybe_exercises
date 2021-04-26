let numastericos = 7;


let ast=[];

for (let index = 0; index < numastericos; index++) {

    ast += '*';

};

for (let index = 0; index < numastericos; index++) {

    console.log(ast);

}; 


//  *
//  **
//  ***
//  ****
//  *****
ast=[];

for(let linha=0;linha<numastericos; linha += 1){
    ast += '*'
    console.log(ast);
};
      
//Piramide Inversa
//      *
//     **
//    ***
//   ****
//  *****

ast=[];
lc= numastericos - 1;
lca=1;

for(let v=0; v<numastericos;v +=1){

    for(let c=lc; c > 0; c -= 1){
        ast += ' ';
    };

    lc -= 1;

    for(let a=0; a < lca ;a += 1){
        ast += '*';
    };
    lca +=1;

    console.log(ast);
    ast=[];
};


ast=[];
lc= (numastericos - 1)/2;
lca=1;

for(let v=0; v<numastericos;v +=1){

    for(let c=lc; c > 0; c -= 1){
        ast += ' ';
    };


    for(let a=0; a < lca ;a += 1){
        ast += '*';
    };
    lca +=2;

    for(let c=lc; c > 0; c -= 1){
        ast += ' ';
    };


    lc -= 1;

    console.log(ast);
    ast=[];

    if(lca>numastericos){
        break;
    }


};




