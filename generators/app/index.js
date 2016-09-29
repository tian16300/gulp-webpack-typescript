var generators = require('yeoman-generator');
var _ = require('lodash');

module.exports = generators.Base.extend({
    constructor: function() {
        generators.Base.apply(this,arguments);
//            this.argument('appname', { type: String, required: true });
            // And you can then access it later on this way; e.g. CamelCased
           // this.appname = _.camelCase(this.appname);
    },
    prompting: function () {
        return this.prompt({
            type    : 'input',
            name    : 'name',
            message : 'Your project name:'
        }).then(function (answers) {
            this.appname = answers.name;
            this.log(answers.name);
        }.bind(this));
    },

    elab: function () {
        //Change Dest
        this.destinationRoot(this.appname);

        //Copy Files
        this.fs.copyTpl(
            this.templatePath(),
             this.destinationPath(),
                { title: this.appname }
            );
    }
});