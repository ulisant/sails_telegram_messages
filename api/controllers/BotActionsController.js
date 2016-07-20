/**
 * BotActionsController
 *
 * @description :: Server-side logic for managing Botactions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function(req, res){
		var users = bot.sendDataUsers();
		return res.view('homepage',{
			myUsers: users,
		})
	},
	sendMessage: function(req, res){
		var id_us = req.param('sel')
		var mess = req.param('message')
		bot.sendMessageUser(id_us, mess)
		return res.redirect('/');
	}

};
