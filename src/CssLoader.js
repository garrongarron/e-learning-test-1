const cssloader = (_folder = null, _cssList = null) => {
    function cb() {
        let folder = _folder || 'src/components/landing/css/' 
        let cssList = _cssList || [
            'block__banner.css',
            'block__column.css',
            'block__curriculum.css',
            'block__email_leads.css',
            'block__featured-products.css',
            'block__image-with-text.css',
            'block__pricing.css',
            'block__text.css',
            'font.css',
            'footer.css',
            'header.css',
        ];
        cssList.forEach(css => {
            loadCss(folder+css);    
        });
    }
    function loadCss(filename) {
        var l = document.createElement('link');
        l.rel = 'stylesheet';
        l.href = filename
        var h = document.getElementsByTagName('head')[0];
        h.parentNode.insertBefore(l, h);
    }
    window.addEventListener('load', cb);
}

export default cssloader