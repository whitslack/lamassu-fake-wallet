"use strict";

module.exports = {

	NAME: "Fake Wallet",
	SUPPORTED_MODULES: [ "wallet" ],

	config: function (config) {
	},

	balance: function (callback) {
		callback(null, { BTC: 1e8 });
	},

	sendBitcoins: function (address, satoshis, transactionFee, callback) {
		console.log("Fake Wallet would send " + satoshis + " satoshis to " + address);
		callback(null, "0000000000000000000000000000000000000000000000000000000000000000");
	},

};
