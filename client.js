function sanitizeHTML(text) {
    text = text.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');

    var tagsToReplace = {
        '<script>': '',
        '</script>': '',
        '<img>': '',
        '<a>': ''
    };

    for (var tag in tagsToReplace) {
        text = text.replace(new RegExp(tag, 'gi'), tagsToReplace[tag]);
    }

    return text;
}

function showOutput() {
    var input = document.getElementById("inputField").value;
    var outputArea = document.getElementById("outputArea");
    outputArea.innerHTML = sanitizeHTML(input);
}