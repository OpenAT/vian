// CKEditor Settings
(function () {
    'use strict';
    // Overwrite class method of website/static/src/js/website.editor.js@839
    // to append/set/override CKEDITOR.config for wrapwrap editor
    openerp.website.RTE = openerp.website.RTE.extend({
        _config: function () {
            // Run the original method to modify it's result
            var config =  this._super();

            // Set custom toolbar
            // https://docs.ckeditor.com/ckeditor4/latest/guide/dev_toolbar.html
            config.toolbar = [{
                name: 'insert', items: [
                    "PrintField"
                ]
            }, {
                name: 'basicstyles', items: [
                    "Bold", "Italic", "Underline", "Strike", "Subscript",
                    "Superscript", "TextColor", "BGColor", "RemoveFormat"
                ]
            }, {
                name: 'span', items: [
                    "Link", "Blockquote", "BulletedList",
                    "NumberedList", "Indent", "Outdent"
                ]
            }, {
                name: 'justify', items: [
                    "JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"
                ]
            }, {
                name: 'special', items: [
                    "Image"
                ]
            }, {
                name: 'styles', items: [
                    "Styles",
                ]
            }
            ];

            // Add Custom font and font background colors
            config.colorButton_colors = 'ffffff,333333,666666,F19130,8c8c8c,ea470d,d23da2,f49800,528dcb,bd292f';
            // config.colorButton_colorsPerRow = 3;
            config.colorButton_enableAutomatic = true;


            // styles dropdown in toolbar
            config.stylesSet = [
                {name: 'p Normal', element: 'p'},
                {name: 'H1', element: 'h1'},
                {name: 'H2', element: 'h2'},
                {name: 'H3', element: 'h3'},
                {name: 'H4', element: 'h4'},
                {name: 'H5', element: 'h5'},
                {name: 'H6', element: 'h6'},
                {name: 'Formatted', element: 'pre'},
                {name: 'Address', element: 'address'},
            ];

            // return the config
            return config;
        }
    });
})();





