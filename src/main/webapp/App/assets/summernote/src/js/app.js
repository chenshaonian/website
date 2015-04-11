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

	$('.edition-submit').on('click', function (e){
		var sHTML = $('#summernote').code();
		console.log(sHTML);
	});
	$('#summernote').summernote({
		focus: true,
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
