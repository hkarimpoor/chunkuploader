
$('#fileupload').fileupload({ dataType: 'json' });
$('#fileupload').bind('fileuploaddone', function (e, data) {
    $('#container img').attr('src', './uploads/' + data.files[0].name);
});