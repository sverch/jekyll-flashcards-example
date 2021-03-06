var DeckStats = function( params ){
  if (typeof params === "undefined") {
    params = {}
  }
  this.seenCards = params.seenCards || [];
  this.failedCards = params.failedCards || {};
  this.okCards = params.okCards || {};
}

DeckStats.prototype = {
  constructor: DeckStats,
  addSeenCard : function( card ){
    if( this.seenCards.indexOf( card ) === -1 ){
      var newState = new DeckStats( this );
      newState.seenCards = this.seenCards.concat( card );
      return newState;
    }
    return this;
  },
  addFailedCard : function( card ){
    var newState = new DeckStats( this );
    if( this.failedCards[ card ] ){
      newState.failedCards[ card ] = this.failedCards[ card ] + 1;
    }
    else {
      newState.failedCards[ card ] = 1;
    }
    return newState;
  },
  addOkCard : function( card ){
    var newState = new DeckStats( this );
    if( this.okCards[ card ] ){
      newState.okCards[ card ] = this.okCards[ card ] + 1;
    }
    else {
      newState.okCards[ card ] = 1;
    }
    return newState;
  }
};

module.exports = DeckStats;
