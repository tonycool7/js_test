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
        <button id="showDialogue2" data-dialogue="awesomeDialogue">click me!</button>
        <script src="tutorial.js"></script>
        <script src="inheritance.js"></script>
        <script>
            fighter.prototype.ko = '';
            fighter.prototype.takedowns = '';
            fighter.prototype.grappling = '';
            fighter.prototype.skillSet = function (ko, takedowns, grappling){
                this.ko = ko;
                this.takedowns = takedowns;
                this.grappling = grappling;
                console.log(this.name+'\'s Skillset :\nKO:'+this.ko+'\nTakedowns: '+this.takedowns+'\nGrappling: '+this.grappling+'');
            }
            var conor = new fighter(
                document.getElementById('showDialogue'),
                "Conor Mccgregor",
                27,
                "Dublin, Ireland",
                26,
                3,
                6.1,
                '155'
            );

            var alvarez = new fighter(
                document.getElementById('showDialogue2'),
                "Alvarez the underground dog",
                27,
                "USA, ohklahoma",
                15,
                8,
                6.1,
                '155'
            );

            var tractor = new Tractor('Escorts Tractor');
            console.log(tractor.toString());
            console.log(tractor.reverse());
        </script>
    </body>
</html>