        const bc = new BroadcastChannel('test_channel');
        let score = 0;
        bc.onmessage = function (ev) { setScore(parseInt(ev.data)); }
        setScore(score);
        document.getElementById('addgoal').addEventListener('click', () => { 
            setScore(score + 100);
        bc.postMessage(score);
        });

        function setScore(newScore) {
            score = newScore;
            document.getElementById('score').innerText = 'CURRENT SCORE: ' + score;
        }

        // periodically update the other tabs
        window.setInterval(() => { bc.postMessage(score); }, 1000);

        document.getElementById('subgoal').addEventListener('click', () => { 
            setScore(score - 100);
            console.log("hi");
        bc.postMessage(score);
        });

        function setScore(newScore) {
            score = newScore;
            document.getElementById('score').innerText = 'CURRENT SCORE: ' + score;
        }

        // periodically update the other tabs
        window.setInterval(() => { bc.postMessage(score); }, 1000);