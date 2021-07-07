const dynamoose = require('dynamoose');

const schema = new dynamoose.Schema({
    'id': String,
    'name': String,
    'phone': String,
});

// first arguement, tells dynamoose what table to connect to
const friendModel = dynamoose.model('friends', schema);

exports.handler = async (event) => {

    let list;

    if (event.pathParameters) {
        const id = event.pathParameters.id;
        list = await friendModel.query('id').eq(id).exec();
    } else {
        list = await friendModel.scan().exec();
    }
    
    
    const response = {
        statusCode: 200,
        body: JSON.stringify(list),
    };
    return response;
};
