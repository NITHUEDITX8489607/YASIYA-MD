const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~lEAXDIyC#RxFvRf5cDzB6UGCcjx1RksDAIJ7B1_Q_vv4q9LsG_qA'
};
