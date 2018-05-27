const prepForCompute = function(data) {
    console.log(data.typeOf(), 'oh yeah I got the data')

    

   
    let splitData = data.split(',');

    console.log(splitData);
}


module.exports.prepForCompute = prepForCompute;