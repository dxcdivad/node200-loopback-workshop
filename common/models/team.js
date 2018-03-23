'use strict';

module.exports = function(Team) {
  Team.disableRemoteMethodByName('delete', true);
};
