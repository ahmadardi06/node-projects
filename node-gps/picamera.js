var spawn = require('child_process').spawn;
spawn('raspistill', ['-o', 'node-take-nopreview-noconsole.jpg', '-w', '640', '-h', '480', '-n']);
