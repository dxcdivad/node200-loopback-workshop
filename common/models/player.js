'use strict';

module.exports = function(Player) {
    Player.disableRemoteMethodByName("delete", true);
};
