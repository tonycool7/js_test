<html>
    <head>
        <meta charset="utf-8">
        <meta name="description" content="">
        <title>Тестовое задание</title>
        <link type="text/css" href="/css/dialog.less" rel="stylesheet/less">
        <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.7.1/less.min.js"></script>
    </head>
    <body>
        <button id="showDialogue" data-dialogue="awesomeDialogue">click me!</button>
        <script src="/js/dialog.js"></script>
        <script>
            var dialogue = new Dialog(
                document.getElementById('showDialogue'),
                500,
                300,
                .3,
                'click',
                'Modal Head',
                '/data/data.php',
                function () {
                    document.getElementById(document.getElementById('showDialogue').getAttribute('data-dialogue')).style.opacity = 1;
                },
                function () {
                    document.getElementById(document.getElementById('showDialogue').getAttribute('data-dialogue')).style.opacity = 0;
                }
            );
            console.log(dialogue instanceof Dialog);
            console.log(dialogue.constructor);
        </script>
    </body>
</html>