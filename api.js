const axios = require("axios");

async function getDetails(id) {
    try {
        const response = await axios.get(
            `https://api.render.com/deploy/srv-cpdumelds78s73envd90?key=tPTA1fRVlx8`
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    getDetails,
    
};
