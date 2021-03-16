Hooks.on("init", () => {            
	CONFIG.TinyMCE.toolbar = "styleselect forecolor backcolor bullist numlist image table hr link removeformat code fontsizeselect save";
	CONFIG.TinyMCE.style_formats = CONFIG.TinyMCE.style_formats.concat([
        {
            title: "Float",
            items: [
                {
                    title: 'Left',
                    selector: 'img',
                    styles: {
                        'float': 'left', 
                        'margin': '0 10px 0 10px'
                    }
                },
                {
                    title: 'Right',
                    selector: 'img', 
                    styles: {
                        'float': 'right', 
                        'margin': '0 0 10px 10px'
                    }
                }
            ]
        }
    ]);

});

