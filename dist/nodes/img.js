var stylus = require('stylus'),
	fs = require('fs'),
	chalk = require('chalk');

exports.addImg = function(globalPath, localPath, wl, imgName){

	var globalImgPath = globalPath.string + '/' + wl.string + '/'+imgName.string;
	var globalDefaultPath = globalPath.string + '/default/' + imgName.string;

	var imgPath = localPath.string + '/' + wl.string + '/'+imgName.string;
	var defaultPath = localPath.string + '/default/' + imgName.string;

	if(fs.existsSync(globalImgPath)){
		return imgPath;
	} else {
		if (fs.existsSync(globalDefaultPath)) {
			return defaultPath;
		}  else {
			console.warn(chalk.yellow('Warning, file '+ chalk.magenta(imgPath) +' doesn\'t exist'))
		}
	}
}
