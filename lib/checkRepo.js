var qrsInteract = require('./qrsInstance');
var config = require('../config/config');
var Promise = require('bluebird');
var winston = require('winston');
var config = require('../config/config');
var logger = require('./logger');

var repoCount = {
    count: function(appRef, appId) {
        return new Promise(function(resolve, reject) {
            var path = "/app/object/count";
            path += "?filter=owner.userId eq '" + config.qrs.repoAccountUserId + "' and owner.userDirectory eq '";
            path += config.qrs.repoAccountUserDirectory + "' and (objectType eq 'dimension' or objectType eq 'measure')";
            path += " and app.id eq " + appId;

            return qrsInteract.Get(path)
                .then(function(result) {
                    logger.debug("Number of AppObjects owned by " + config.qrs.repoAccountUserId + " inside app " + appId + ": " + JSON.stringify(result), { module: "checkRepo", app: appRef.name });
                    resolve(result.body.value);
                })
        })
    },
    deleteCount: function(appRef, appId, objectType) {
        return new Promise(function(resolve, reject) {
            var path = "/app/object/count";
            path += "?filter=tags.name eq 'gms' and objectType eq '" + objectType + "'";
            path += " and app.id eq " + appId;

            return qrsInteract.Get(path)
                .then(function(result) {
                    logger.debug("Number of " + objectType + "s remaining to be deleted: " + JSON.stringify(result), { module: "checkRepo", app: appRef.name });
                    resolve(result.body.value);
                })
        });
    }
}


module.exports = repoCount;