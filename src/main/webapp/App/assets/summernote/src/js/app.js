require.config({
    baseUrl: 'src/js',
    paths: {
        jquery: '//code.jquery.com/jquery-1.9.1.min',
        bootstrap: '//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min'
//    summernotevideo: '/../../plugin/summernote-ext-video',
//    CodeMirror: '//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/codemirror',
//    CodeMirrorXml: '//cdnjs.cloudflare.com/ajax/libs/codemirror/3.20.0/mode/xml/xml.min',
//    CodeMirrorFormatting: '//cdnjs.cloudflare.com/ajax/libs/codemirror/2.36.0/formatting.min'
    },
    shim: {
        bootstrap: ['jquery']
//    CodeMirror: { exports: 'CodeMirror' },
//    CodeMirrorXml: ['CodeMirror'],
//    CodeMirrorFormatting: ['CodeMirror', 'CodeMirrorXml']
//    summernotevideo: ['summernote']
    },
    packages: [
        {
            name: 'summernote',
            location: '/App/assets/summernote/src/js',
            main: 'summernote'
        }
    ]
});

require([
    'jquery', 'bootstrap',
//	'CodeMirrorFormatting',
    'summernote'
], function ($) {
    var self = this;
    var url = 'http://www.daisinuo.com/pic/upload';

    $('.edition-submit').on('click', function (e) {
        window.sHTML = $('#summernote').code();
        self.sHtml = $('#summernote').code();
        self.title = $('.edition-head-input').val();
        if (!!self.title) {
            return alert('标题不能为空，请检查后再提交。')
        }
        if (!!self.sHtml) {
            return alert('内容不能为空，请检查后再提交。')
        }
        $.ajax({
            url: 'xxx',
            data: {
                title: self.title,
                content: self.sHtml
            },
            success: function(data) {
                if (data.status == 0) {
                    return alert('添加成功。');
                }
                return alert('添加失败。')
            },
            error: function() {
                alert('添加失败，网络错误。')
            }
        })
        console.log(sHTML);
    });

    $('.edition-preview').on('click', function (e) {
        console.log('click');
        $('.news-wrap').show();
        $('.news-main').html($('#summernote').code());
    });

    $('.close-btn').on('click', function (e) {
        $('.news-wrap').hide();
    });

    $('.news-edit').on('click', function (e) {
        var $el = $(e.currentTarget);
        self.nowTagId = $el[0].id;
        console.log( self.nowTagId)
        $el.addClass('now').siblings().removeClass('now');

    })

    $('#summernote').summernote({
        focus: true,
        height: 300,             // set minimum height of editor
        minHeight: null,             // set minimum height of editor
        maxHeight: null,

        onImageUpload: function (files, editor, welEditable) {
            console.log(files, editor, welEditable);
            sendFile(files[0], editor, welEditable);
        }
    });

    function sendFile(file, editor, welEditable) {
        var data = new FormData();
        data.append("file", file);
        $.ajax({
            data: data,
            contentType: false,
            type: "POST",
            url: url,
            cache: false,
            processData: false,
            success: function (data) {
                editor.insertImage(welEditable, data.data.url);
            }
        });
    }


});
