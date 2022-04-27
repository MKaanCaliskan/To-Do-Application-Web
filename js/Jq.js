$('#add-btn').click(function() {
    return !$('#incomplete-tasks li :checked').closest('li').appendTo('#progress-tasks');
});
$('#remove-btn').click(function() {
    return !$('#progress-tasks li :checked').closest('li').appendTo('#incomplete-tasks');
});

$('#select').click(function() {
    return !$('#progress-tasks li :checked').closest('li').appendTo('#completed-tasks');
});
$('#selectremove').click(function() {
    return !$('#completed-tasks li :checked').closest('li').appendTo('#progress-tasks');
});