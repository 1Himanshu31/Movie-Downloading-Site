const bcrypt  = require('bcrypt');
const mongoose = require('mongoose');
const appConfig = require("../appConfig");
const AppConfigConst = require('../appConfigConst')
exports.getCurentTimeStamp = async function()
{
    const currentTimestamp = Date.now();
    console.log(currentTimestamp)    
    return currentTimestamp
}
exports.getTimezoneFromDate = async function()
{
    const date = new Date(dateString);
    const timestamp = date.getTime();
    return timestamp;
}
exports.getTimezoneFromRequest = async function(req)
{
    var tzstr = req.header.tzstr
    return tzstr
}
exports.getTimezoneOffsetFromRequest = async function(req)
{
    var tzofs = req.header.tzofs
    return tzofs
}
exports.getSessionTypeFromReq = async function(req)
{
    var apiKey = req.header.apikey;
    var reqFrom = req.header.reqFrom
    if(apiKey === appConfig.APPCONFIG.API_KEY && reqFrom == appConfig.APPCONFIG.REQ_FROM)
    {
        return "SESSION"
    }
}
exports.compileRequestWithSkipSendResponse = function(req) 
{
    let compiledReq;
    if(req)
    {
        compiledReq = req;
        compiledReq.body[AppConfigConst.PARAM_SKIP_RESPONSE] = true;
    } 
    return compiledReq;
}